import React from "react";
import iwelcome from "../Code-img/round.png"
import aboutimg from "../Code-img/order.jpg"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
function About() {
    return (
        <>
            <Header />
            <div className="About">
                <div className="welcome">
                    <img src={iwelcome} />
                    <h1>Welcome to Codeswear.com</h1>
                    <h4>Bay Start Now</h4>
                    <p>Introducing CodesWear, a revolutionary e-commerce platform that delivers amazing products at unbeatable prices. Built on a foundation of <br /> NextJs and MongoDB, our website offers a seamless shopping experience powered by server-side rendering. Whether you're a tech <br />enthusiast or simply looking for a stylish geek T-shirt, CodesWear has something for everyone. And for those curious about the development <br />process, be sure to check out the CodeWithHarry NextJs playlist on YouTube. Shop now at CodesWear and experience the future of online<br /> shopping.
                    </p>
                 <Link to="/">   <button>Start Shopping</button></Link>
                </div>
                <div className="about-headding"><h1>About Codeswear</h1></div>
                <div className="About-Codeswear">
                    <div className="about-text">
                        <p>Codeswear.com is revolutionizing the way India shops for unique, geeky apparel. From our one-of-a-kind hoodie designs to our wide selection of stickers, mugs and other accessories, we have everything you need to express your individuality and stand out from the crowd. Say goodbye to the hassle of hopping from store to store in search of your perfect geeky look. With just a single click on our website, you can find it all!
                            But what sets Codeswear apart from the competition? The answer is simple: our unique designs and commitment to providing the highest quality products. We understand the importance of style and durability, which is why we put so much effort into creating unique designs and using only the best materials. Don't settle for mediocre clothing and accessories - choose Codeswear and make a statement with your wardrobe.

                            At Codeswear, we strive to be more than just an online store - we want to be a community where like-minded individuals can come together and express themselves through fashion. Whether you're a gamer, a programmer, or simply someone who loves all things geeky, we have something for you. Our collection is curated with the latest trends and fan favorites in mind, ensuring that you'll always find something new and exciting.

                            We also understand the importance of affordability and convenience. That's why we offer competitive prices and fast shipping, so you can get your hands on your new geeky apparel as soon as possible. Plus, with our easy-to-use website and secure checkout process, shopping with us is a breeze.

                            So why wait? Visit Codeswear.com today and discover the latest in geeky fashion. With our unique designs and high-quality products, we're sure you'll find something you'll love. Join our community and express your individuality through fashion.</p>
                    </div>
                    <div className="about-img">
                        <img src={aboutimg} />
                    </div>
                </div>
              <div className="headding-testimon">
              <h1>Testimonials</h1>
              </div>
                <div className="Testimonials">
                    <div className="Testimonials-one">
                        <p>I recently discovered this site and I am so impressed with the quality and selection of hoodies and sweatshirts they offer. Not only are the prices incredibly affordable, but the quality of the clothing is top-notch. I have received many compliments on the items I've purchased and have been asked where I got them. The customer service is also excellent - they were very helpful with a question I had. I highly recommend this site to anyone looking for high-quality clothing at unbeatable prices.</p>
                        <h4>Yogesh</h4>
                        <h5>CUSTOMER</h5>
                    </div>
                    <div className="Testimonials-one">
                        <p>I recently discovered this site and I am so impressed with the quality and selection of hoodies and sweatshirts they offer. Not only are the prices incredibly affordable, but the quality of the clothing is top-notch. I have received many compliments on the items I've purchased and have been asked where I got them. The customer service is also excellent - they were very helpful with a question I had. I highly recommend this site to anyone looking for high-quality clothing at unbeatable prices.</p>
                        <h4>Yogesh</h4>
                        <h5>CUSTOMER</h5>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export { About }