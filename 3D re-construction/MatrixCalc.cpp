#include <iostream> 
#include <string>   
#include <iomanip>  
#include <sstream>  

#include <opencv2/imgproc/imgproc.hpp>  
#include <opencv2/core/core.hpp>      
#include <opencv2/highgui/highgui.hpp> 
#include <opencv2/features2d/features2d.hpp>
//#include <opencv2/legacy/legacy.hpp>
#include "opencv2/calib3d/calib3d.hpp"
#include <opencv2/opencv.hpp>
#include <math.h>

#include "dataTypeStructs.h"
#include "MatrixCalc.h"
#include "buildModel.h"

using namespace std;
using namespace cv;


#define ITS 1

#define DEBUGTRIAGLE 1

//Calculate essential matrix from HZ 9.12
Mat_<double> MatrixCalc::CalculateEssentialMatrix(Mat F) {
	Mat_<double> E = K.t() * F * K; //check
	if (DEBUG == 0) {
		cout << "Essential Matrix" << endl << E << endl << endl; 
	}
	return E;
}

bool MatrixCalc::DecomposeEtoRandT(
	Mat_<double>& E,
	Mat_<double>& R1,
	Mat_<double>& R2,
	Mat_<double>& t1,
	Mat_<double>& t2) 
{

	//Using HZ E decomposition
	SVD svd(E, SVD::MODIFY_A);

	Matx33d W(0,-1,0,	//HZ 9.13
		1,0,0,
		0,0,1);
	Matx33d Wt(0,1,0,
		-1,0,0,
		0,0,1);

	R1 = svd.u * Mat(W) * svd.vt; //HZ 9.19
	R2 = svd.u * Mat(Wt) * svd.vt; //HZ 9.19
	t1 = svd.u.col(2); //u3
	t2 = -svd.u.col(2); //u3

	return true;
}


Mat MatrixCalc::findMatrixK(Mat image) 
{
	double pX = image.cols / 2;
	double pY = image.rows /2;

	Mat C = (Mat_<double>(3,3) << 1000, 0, pX, 0, 1000, pY, 0, 0, 1);
	K = C;

	if (DEBUG == 0) 
	{
		cout << "Camera Calibration Matrix" << endl << K << endl << endl; 
	}

	return K;
}

bool MatrixCalc::FindCameraMatrices(
	vector<KeyPoint> featurePoints1,
	vector<KeyPoint> featurePoints2,
	Mat F,
	Matx34d& P,
	Matx34d& P1,
	vector<SpacePoint>& outCloud
	) 
{

		bool fail = false;

		Mat_<double> R1(3,3);
		Mat_<double> R2(3,3);
		Mat_<double> t1(1,3);
		Mat_<double> t2(1,3);

		Mat_<double> E = CalculateEssentialMatrix(F);
		DecomposeEtoRandT(E,R1,R2,t1,t2);

		Mat Ptemp = (Mat_<double> (3,4) << 1, 0, 0, 0,
			0, 1, 0, 0, 
			0, 0, 1, 0);


		if (ITS == 1) 
		{
			Ptemp = Ptemp;	
		} else 
		{
			Ptemp = K * Ptemp;
		}

		P = Matx34d(Ptemp);

		P1 = Matx34d(	R1(0,0),	R1(0,1),	R1(0,2),	t1(0),
			R1(1,0),	R1(1,1),	R1(1,2),	t1(1),
			R1(2,0),	R1(2,1),	R1(2,2),	t1(2));

		Mat P2s1 = (Mat_<double> (3,4) << 	R1(0,0),	R1(0,1),	R1(0,2),	t1(0),
											R1(1,0),	R1(1,1),	R1(1,2),	t1(1),
											R1(2,0),	R1(2,1),	R1(2,2),	t1(2));


		Mat P2s2 = (Mat_<double> (3,4) << 		R1(0,0),	R1(0,1),	R1(0,2),	t2(0),
											R1(1,0),	R1(1,1),	R1(1,2),	t2(1),
											R1(2,0),	R1(2,1),	R1(2,2),	t2(2));
		
		Mat P2s3 = (Mat_<double> (3,4) << 		R2(0,0),	R2(0,1),	R2(0,2),	t1(0),
											R2(1,0),	R2(1,1),	R2(1,2),	t1(1),
											R2(2,0),	R2(2,1),	R2(2,2),	t1(2));
		

		Mat P2s4 = (Mat_<double> (3,4) << 		R2(0,0),	R2(0,1),	R2(0,2),	t2(0),
											R2(1,0),	R2(1,1),	R2(1,2),	t2(1),
											R2(2,0),	R2(2,1),	R2(2,2),	t2(2));

		P1 = Matx34d(P2s2);
		return fail;
}

