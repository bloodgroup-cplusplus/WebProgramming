const test= function()
{
    setTimeout(function(){
        console.log("Start of code")
        console.log("end of code")
    },10);
    // we can put await time to zero 
    // we can also put the alert in setTimeout 
    // playing around with this idea 
    // we need to notice how asynchronous 
    //settimeout allows us to continue with code execution 
    // i will call this function 
    // this function will execute when timing event occurs 
    // a key concept is the idea of callback 
    // calling back to a funciton 
    // function in set-tiemout is a callback 
    // timeout function uses a callback 
    // we callback to that function 
    // callbacks work great for making your code asynchronous 
    //callbacks are very importatnt pattern for achieving async code 


};

const test2 = function()
{
    console.log("Now i get attention ")
}


test();
test2();