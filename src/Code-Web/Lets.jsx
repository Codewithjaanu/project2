import React from "react";
import lestimg from "../Code-img/round.png"
import { Header } from "./Header";
import { Footer } from "./Footer";
function Lets(){
    return(
        <>
        <Header/>
    <div className="lets">
       <div className="colornae">
       <div className="talk"><h1>Lets talk about everything!</h1>
        <img src={lestimg}/>
        <h3>Feel free to ask us anything!</h3>
        <p>If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</p>
       </div>
        <div className="one-l">
       <div className="lets-two">
        <h1>Corporate Address</h1>
        <p>CWH Solutions<br/>
94, Ghair Saifuddin Domehla Road,<br/>
Rampur, Uttar Pradesh, 244901</p>
        </div>
        <div className="lets-two">
        <h1>Customer Support</h1>
        <p>Call/Whatsapp: +91 707 807 3838<br/>
Email: care@codeswear.in<br/>
Morning: 10AM - 6PM</p>
        </div>
       </div>
       </div>
    </div>
    <Footer/>
        </>
    )
}
export {Lets};