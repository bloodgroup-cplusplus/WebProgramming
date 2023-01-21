import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Feed from "./Pages/Feed"

function AppRouter()
{
    return (
        <BrowserRouter>
        
        <Routes>
            <Route path= "/" element= {<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/feed"   element={<Feed/>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter