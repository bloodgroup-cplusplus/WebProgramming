import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"


// pages and components 

import Dashboard from "./pages/dashboard/Dashboard"
import Create from "./pages/create/Create"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Project from "./pages/project/Project"
import Feed from "./pages/feed/Feed"
import Home from "./pages/home/Home"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <Route path = "/feed" element={<Feed/>}/>
          <Route path = "/dashboard" element={<Dashboard/>}/>
          <Route path = "/projects/:id" element={<Project/>}/>
          <Route path = "/create" element = {<Create/>}/>
        </Routes>
      </div>
   </BrowserRouter>
   </div>
  );
}

export default App;
