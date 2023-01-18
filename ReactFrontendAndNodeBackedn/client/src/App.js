import React from 'react'
import logo from "./logo.svg"
import './App.css'
const __DEV__ = document.domain ==='localhost'

async function loadScript(src)
  {
    return new Promise((resolve)=>{

    
      const script=document.createElement('script');
      script.src=src
      script.onload =()=>{
         resolve(true)
       }
      script.onerror= () =>{
         resolve(false)
      }

      document.body.appendChild(script)
    })
    
  }



if(document.domain === 'localhost')
{

  const key_secret="hj6ZSnz00dSxNCmYA3ZOcOZM"

}
else {
  console.log("chad")
  //production
}




function App() {

  async function displayRazorpay(){
    const res= await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if(!res)
    {
      alert("Razorpay SDK Failed.")
      return 
  
    }
    const data= await fetch('http://localhost:1337/razorpay',{method:'POST'}).then((t)=>
      t.json()
    )
  
    console.log(data)
    const options ={
      key:__DEV__ ? "rzp_test_O1TBRbokgN3lgn" :'API_NOT_FOUND',
      amount:data.amount,
      currency:data.currency,
      name:'Sikkim Teachers Association Membership Fee',
      order_id:data.id,
      description:'Test Transaction',
      image:'http://localhost:1337/image2vector.svg',
      handler:function(response){
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
       theme:{
       color:'#FFE4C4'
     }
    }
    const paymentObject=new window.Razorpay(options)
    paymentObject.open()
  
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit<code>src/App.js</code> and save to reload
        </p>
        <a
          className='App-link'
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
          >
            Donate $5
          </a>
      </header>
      

    </div>
  )
}

export default App
