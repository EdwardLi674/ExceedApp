import React from "react";
import { useSelector } from "react-redux";
import "./privacypolicy.css";
import "../../index.css";
import { Col, Container, Row } from "react-bootstrap";
import TermsconditionsVIdeo from "../../assets/video/Man_walking_to_his_villa.mp4";
import FirstImage from "../../assets/image/charbel-aoun-1IdM3Go0VSU-unsplash.jpeg";
import LastImage from "../../assets/image/cory-bjork-D1yT791Nf9A-unsplash.jpeg";
import ThirdImage from "../../assets/image/mar-cerdeira-bBF9e2UUh88-unsplash.jpeg";

const PrivacyPolicy = () => {
  const privacyContent = useSelector(
    (state) => state.appsetting.privacy_policy_content
  );
  const headerVideo = privacyContent.header_videoISfile;
  const mainSubHeading = privacyContent.main_subheading;
  const mainText = privacyContent.main_textISsmallplaintextbox;
  const secondSubHeading = privacyContent.secondary_subheading;
  const secondText = privacyContent.secondary_textISsmallplaintextbox;
  const image1 = privacyContent.image01ISfile;
  const image2 = privacyContent.image02ISfile;
  const image3 = privacyContent.image03ISfile;

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
    <div>
      <div className="video-term reveal fade-in active">
        <video loop muted autoPlay className="headervideo" key={headerVideo}>
          <source src={headerVideo}></source>
        </video>
      </div>
      <div className="position-relative">
        <Container>
          <h1 className="header-text">Privacy Policy</h1>
          <Row className="justify-content-md-center mt-5">
            <Col lg="8">
              <div className="first-row">
                <div className="maindiv-image">
                  <div className="image-div mb-4">
                    <img src={image2} alt="charbel aoun 1IdM3Go0VSU unsplash" />
                  </div>
                  <div className="image-div mb-4">
                    <img src={image1} alt="cory bjork D1yT791Nf9A unsplash" />
                  </div>
                </div>
                <div className="image-text">
                  <h1>{mainSubHeading}</h1>
                  <p>{mainText}</p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="">
                <div className="">
                  <div className="side-blog">
                    <img src={image3} alt="mar cerdeira bBF9e2UUh88 unsplash" />
                  </div>
                </div>
                <div className="side-text">
                  <h1>{secondSubHeading}</h1>
                  <p>{secondText}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
