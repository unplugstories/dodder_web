cmake_minimum_required(VERSION 3.1 FATAL_ERROR) 
# Enable C++11
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED TRUE)
project(opencvReconstruction)

find_package( OpenCV REQUIRED )
Set (OPENCV_ENABLE_NONFREE:BOOL=ON)

#Trial is the trial file with contours method implemented
file(GLOB SOURCES "${PROJECT_SOURCE_DIR}/*.cpp")
include_directories("${PROJECT_SOURCE_DIR}/*.h")
add_executable(indexer "${PROJECT_SOURCE_DIR}/main.cpp" ${SOURCES})

#add_executable( main main.cpp)
#Trial is the trial file with contours method implemented
target_link_libraries( indexer ${OpenCV_LIBS} )
