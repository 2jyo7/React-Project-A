import { Link } from "react-router-dom";
import { LOGO_URL } from "./constants";
import { useState } from "react";

const Header = () => {
    const [btnName,setBtnName] = useState("LogIn");
    
   
    return (
    <div className="Header">
    <div className="logo">
    <img src={LOGO_URL}  />
        </div>
    <div className="Nav-items">
        <ul>
            <li>
            <Link  to="/">Home</Link>
            </li>
            <li>
            <Link  to="/about">About Us</Link>
            </li>
            <li>
            <Link  to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login"
            onClick={() => 
            setBtnName(btnName === "LogIn" ? "LogOut" : "LogIn")}
            >{btnName}</button>
        </ul>
    </div>
    </div>
    )
    }   

    export default Header;