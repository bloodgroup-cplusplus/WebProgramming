import faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
const video = document.getElementById("video");

const setupCamera =()=>{
    navigator.mediaDevices.getUserMedia({
        video:{width:600,height:400},
        audio:false,
    })
    .then((stream)=>{
        video.srcObject=stream;
    });
};
const detectFaces = async()=>{
    const prediction = model.estimateFaces({input:video},false);
    console.log(prediction)
};


// load the faceLandmarksDetection model assets.
setupCamera();

video.addEventListener("lodedata", async()=>{
    model= await faceLandmarksDetection.load(faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh);
    setInterval(detectFaces,40);

});






//https://blog.tensorflow.org/2020/11/iris-landmark-tracking-in-browser-with-MediaPipe-and-TensorFlowJS.html
