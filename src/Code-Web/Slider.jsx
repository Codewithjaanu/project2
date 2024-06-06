import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banneer1 from "../Code-img/banneer1.webp"
import banneer2 from "../Code-img/banneer2.webp"
import banneer3 from "../Code-img/banneer3.jpg"
import banneer4 from "../Code-img/6.webp"
import banneer5 from "../Code-img/5.webp"
function Sliderimg(){
    return(
        <>
          <div className="sliders">
          <Carousel  autoPlay="true" interval={1000} infiniteLoop="true">
                <div>
                    <img src={banneer1} />
                </div>
                <div>
                    <img src={banneer2} />
                </div>
                <div>
                    <img src={banneer3} />
                </div>
                <div>
                    <img src={banneer4} />
                </div>
                <div>
                    <img src={banneer5} />
                </div>
              
            </Carousel>
          </div>
        </>
    )
}
export {Sliderimg}