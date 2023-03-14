import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import VideoLogin from "../../assets/video/Coastal_paradise.mp4";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getFormObj, server_domain } from "../../services/constants";
import { post } from "../../services/axios";
import { login } from "../../redux/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const loginContent = useSelector((state) => state.appsetting.login_content);
  const headerVideo = loginContent.header_videoISfile;

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const onFocusEmail = (data) => {
    // console.log("call")
    if (data === "email") {
      setEmailFocus(!emailFocus);
    } else {
      setPasswordFocus(!passwordFocus);
    }
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();

    let formData = getFormObj();
    formData.append("api_method", "login");
    formData.append("login_email", email);
    formData.append("login_password", password);

    try {
      setLoading(true);
      const loginResponse = await post(server_domain, formData);
      setLoading(false);

      if (loginResponse.data.success === 1) {
        const user_id = loginResponse.data.user_id;
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
        navigate(from, { replace: true });
      } else if (loginResponse.data.error) {
        alert("Incorrect email and password");
      }
    } catch (err) {
      setLoading(false);
      alert(err.toString());
    }
  };

  return (
    <div className="login-div">
      <div className="main-background">
        <div className="login-form reveal fade-in active">
          <form onSubmit={handlerSubmit}>
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
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => onFocusEmail("email")}
                onBlur={() => onFocusEmail("email")}
                className="email-input"
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
                name="password"
                placeholder="Password"
                className="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => onFocusEmail("password")}
                onBlur={() => onFocusEmail("password")}
              />
            </div>
            <div className="reset-pass">
              <Link to="/resetpassword">Password Reset</Link>
            </div>
            <div className="buttonlogin">
              {/* <Link to="/welcome"> */}
              <button className="login-btn" type="submit">
                Login
              </button>
              {/* </Link> */}
            </div>
          </form>
          <div className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
          {/* <div className='password-reset'>
                        <Link to='/resetpassword'><button>Password Reset</button></Link>
                    </div> */}
        </div>
      </div>
      <div className="video-login">
        <video
          loop
          muted
          autoPlay
          className="loginvideo reveal fade-in active"
          key={headerVideo}
        >
          <source src={headerVideo}></source>
        </video>
      </div>
    </div>
  );
}

export default Login;
