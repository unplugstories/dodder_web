import numpy as np
from imutils import face_utils
import cv2 as cv
import imutils
from matplotlib import pyplot as plt
import dlib
import os

detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')

img = cv.imread('kiddd1.png') #file name after removing the background
bgdModel = np.zeros((1,65),np.float64)
fgdModel = np.zeros((1,65),np.float64)
ht,wt,c = img.shape
print(ht)
print(wt)
wt=wt*(1000/ht)
ht=1000
print(ht)
print(wt)
res = cv.resize(img,(int(wt),int(ht)), interpolation = cv.INTER_CUBIC)
plt.imshow(res),plt.colorbar(),plt.show() # cv.imshow("face",res)
mask = np.zeros(res.shape[:2],np.uint8)
gray = cv.cvtColor(res, cv.COLOR_BGR2GRAY)
rects = detector(gray,1)

roi = rects[0] # region of interest
shape = predictor(gray, roi)
shape = face_utils.shape_to_np(shape)

jawline = shape[6:12]

img2 = cv.imread('kiddd1.png') #file name after removing the background
height, width = img2.shape[:2]

#res = cv.resize(img,(210,250), interpolation = cv.INTER_CUBIC)
print(shape[28][1])
newimg = res[int(shape[28][1] - ((shape[9][1]-shape[28][1]) * 1.5)):shape[9][1]+80, shape[3][0] - (shape[29][0]-shape[3][0]):shape[14][0] + (shape[14][0]-shape[29][0])]
plt.imshow(newimg),plt.colorbar(),plt.show() # cv.imshow("face",newimg)
cv.imwrite("crop.png",newimg)


############################################################################## Removing lower part 

detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')

# load image
img = cv2.imread('crop.png')
h, w, ch = img.shape
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# add an alpha channel to image
b,g,r = cv2.split(img);
a = np.ones((h,w,1), np.uint8) * 255
img = cv2.merge((b, g, r, a))
# detect face
rects = detector(gray,1)
roi = rects[0] # region of interest
shape = predictor(gray, roi)
shape = face_utils.shape_to_np(shape)
# extract jawline
jawline = shape[4:14]
top = min(jawline[:,1])
bottom = max(jawline[:,1])
# extend contour for masking
jawline = np.append(jawline, [ w-1, jawline[-1][1] ]).reshape(-1, 2)
jawline = np.append(jawline, [ w-1, h-1 ]).reshape(-1, 2)
jawline = np.append(jawline, [ 0, h-1 ]).reshape(-1, 2)
jawline = np.append(jawline, [ 0, jawline[0][1] ]).reshape(-1, 2)
contours = [ jawline ]
# generate mask
mask = np.ones((h,w,1), np.uint8) * 255 # times 255 to make mask 'showable'
cv2.drawContours(mask, contours, -1, 0, -1) # remove below jawline
# apply to image
result = cv2.bitwise_and(img, img, mask = mask)
#result = cv2.add(img,img, mask = mask)

#result = result[top:bottom, roi.left():roi.left()+roi.width()] # crop ROI
cv2.imwrite('blackBackground.png', result); 
#plt.imshow(result)

############################################################ making background transparent

file_name = "blackBackground.png"
src = cv2.imread(file_name, 1)
tmp = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
_,alpha = cv2.threshold(tmp,0,255,cv2.THRESH_BINARY)
b, g, r = cv2.split(src)
rgba = [b,g,r, alpha]
dst = cv2.merge(rgba,4)
cv2.imwrite("Final_Result.png", dst)
