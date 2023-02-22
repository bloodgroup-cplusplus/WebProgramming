// styles  and images
import { NavLink } from "react-router-dom"

import "./Sidebar.css"
import DashboardIcon from "../assets/dashboard_icon.svg"
import AddIcon from "../assets/add_icon.svg"


import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-content">
           <div className="user" >
            {/* Avater and username here later*/}
            <p>Hey User</p>
            <nav className="links">
                <ul>
                    <li>
                        <NavLink to="/">
                            <img src={DashboardIcon} alt="dashboard icon"/>
                            <span>Dashboard</span>
                        </NavLink>

                    </li>


                    <li>
                        <NavLink to="/create">
                            <img src={AddIcon} alt="add  project icon"/>
                            <span>Dashboard</span>
                        </NavLink>

                    </li>


                </ul>
            </nav>
           </div>
        </div>
      
    </div>
  )
}

export default Sidebar
