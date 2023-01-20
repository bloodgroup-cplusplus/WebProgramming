import {Component} from "react";
import {MenuData} from "./MenuData";
import "./NavbarStyles.css";

class Navbar extends Component 
{
    render(){
        return (
            <nav className="NavbarItems">
                <h1>Sikkim Teachers Association </h1>
                <ul>
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

