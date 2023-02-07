// styles 




import {NavLink} from "react-router-dom"
// styles and images 

import { useAuthContext } from "../hooks/useAuthContext"

import {Avatar} from "./Avatar"

import "./Sidebar.css"
import AddIcon from "../assets/add_icon.svg"
import DashboardIcon from "../assets/dashboard_icon.svg"


export default function Sidebar()
{
    const {user} = useAuthContext()

    return (
        <div className="sidebar">
            <div className="sidebar-content">

            <div className="user">
                <Avatar src={user.photoURL}/>
                <p>Hey {user.displayName}</p>
            </div>
            <nav className="links">
                <ul>
                    <li>
                        <NavLink to="/dashboard">
                            <img  src={DashboardIcon} alt="dashboard icon" />
                            <span>Dashboard</span>
                        </NavLink>

                    </li>

                    <li>
                        <NavLink to = "/create">
                            <img src={AddIcon} alt="add project icon"/>
                            <span> New project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            </div>

        </div>
    )
}