vector<SpacePoint> MatrixCalc::triangulation(vector<KeyPoint> keypoints1,
	vector<KeyPoint> keypoints2,
	Mat &K,
	Matx34d &P,
	Matx34d & P1,
	vector<SpacePoint> pointCloud) 
{

		Mat kInverse = K.inv();

		vector<SpacePoint> tempCloud = pointCloud;

		if (DEBUG == 1)  {
			cout << "K inverse " << endl << kInverse << endl << endl;
		}

		for (int i = 0; i < keypoints1.size(); i++) 
		{
			KeyPoint keypoint1 = keypoints1.at(i);
			Point3d point3D1(keypoint1.pt.x, keypoint1.pt.y, 1);
			Mat_<double> mapping3D1 = kInverse * Mat_<double>(point3D1);
			point3D1.x = mapping3D1(0);
			point3D1.y = mapping3D1(1);
			point3D1.z = mapping3D1(2);

			KeyPoint keypoint2 = keypoints2.at(i);
			Point3d point3D2(keypoint2.pt.x, keypoint2.pt.y, 1);
			Mat_<double> mapping3D2 = kInverse * Mat_<double>(point3D2);
			point3D2.x = mapping3D2(0);
			point3D2.y = mapping3D2(1);
			point3D2.z = mapping3D2(2);

			if (DEBUG == 1) 
			{
				cout << "Points be mapped is" << endl << mapping3D1 << endl << "and" << endl << mapping3D2 << endl << endl;
			}

			Mat_<double> X = IterativeTriangulation(point3D1, P, point3D2, P1);

			if (DEBUG == 1) 
			{
				cout << "3D point X is" << endl << X << endl << endl;
			}

			SpacePoint Location3D;
			Location3D.point.x = X(0);
			Location3D.point.y = X(1);
			Location3D.point.z = X(2);

			tempCloud.push_back(Location3D);		

		}

		pointCloud = tempCloud;

		if (DEBUG == 1) 
		{
			cout << "Point Cloud Size is " << pointCloud.size() << endl;
		}

		return tempCloud;


}

/**
From "Triangulation", Hartley, R.I. and Sturm, P., Computer vision and image understanding, 1997
*/
Mat_<double> MatrixCalc::LinearLSTriangulation(Point3d u,		//homogenous image point (u,v,1)
	Matx34d P,		//camera 1 matrix
	Point3d u1,		//homogenous image point in 2nd camera
	Matx34d P1		//camera 2 matrix
	) 
{

		Matx43d A(u.x*P(2,0)-P(0,0),	u.x*P(2,1)-P(0,1),		u.x*P(2,2)-P(0,2),		
			u.y*P(2,0)-P(1,0),	u.y*P(2,1)-P(1,1),		u.y*P(2,2)-P(1,2),		
			u1.x*P1(2,0)-P1(0,0), u1.x*P1(2,1)-P1(0,1),	u1.x*P1(2,2)-P1(0,2),	
			u1.y*P1(2,0)-P1(1,0), u1.y*P1(2,1)-P1(1,1),	u1.y*P1(2,2)-P1(1,2)
			);
		Matx41d B(-(u.x*P(2,3)	-P(0,3)),
			-(u.y*P(2,3)	-P(1,3)),
			-(u1.x*P1(2,3)	-P1(0,3)),
			-(u1.y*P1(2,3)	-P1(1,3)));

		Mat_<double> X;
		solve(A,B,X,DECOMP_SVD);

		return X;
}


/**
From "Triangulation", Hartley, R.I. and Sturm, P., Computer vision and image understanding, 1997
*/
Mat_<double> MatrixCalc::IterativeTriangulation(Point3d u,	//homogenous image point (u,v,1)
	Matx34d P,			//camera 1 matrix
	Point3d u1,			//homogenous image point in 2nd camera
	Matx34d P1			//camera 2 matrix
	) 
{
		double wi = 1, wi1 = 1;
		Mat_<double> X(4,1); 

		for (int i=0; i<2; i++) { //Hartley suggests 10 iterations at most
			Mat_<double> X_ = LinearLSTriangulation(u,P,u1,P1);

			X(0) = X_(0); X(1) = X_(1); X(2) = X_(2); X(3) = 1.0;

			//recalculate weights
			double p2x = Mat_<double>(Mat_<double>(P).row(2)*X)(0);
			double p2x1 = Mat_<double>(Mat_<double>(P1).row(2)*X)(0);


			wi = p2x;
			wi1 = p2x1;
			//reweight equations and solve
			Matx43d A((u.x*P(2,0)-P(0,0))/wi,		(u.x*P(2,1)-P(0,1))/wi,			(u.x*P(2,2)-P(0,2))/wi,		
				(u.y*P(2,0)-P(1,0))/wi,		(u.y*P(2,1)-P(1,1))/wi,			(u.y*P(2,2)-P(1,2))/wi,		
				(u1.x*P1(2,0)-P1(0,0))/wi1,	(u1.x*P1(2,1)-P1(0,1))/wi1,		(u1.x*P1(2,2)-P1(0,2))/wi1,	
				(u1.y*P1(2,0)-P1(1,0))/wi1,	(u1.y*P1(2,1)-P1(1,1))/wi1,		(u1.y*P1(2,2)-P1(1,2))/wi1
				);

			Mat_<double> A_ = (Mat_<double>(4,3) <<(u.x*P(2,0)-P(0,0))/wi,		(u.x*P(2,1)-P(0,1))/wi,			(u.x*P(2,2)-P(0,2))/wi,		
				(u.y*P(2,0)-P(1,0))/wi,		(u.y*P(2,1)-P(1,1))/wi,			(u.y*P(2,2)-P(1,2))/wi,		
				(u1.x*P1(2,0)-P1(0,0))/wi1,	(u1.x*P1(2,1)-P1(0,1))/wi1,		(u1.x*P1(2,2)-P1(0,2))/wi1,	
				(u1.y*P1(2,0)-P1(1,0))/wi1,	(u1.y*P1(2,1)-P1(1,1))/wi1,		(u1.y*P1(2,2)-P1(1,2))/wi1
				);

			Mat_<double> B = (Mat_<double>(4,1) <<	-(u.x*P(2,3)	-P(0,3))/wi,
				-(u.y*P(2,3)	-P(1,3))/wi,
				-(u1.x*P1(2,3)	-P1(0,3))/wi1,
				-(u1.y*P1(2,3)	-P1(1,3))/wi1
				);

			solve(A,B,X_,DECOMP_SVD);
			X(0) = X_(0);
			X(1) = X_(1);
			X(2) = X_(2);
			X(3) = 1.0;
		}

		return X;
}
