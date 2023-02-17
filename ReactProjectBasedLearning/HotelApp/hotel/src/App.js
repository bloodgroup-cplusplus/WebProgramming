import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import { Navbar } from './components';
import { Footer } from './container';
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home"
import Signup from './pages/Signup/Signup';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>      
      <Route path ="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
   
  </div>
);

export default App;
