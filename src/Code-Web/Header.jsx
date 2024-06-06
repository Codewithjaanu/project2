import React from "react";
import headerimg from "../Code-img/logo.png"
import { Link } from "react-router-dom";
function Header(){
    return(
        <>
    <div className="Header">
        <div className="header-img">
        <Link to="/"><img src={headerimg}/>  </Link>
        </div>
        <div className="header-input-icon">
        <input placeholder="Search from 1000+ Design"/>
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="headers-menu">
        <ul>
            <li>TShirts</li>
            <li>Hoodies</li>
            <li>SweatShirts</li>
            <li>Mugs</li>
            <li>Zipper Hoodies</li>
            <li>Mousepads</li>
           <Link to="/CapsCollections"> <li>Caps</li></Link>
        </ul>
        </div>

        <div className="header-icon-button">
        <Link to="/cart"><i class="fa-solid fa-cart-plus"></i></Link>
        <i class="fa-solid fa-cloud-moon"></i>
        <Link to="/Login"><button>Login</button></Link>
        </div>
    </div>
        </>
    )
}
export {Header};