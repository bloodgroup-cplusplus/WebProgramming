



let video = document.getElementById("video");
let model;

const setupCamera =() =>{
	navigator.mediaDevices.getUserMedia({
		video:{width:600,height:400},
		audio:false,
	})
	.then((stream) =>{
		video.srcObject=stream;
	});
};

const detectFaces = async ()=>{
	const prediction = await model.estimateFaces(video,false);
	console.log(prediction);

};

setupCamera();
video.addEventListener("loadeddata", ()=>{
	model = await blazeface.load();
	detectFaces();
})

