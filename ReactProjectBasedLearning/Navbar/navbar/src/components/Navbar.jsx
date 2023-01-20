import {Component} from "react";
import {MenuData} from "./MenuData";
import {useState} from "react"
import "./NavbarStyles.css";

class Navbar extends Component 
{
    const [clicked,handleClick]= useState(0);
    
    render(){
        return (
            <nav className="NavbarItems">
                <h1 classname="logo">STA<i className="fab fa-react"></i> </h1>
                <div className="menu-icons" onclick={()=>handleClick(clicked=1)}>
                    <i className={this.state.clicked?"fas-fa-times":"fas fa-bars"}></i>
                </div>
                <ul className="nav-menu">
                    {MenuData.map((item,index)=>{
                        return (
                        <li key={index}><a href={item.url} className={item.cName}>
                         <i className={item.icon}>{item.title}</i>
                        </a>
                    </li>
 

                        )
                    })}
               </ul>
            </nav>
        );
    }
}

export default Navbar

