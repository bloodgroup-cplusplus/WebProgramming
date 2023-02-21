import React from "react";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Feed from "./Pages/Feed"
import Griviences from "./Pages/ListGriviences";
import AddGrivience from "./Pages/AddGrivience";
import Profile from "./Pages/Profile";


import {useAuthContext} from "./Hooks/useAuthContext"




function App() {
  const {authIsReady,user} = useAuthContext()
  return (
    <div className="App">
      {authIsReady &&(
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element={user?<Profile/>:<Home/>}/>
        <Route path = "/listgriviences" element={user?<Griviences/>:<Login/>}/>
        <Route path = "/addgriviences" element={user?<AddGrivience/>:<Login/>}/>
        <Route path = "/home" element={user?<Profile/>:<Home/>}/>
        <Route path = "/login" element = {user?<Profile/>:<Login/>}/>
        <Route path = "/signup" element = {user?<Profile/>:<Signup/>}/>
        <Route path = "/feed" element = {<Feed/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      )}
   </div>
  );
}

export default App;
