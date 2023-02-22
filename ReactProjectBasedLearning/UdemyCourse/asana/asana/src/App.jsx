import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
// import all pages and components 

import Dashboard from './pages/dashboard/Dashboard'
import Project from './pages/project/Project'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path ="/create" element={<Create/>}/>
          <Route path="/projects/:id" element={<Project/>}/>
          <Route path ="/signup" element = {<Signup/>}/>
          <Route path = "/login" element = {<Login/>}/>
        </Routes>
      </div>

      </BrowserRouter>


    </div>
  )
}

export default App
