import {BrowserRouter, Route, Routes} from 'react-router-dom'

// pages and components 

import Home from "./Pages/home/Home"
import Login from "./Pages/login/Login"
import Signup from "./Pages/Signup/Signup"
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
    

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
