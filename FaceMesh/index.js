const faceLandmarksDetection = require('@tensorflow-models/face-landmarks-detection');


// load the faceLandmarksDetection model assets.

const model = await faceLandmarksDetection.SupportedPackages.mediapipeFacemesh;

const video = document.getElementById("video");


const faces= await model.estimateFaces( {input:video});

//https://blog.tensorflow.org/2020/11/iris-landmark-tracking-in-browser-with-MediaPipe-and-TensorFlowJS.html
