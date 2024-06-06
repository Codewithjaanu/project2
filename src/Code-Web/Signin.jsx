import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signin() {

    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const notifyA = (msg) => toast.error(msg)
    const notifyB = (msg) => toast.success(msg)

    const navigate = useNavigate();

    const postData = () => {
        console.log({
            PhoneNumber, Password, Email
        })
        fetch("http://localhost:5000/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ PhoneNumber: PhoneNumber, Password: Password, Email: Email })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    notifyA(data.error)
                    navigate("/Login")
                }else{
                    notifyB(data.message)
                    setTimeout(()=>{
                    
                    },5000)
                }
                console.log(data)
            })

    }
    return (
        <>
            <ToastContainer position="top-right" autoClose={1000} theme="dark" />
            <div className="one-login">
                <div className="login-main">
                    <div className="login-page">
                        <div className="logo-login"> <h1>Signin</h1></div>
                        <div className="form-form"> <form>
                            <input placeholder="Enter Your Phone Number" type="PhoneNumber" name="PhoneNumber" value={PhoneNumber} id="PhoneNumber" onChange={(e) => { setPhoneNumber(e.target.value) }} /><br />
                            <input placeholder="Enter Your Password" type="Password" name="Password" value={Password} id="Password" onChange={(e) => { setPassword(e.target.value) }} /><br />
                            <input placeholder="Enter Your Email" type="Email" name={Email} value={Email} id="Email" onChange={(e) => { setEmail(e.target.value) }} /><br />
                        </form></div>
                        <div className="button-login"><button onClick={postData}>Login</button></div>
                    </div>
                    <div className="div-p-sign"><p> Have A Account<Link to="/Login"> <span>Login</span></Link></p></div>
                </div>
            </div>
        </>
    )
}
export { Signin };