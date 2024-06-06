import React from 'react';
import Collections1 from "../Code-img/caps.webp"
import Collections2 from "../Code-img/hoodie.webp"
import Collections3 from "../Code-img/mousepad.webp"
import Collections4 from "../Code-img/mugs.webp"
import Collections5 from "../Code-img/oversizedtshirt.webp"
import Collections6 from "../Code-img/polotshirts.webp"
import Collections7 from "../Code-img/sweatshirt.webp"
import Collections8 from "../Code-img/tshirt.webp"
import { Link } from 'react-router-dom';

function Collections(){
    return(
        <>
    <div className='Collections'>
        <div className='text-collections'>
        <h1>COLLECTIONS</h1>
        </div>
        <div className='collections-img'>
         <Link to="/CapsCollections"><img src={Collections1}/></Link>
        <img src={Collections2}/>
        <img src={Collections3}/>
        <img src={Collections4}/>
        <img src={Collections5}/>
        <img src={Collections6}/>
        <img src={Collections7}/>
        <img src={Collections8}/>
        </div>
    </div>
        </>
    )
}
export {Collections};