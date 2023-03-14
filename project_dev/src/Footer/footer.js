import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
import Facebook from "../assets/image/facebook.png";
import Instagram from "../assets/image/instagram.png";
import Twitter from "../assets/image/twitter.png";
import { Container } from "react-bootstrap";

const Footer = () => {
  const logo = useSelector((state) => state.appsetting.logo);

  const location = useLocation();
  const [page, setPage] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/signup" ||
      location.pathname === "/login" ||
      location.pathname === "/resetpassword"
    ) {
      setPage(true);
    }
  }, [location]);

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

  return (
    <div className={` ${page === true ? "footer" : "footer-maindiv"} `}>
      <Container>
        <div>
          <ul className="footer-menu">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact-us">
              <li>Contact Us</li>
            </Link>
          </ul>
          <ul className="social-icon">
            <Link to="/">
              <li>
                <img src={Twitter} alt="Twitter" />
              </li>
            </Link>
            <Link to="/">
              <li>
                <img src={Facebook} alt="Facebook" />
              </li>
            </Link>
            <Link to="/">
              <li>
                <img src={Instagram} alt="Instagram" />
              </li>
            </Link>
          </ul>
          <div className="term-footer">
            <p className="copy-text">(C) 2022 XYZ</p>
            <div className="terms-social">
              <ul className="footer-menu">
                <Link to="/terms-conditions">
                  <li>Terms and Conditions</li>
                </Link>
                <Link to="/">
                  <li>-</li>
                </Link>
                <Link to="/privacy-policy">
                  <li> Privacy Policy</li>
                </Link>
              </ul>
            </div>

            <div className="footer-logo">
              <Link to="/">
                <img src={logo.image01ISfile} alt="Footer Logo" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
