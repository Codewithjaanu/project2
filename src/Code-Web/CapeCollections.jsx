import React, { useState } from "react";
import { CapsData } from "./CapsData";
import { Header } from "./Header";
import { Review } from "./Review";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
function CapeCollections() {
    const nav = useNavigate()
    const [caps, setcaps] = useState(CapsData)


    const [filter, setfilter] = useState([...caps])

    const anime = (e) => {
        const animidata = caps.filter((animeall) => animeall.calagiry === e)
        if (animidata) {
            setfilter(animidata)
        } else {
            setfilter(caps)
        }
    }
    const reload = () => {
        setTimeout(() => {
            window.location.reload()
        }, 10000)
    }

    return (
        <>
            <Header />
            <div className="Cape-Collections">

                <div className="filter-div">
                    <div className="filter-icon-name">
                        <div className="filter-text">
                            <h1>Filter</h1>
                        </div>
                    </div>
                    <div className="filter-theme">
                        <h1>Theme</h1>
                        <div className="label-s">
                            <label>
                                <input type="checkbox" name="preference1" onClick={() => { anime("Anime") ? filter() : reload() }} /> Anime
                            </label>
                            <label>
                                <input type="checkbox" name="Coding" /> Coding
                            </label>
                            <label>
                                <input type="checkbox" name="Combo" /> Combo
                            </label>
                            <label>
                                <input type="checkbox" name="Gym" /> Gym
                            </label>
                            <label>
                                <input type="checkbox" name="Hacking" /> Hacking
                            </label>
                            <label>
                                <input type="checkbox" name="Lifestyle" /> Lifestyle
                            </label>
                            <label>
                                <input type="checkbox" name="Music" /> Music
                            </label>
                        </div>
                    </div>

                    <div className="filter-Color">
                        <h1>Color</h1>
                        <div className="label-s">
                            <label>
                                <input type="checkbox" name="Black" /> Black
                            </label>
                            <label>
                                <input type="checkbox" name="Navyblue" /> Navyblue
                            </label>
                            <label>
                                <input type="checkbox" name="Red" /> Red
                            </label>
                            <label>
                                <input type="checkbox" name="White" /> White
                            </label>
                        </div>
                    </div>

                    <div className="filter-size">
                        <h1>Size</h1>
                        <div className="label-s">
                            <label>
                                <input type="checkbox" name="L" /> L
                            </label>
                            <label>
                                <input type="checkbox" name="M" /> M
                            </label>
                            <label>
                                <input type="checkbox" name="S" /> S
                            </label>
                        </div>
                    </div>

                    <button>Apply Fiters</button>
                </div>

                <div className="Explore">
                    <div className="exploer-text-heading">
                        <h1>Explore Our Caps Collection</h1>
                        <p>Stay cool and stylish with the wide selection of caps available at Codeswear.com. Our caps are perfect for every occasion, whether you're looking for a casual everyday cap or something to wear to the gym. We have a variety <br />of styles to choose from, including coding caps, anime caps, and casual caps for everyday wear. All of our caps are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect<br /> cap for you!</p>
                    </div>

                    <div className="main-caps-div">
                        <div className="main-caps">
                            {
                                filter.map((CapData) => {
                                    return (
                                        <>
                                            <div className="div" key={CapsData.id} onClick={() => {
                                                setTimeout(() => {
                                                    nav(`details/${CapData.id}`)
                                                }, 500);
                                            }}>
                                                <div className="cap-hover-img">
                                                    <img className="cap-o" src={CapData.image1} />
                                                    <img className="cap-t" src={CapData.image2} />
                                                </div>
                                                <div className="caps-tect-t">
                                                    <h2>{CapData.productname}</h2>
                                                    <h3>{CapData.productbas}</h3>
                                                    <h3>{CapData.price}</h3>
                                                    <span>{CapData.size}</span>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

            </div>
            <Review />
            <Footer />
        </>
    )
}
export { CapeCollections };