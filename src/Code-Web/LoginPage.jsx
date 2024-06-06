import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginPage() {

    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Password, setPassword] = useState("")

    const notifyA = (msg) => toast.error(msg)
    const notifyB = (msg) => toast.success(msg)

    const navigate = useNavigate();

    const login = () => {
        //sending Data
        console.log({
            Password,
            PhoneNumber
        })

        fetch("http://localhost:5000/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ PhoneNumber: PhoneNumber, Password: Password})
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    notifyA(data.error)
                }else{
                    notifyB(data.message)
                    setTimeout(()=>{
                        navigate("/")
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
                        <div className="logo-login"> <h1>Login</h1></div>
                        <div className="form-form"> <form>
                            <input placeholder="Enter Your Phone Number" type="PhoneNumber" name="PhoneNumber" value={PhoneNumber} id="Email" onChange={(e) => { setPhoneNumber(e.target.value) }} /><br />
                            <input placeholder="Enter Your Password" type="Password" name="Password" value={Password} id="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </form></div>
                        <div className="button-login"><button onClick={login}>Login</button></div>
                    </div>
                    <div className="div-p-sign"><p>Don't A Have Account<Link to="/Signin"><span>Sign-in?</span></Link></p></div>
                </div>
            </div>
        </>
    )
}
export { LoginPage }