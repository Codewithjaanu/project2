import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
function Terms() {
    return (
        <><Header/>
            <div className="Terms">
                <div className="heading-terms">
                    <h1>Terms and Conditions</h1>
                </div>
                <h2>1. Introduction</h2>
                <p>Welcome to Codeswear! These terms and conditions ("Terms") govern your access to and use of our ecommerce website (the "Website"). By using the Website, you agree to be bound by these Terms. If you do<br /> not agree with these Terms, please refrain from using our Website.</p>
                <br />
                <h2>2. Intellectual Property</h2>
                <p>All intellectual property rights, including but not limited to trademarks, logos, and designs, displayed on the Website are the property of Codeswear. You are prohibited from using, copying, or distributing any content<br /> from the Website without our prior written consent.</p>
                <br />
                <h2>3. Product Information</h2>
                <p>We make every effort to provide accurate and up-to-date information about our products on the Website. However, we do not guarantee the accuracy, completeness, or reliability of any product information.<br /> You acknowledge that the actual colors, dimensions, and specifications of products may differ from the images and descriptions displayed on the Website.</p>
                <br />
                <h2>4. Order Acceptance and Pricing</h2>
                <p>All orders placed through the Website are subject to our acceptance. We reserve the right to refuse or cancel any order at any time for any reason. In the event of a pricing error on the Website, we may refuse or cancel<br /> any such orders, even if the order has been confirmed and payment has been made. We will notify you of any changes or cancellations related to your order.</p>
                <br />
                <h2>5. Limitation of Liability</h2>
                <p>To the extent permitted by applicable law, Codeswear shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages, including but not limited to loss of profits, data, or business <br />opportunities arising out of your use of the Website or any products purchased from us.</p>
                <h2>6. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of Uttar Pradesh, India. Any legal action or proceeding arising out of or relating to these Terms shall be exclusively brought in the courts<br /> located in Uttar Pradesh, India.</p>
                <h2>7. Changes to the Terms and Conditions</h2>
                <p>We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after the posting of <br />changes constitutes your acceptance of the revised Terms.</p>
                <h2>8. Contact Us</h2>
                <p>If you have any questions or concerns regarding these Terms, please contact us at:<br />
                    CWH Solutions<br />
                    94, Ghair Saifuddin Domehla Road,<br />
                    Rampur, Uttar Pradesh, 244901<br />
                    Customer Support: Call/Whatsapp: +91 707 807 3838<br />
                    Email: care@codeswear.in<br />
                    Support Hours: 10 AM - 6 PM (Morning)</p>
            </div>
            <Footer/>
        </>
    )
}
export { Terms };