//let's setup a function 

let logCall = function ()
{

    console.log("leena")
    console.log("Logcall was called back")
};


// this is the callbackear
setTimeout(function(){
    console.log("the function was called back");
},3000);

// anyonymous way of writing it 

// the console.log is executed after 3 seconds 

// this is similar to click event in html 
