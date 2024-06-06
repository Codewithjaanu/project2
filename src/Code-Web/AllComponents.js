import React from "react";
import { Header } from "./Header";
import { New } from "./New";
import { Sliderimg } from "./Slider";
import { Collections } from "./Collections";
import { Themes } from "./Themes";
import { Bastselling } from "./Bastselling";
import { Review } from "./Review";
import { Footer } from "./Footer";
function AllComponents(){
    return(
        <>
    <Header/>
    <New/>
    <Sliderimg/>
    <Collections/>
    <Themes/>
    <Bastselling/>
    <Review/>
    <Footer/>
        </>
    )
}
export {AllComponents}