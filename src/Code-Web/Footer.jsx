import React from "react";
import Pay from "../Code-img/pay.png"
import logo from "../Code-img/logo.png"
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
    <div className="Footer">
        <div className="footer-one">
  <Link to="/"><img src={logo}/></Link>
        <div className="footer-one-text">
        <p>Wear the code <br/>Premium coding tshirts, hoodies<br/> and apparals</p>
        <p>© 2024 CodesWear.com — All Rights Reserved</p>
        </div>
        </div>

        <div className="shop">
        <h1>SHOP</h1>
        <li>T-Shirts</li>
        <li>Sweatshirts</li>
        <li>Hoodies</li>
        <li>Zipper Hoodies</li>
        <li>Mugs</li>
        </div>

        <div className="costemer">
        <h1>CUSTOMER SERVICE</h1>
       <Link to="/Contectus"> <li>Contact Us</li></Link>
       <Link to="/About"> <li>About Us</li></Link>
      <Link to="/ReturnPolicy">  <li>Return Policy</li></Link>
        </div>

        <div className="POLICY">
        <h1>POLICY</h1>
        <Link to="/PrivacyPolicy"><li>Privacy Policy</li></Link>
        <Link to="/TermsandConditions"><li>Terms and Conditions</li></Link>
        </div>

        <div className="footer-img">
        <img src={Pay}/>
        </div>
    </div>
        </>
    )
}
export{Footer};