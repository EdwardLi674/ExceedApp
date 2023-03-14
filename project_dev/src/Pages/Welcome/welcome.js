import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./welcome.css";
import "../../index.css";
import { Col, Container, Row } from "react-bootstrap";
import WelcomeVideo from "../../assets/video/Woman_in_the_pool.mp4";
import ProductTitle1 from "../../assets/image/Product-title-1.jpeg";
import ProductTitle2 from "../../assets/image/Product-title-2.jpeg";
import { Link } from "react-router-dom";
import { getFormObj, server_domain } from "../../services/constants";
import { post } from "../../services/axios";
import { setError } from "../../redux/appsettingSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  const welcomeContent = useSelector(
    (state) => state.appsetting.welcome_content
  );
  const headerVideo = welcomeContent.header_videoISfile;

  const user = useSelector((state) => state.auth.user);
  const user_id = user?.user_id;

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

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let formData = getFormObj();
      formData.append("api_method", "list_categories");
      formData.append("user_id", user_id);

      try {
        const response = await post(server_domain, formData);
        if (response.data.message === "SUCCESS") {
          setCategories(response.data.categories);
        } else if (response.data.error) {
          dispatch(
            setError({
              isShow: true,
              alert_title: response.data.alert_title,
              alert_text: response.data.alert_text,
              alert_action_button_title:
                response.data.alert_action_button_title,
              alert_action_url: response.data.alert_action_url,
              message: response.data.message,
            })
          );
        }
      } catch (err) {
        dispatch(
          setError({
            isShow: true,
            alert_title: "Error",
            alert_text: "",
            alert_action_button_title: "",
            alert_action_url: "",
            message: err.toString(),
          })
        );
      }
    };

    getCategories();
  }, [user_id]);

  return (
    <div>
      <div className="welcome-term reveal fade-in active">
        <video loop muted autoPlay className="headervideo" key={headerVideo}>
          <source src={headerVideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="pt-5">
        <Container>
          <h1 className="header-text">Welcome</h1>
          <Row>
            {categories.map((category) => (
              <Col lg="6" key={category._id}>
                <Link to={`/category/${category._id}`}>
                  <div className="content">
                    <div className="grid">
                      <figure className="effect-layla">
                        <img
                          src={category.imageISfile}
                          alt="Product"
                          width={520}
                          style={{ objectFit: "cover" }}
                        />
                        <figcaption>
                          <h2>{category.name}</h2>
                          <p>{category.textISsmallplaintextbox}</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Welcome;
