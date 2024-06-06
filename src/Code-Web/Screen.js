import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AllComponents } from "./AllComponents";
import { Terms } from "./Terms";
import { Privacy } from "./Privacy";
import { About } from "./About";
import { Refund } from "./Refund";
import { Lets } from "./Lets";
import { LoginPage } from "./LoginPage";
import { CapeCollections } from "./CapeCollections";
import { CapBayNow } from "./CapBayNow";
import { CartProvider } from "react-use-cart";
import { Cart } from "./cart";  
import { Signin } from "./Signin";

function Screen() {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<AllComponents />} />
                        <Route path="/TermsandConditions" element={<Terms />} />
                        <Route path="/PrivacyPolicy" element={<Privacy />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/ReturnPolicy" element={<Refund />} />
                        <Route path="/Contectus" element={<Lets />} />
                        <Route path="/" element={<AllComponents />} />
                        <Route path="/Login" element={<LoginPage />} />
                        <Route path="/CapsCollections" element={<CapeCollections />} />
                        <Route path="/CapsCollections/details/:CapId" element={<CapBayNow />} />
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/Signin" element={<Signin/>}/>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </>
    )
}
export { Screen }