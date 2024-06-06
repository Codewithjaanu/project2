import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CapsData } from "./CapsData";
import ReactImageMagnify from "react-image-magnify";
import { Header } from "./Header";
import { Review } from "./Review";
import { Footer } from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "react-use-cart";

function CapBayNow() {

    const { CapId } = useParams();
    const caps = CapsData.find(items => items.id == CapId)


    const [change, setchange] = useState(`${caps.image1}`)

    const click = (e) => {
        setchange(e)
    }

    const { addItem, inCart } = useCart()

    const BayNow = () => {
        toast.error("Please Add Your Products And Bay Now !")
    }

    return (
        <>
            <Header />
            <ToastContainer position="top-right" autoClose={1000} theme="dark" />
            <div className="Capbaynow">
                <div className="products-img-cap-change">
                    <div className="click-img">
                        <img src={caps.image1} onClick={() => { click(`${caps.image1}`) }} />
                        <img src={caps.image2} onClick={() => { click(`${caps.image2}`) }} />
                        <img src={caps.image3} onClick={() => { click(`${caps.image3}`) }} />
                    </div>
                    <div className="product-img1" style={{ width: "443px" }}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: change,
                                height: 400,
                                width: 500
                            },
                            largeImage: {
                                src: change,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImageContainerDimensions: {
                                height: "100%", width: "100%"
                            }
                        }} />
                    </div>
                </div>

                <div className="products-text-headding">
                    <div className="text-start-now">
                        <h4>{caps.dellogo}</h4>
                        <h1>{caps.Pack}</h1>
                        <h3>{caps.description}</h3>
                        <p>{caps.pera}</p>
                        <div className="highlights">
                            <h4>{caps.highlights}</h4>
                            <li>{caps.hone}</li>
                            <li>{caps.htwo}</li>
                            <li>{caps.hthree}</li>
                            <li>{caps.hfour}</li>
                            <li>{caps.hfive}</li>
                        </div>
                        <p>{caps.tags}</p>
                        <h5>{caps.color}</h5>
                        <div className="price1">
                            <h2>{caps.lastprice}</h2>
                            <h1>{caps.price}<sup>(free Shipping)</sup></h1>
                        </div>
                        <button onClick={BayNow}>{caps.btn1}</button>
                        <button onClick={() => { addItem(caps) }}>{(inCart(caps.id) ? <Link to="/cart">Added✅</Link> : "Add to cart")}</button>
                        <h3>{caps.Exciting}</h3>
                        <li>{caps.litagcom1}</li>
                        <li>{caps.litagcom2}</li>
                        <li>{caps.litagcom3}</li>
                        <li>{caps.litagcom4}</li>
                    </div>
                </div>
            </div>
            <Review />
            <Footer />
        </>
    )
}
export { CapBayNow };