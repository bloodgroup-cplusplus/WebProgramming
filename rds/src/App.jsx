import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from "./assets/logo.png"
import homestay_video from "./assets/homestay.mp4"

import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='video_frame'>
      <video   controls autoPlay loop>
        <source src={homestay_video} type="video/mp4">
        </source>
      </video>
        <img src={logo} alt="homestay_logo" className='hero'></img>
      </div>
     
  )
}

export default App
