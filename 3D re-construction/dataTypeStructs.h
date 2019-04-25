#include <iostream>
#include <string>   
#include <iomanip> 
#include <sstream>
#include <opencv2/opencv.hpp>

using namespace std;
using namespace cv;

#ifndef HEADERGUARD
#define HEADERGUARD

struct dataType {
	Point3d point;
	int blue;
	int green;
	int red;
};

typedef dataType SpacePoint;

#endif
