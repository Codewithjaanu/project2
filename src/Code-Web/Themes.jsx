import React from 'react';
import Themes1 from "../Code-img/anime.webp"
import Themes2 from "../Code-img/combooffers.webp"
import Themes3 from "../Code-img/customized.webp"
import Themes4 from "../Code-img/fitness.webp"
import Themes5 from "../Code-img/gaming.webp"
import Themes6 from "../Code-img/lifestyle.webp"
import Themes7 from "../Code-img/programming.webp"
import Themes8 from "../Code-img/trending.webp"

function Themes(){
    return(
        <>
    <div className='Themes'>
        <div className='text-collections-themes'>
        <h1>THEMES</h1>
        </div>
        <div className='themes-img'>
        <img src={Themes1}/>
        <img src={Themes2}/>
        <img src={Themes3}/>
        <img src={Themes4}/>
        <img src={Themes5}/>
        <img src={Themes6}/>
        <img src={Themes7}/>
        <img src={Themes8}/>
        </div>
    </div>
        </>
    )
}
export {Themes};