import React from "react";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Feed from "./Pages/Feed"
import Griviences from "./Pages/Griviences";
import AddGrivience from "./Pages/AddGrivience";

function App() {
  return (
    <>    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path = "/griviences" element={<Griviences/>}/>
      <Route path="/addgriviences" element={<AddGrivience/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
    
  );
}

export default App;
