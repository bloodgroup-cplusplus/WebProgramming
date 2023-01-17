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
  //development

}
else {
  //production
}


async function displayRazorpay(){
  const res= await loadScript("https://checkout.razorpay.com/v1/checkout.js")
  if(!res)
  {
    alert("Razorpay SDK Failed.")
    return 
  }

  const options ={
    key:__DEV__ ? 'YOUR_KEY':'API_NOT_FOUND',
    amount:'400000',
    currency:'INR',
    name:'Acme Corp',
    description:'Test Transaction',
    handler:function(response){
      alert(response.razorpay_payment_id)
      alert(response.razorpay_order_id)
      alert(response.razorpay_signature)
    },
     theme:{
     color:'#F37254'
   }
  }
  const paymentObject=new window.Razorpay(options)
  paymentObject.open()

}

function App() {
  
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
          href='https://reactjs.org'
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
