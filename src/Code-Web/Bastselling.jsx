import React from "react";
import hoverimgtwo from "../Code-img/0 (1).webp"
import hoverimgtwo2 from "../Code-img/1 (1).webp"
import hoverimgthree from "../Code-img/0 (2).webp"
import hoverimgthree2 from "../Code-img/1 (2).webp"
import hoverimgfour from "../Code-img/0 (3).webp"
import hoverimgfour2 from "../Code-img/1 (3).webp"
import hoverimgfive from "../Code-img/0 (4).webp"
import hoverimgfive2 from "../Code-img/1 (4).webp"
function Bastselling(){
    return(
        <>
    <div className="bast">
        <div className="bast-heading">
        <h1>Bestselling Products</h1>
        <div className="line"></div>
        </div>

        <div className="bast-change-img">

        <div className="hover-img-one">
        <div className="hover-img-two">
        <img className="hover-o" src={hoverimgtwo}/>
        <img className="hover-t" src={hoverimgtwo2}/>
        </div>
        <div className="hover-text">
        <h4>TSHIRTS</h4>
        <h1>Marvel TShirt</h1>
        <h1><del>₹699</del>₹599</h1>
        </div>
        </div>
        <div className="hover-img-one">
        <div className="hover-img-two">
        <img className="hover-o" src={hoverimgthree}/>
        <img className="hover-t" src={hoverimgthree2}/>
        </div>
        <div className="hover-text">
        <h4>TSHIRTS</h4>
        <h1>Marvel TShirt</h1>
        <h1><del>₹699</del>₹599</h1>
        </div>
        </div>
        <div className="hover-img-one">
        <div className="hover-img-two">
        <img className="hover-o" src={hoverimgfour}/>
        <img className="hover-t" src={hoverimgfour2}/>
        </div>
        <div className="hover-text">
        <h4>TSHIRTS</h4>
        <h1>Marvel TShirt</h1>
        <h1><del>₹699</del>₹599</h1>
        </div>
        </div>
        <div className="hover-img-one">
        <div className="hover-img-two">
        <img className="hover-o" src={hoverimgfive}/>
        <img className="hover-t" src={hoverimgfive2}/>
        </div>
        <div className="hover-text">
        <h4>TSHIRTS</h4>
        <h1>Marvel TShirt</h1>
        <h1><del>₹699</del>₹599</h1>
        </div>
        </div>
        <div className="hover-img-one">
        <div className="hover-img-two">
        <img className="hover-o" src={hoverimgthree2}/>
        <img className="hover-t" src={hoverimgfive2}/>
        </div>
        <div className="hover-text">
        <h4>TSHIRTS</h4>
        <h1>Marvel TShirt</h1>
        <h1><del>₹699</del>₹599</h1>
        </div>
        </div>
        </div>
    </div>
        </>
    )
}
export{Bastselling};