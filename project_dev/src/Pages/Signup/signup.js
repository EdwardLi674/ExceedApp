import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./signup.css";
import VideoLogin from "../../assets/video/Coastal_paradise.mp4";
import { Link, useNavigate } from "react-router-dom";
import { getFormObj, server_domain } from "../../services/constants";
import { post } from "../../services/axios";
import { login } from "../../redux/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  reveal();
  window.addEventListener("scroll", reveal);

  const signupContent = useSelector((state) => state.appsetting.signup_content);
  const headerVideo = signupContent.header_videoISfile;

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    let formData = getFormObj();
    formData.append("api_method", "register");
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const signinResponse = await post(server_domain, formData);

      if (signinResponse.data.success === 1) {
        const user_id = signinResponse.data.user_id;
        const user = {
          email,
          user_id,
        };
        dispatch(
          login({
            isAuthenticated: true,
            user,
          })
        );
        window.sessionStorage.setItem("isAuthenticated", "done");
        window.sessionStorage.setItem("user", JSON.stringify(user));
        navigate("/", { replace: true });
      } else if (signinResponse.data.error) {
        alert("Sign Up failed");
      }
    } catch (err) {
      alert(err.toString());
    }
  };

  const onFocusEmail = (data) => {
    // console.log("call")
    if (data === "email") {
      setEmailFocus(!emailFocus);
    } else {
      setPasswordFocus(!passwordFocus);
    }
  };
  return (
    <div className="login-div">
      <div className="main-background">
        <div className="login-form">
          <form onSubmit={handlerSubmit}>
            <div className={`email ${emailFocus === true ? "emailFocus" : ""}`}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#525252"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M7.35,18.5C8.66,17.56,10.26,17,12,17 s3.34,0.56,4.65,1.5C15.34,19.44,13.74,20,12,20S8.66,19.44,7.35,18.5z M18.14,17.12L18.14,17.12C16.45,15.8,14.32,15,12,15 s-4.45,0.8-6.14,2.12l0,0C4.7,15.73,4,13.95,4,12c0-4.42,3.58-8,8-8s8,3.58,8,8C20,13.95,19.3,15.73,18.14,17.12z" />
                      <path d="M12,6c-1.93,0-3.5,1.57-3.5,3.5S10.07,13,12,13s3.5-1.57,3.5-3.5S13.93,6,12,6z M12,11c-0.83,0-1.5-0.67-1.5-1.5 S11.17,8,12,8s1.5,0.67,1.5,1.5S12.83,11,12,11z" />
                    </g>
                  </g>
                </svg>
              </span>
              <input
                type="text"
                placeholder="First Name"
                onFocus={() => onFocusEmail("email")}
                className="email-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={`email ${emailFocus === true ? "emailFocus" : ""}`}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#525252"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M7.35,18.5C8.66,17.56,10.26,17,12,17 s3.34,0.56,4.65,1.5C15.34,19.44,13.74,20,12,20S8.66,19.44,7.35,18.5z M18.14,17.12L18.14,17.12C16.45,15.8,14.32,15,12,15 s-4.45,0.8-6.14,2.12l0,0C4.7,15.73,4,13.95,4,12c0-4.42,3.58-8,8-8s8,3.58,8,8C20,13.95,19.3,15.73,18.14,17.12z" />
                      <path d="M12,6c-1.93,0-3.5,1.57-3.5,3.5S10.07,13,12,13s3.5-1.57,3.5-3.5S13.93,6,12,6z M12,11c-0.83,0-1.5-0.67-1.5-1.5 S11.17,8,12,8s1.5,0.67,1.5,1.5S12.83,11,12,11z" />
                    </g>
                  </g>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Last Name"
                onFocus={() => onFocusEmail("email")}
                className="email-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={`email ${emailFocus === true ? "emailFocus" : ""}`}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#525252"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email"
                onFocus={() => onFocusEmail("email")}
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              className={`password ${
                passwordFocus === true ? "passwordfocus" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#525252"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0V0z" />
                    <path d="M0 0h24v24H0V0z" opacity=".87" />
                  </g>
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Password"
                className="password-input"
                onFocus={() => onFocusEmail("password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="buttonlogin">
              <button className="login-btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <div className="signup-text">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div>
        <video loop muted autoPlay className="loginvideo" key={headerVideo}>
          <source src={headerVideo}></source>
        </video>
      </div>
    </div>
  );
};

export default Signup;
