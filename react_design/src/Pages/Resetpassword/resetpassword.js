import React, { useState } from 'react'
import './resetpassword.css'
import VideoLogin from '../../assets/video/Coastal_paradise.mp4'
import { Link } from "react-router-dom";

const Resetpassword = () => {
    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < (windowHeight - elementVisible)) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    reveal()
    window.addEventListener("scroll", reveal);

    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const onFocusEmail = (data) => {
        // console.log("call")
        if (data === "email") {
            setEmailFocus(!emailFocus)
        } else {
            setPasswordFocus(!passwordFocus)
        }

    }
    return (
        <div className='login-div'>
            <div className='main-background'>
                <div className='login-form'>
                    <form>
                        <div className={`email ${(emailFocus === true ? "emailFocus" : "")}`}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#525252">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                                </svg>
                            </span>
                            <input type="email" placeholder="Email" onFocus={() => onFocusEmail('email')} onBlur={() => onFocusEmail('email')} className='email-input' />
                        </div>
                        <div className='buttonlogin'>
                            <Link to="/login"><button className='login-btn'>Request Password Reset </button></Link>
                        </div>
                    </form>
                    <div className='signup-text'>
                        Already have an account? <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
            <div>
                <video loop muted autoPlay className='loginvideo'>
                    <source src={VideoLogin}></source>
                </video>
            </div>
        </div>
    )
}

export default Resetpassword
