const faceio = new faceIO ( "");


enroll. addEventListener ( "click" , async()  =>{
	let respose = await faceio.enroll ({
		locale = "auto",
		payload : {
			email : "exmaple@gmail.com",
			pin: "12345",
		},
	});


	console.log("Unique facial Id" ${response.facialId}
	EnrollmentDate : 
