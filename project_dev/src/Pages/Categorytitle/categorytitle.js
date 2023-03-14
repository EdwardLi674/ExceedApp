import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./categorytitle.css";
import "../../index.css";
import { Col, Container, Row } from "react-bootstrap";
import WelcomeVideo from "../../assets/video/Woman_in_the_pool.mp4";
import { Link, useParams } from "react-router-dom";
import { getFormObj, server_domain } from "../../services/constants";
import { post } from "../../services/axios";
import { setError } from "../../redux/appsettingSlice";

const CategoryTitle = () => {
  const params = useParams();
  const categoryId = params.id;

  const user = useSelector((state) => state.auth.user);
  const user_id = user?.user_id;

  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let formData = getFormObj();
      formData.append("api_method", "list_items");
      formData.append("user_id", user_id);

      try {
        const response = await post(server_domain, formData);
        if (response.data.message === "SUCCESS") {
          const items = response.data.items;
          const categoryItems = items.filter(
            (item) => item.category_id === categoryId
          );
          setItems(categoryItems);
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
        setError({
          isShow: true,
          alert_title: "Error",
          alert_text: "",
          alert_action_button_title: "",
          alert_action_url: "",
          message: err.toString(),
        });
      }
    };

    getItems();
  }, []);

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
        <video loop muted autoPlay className="headervideo">
          <source src={WelcomeVideo}></source>
        </video>
        <Container></Container>
      </div>
      <div className="pt-5 position-relative">
        <Container>
          <h1 className="header-text">{items[0]?.category}</h1>
          <Row>
            {items.map((item) => (
              <Col lg="6" key={item._id}>
                <Link to={`/item/${item._id}`}>
                  <div className="product-card">
                    <div className="badge-per">{item.no_of_people} people</div>
                    <div className="product-tumb">
                      <img src={item.image01} alt="Product" />
                    </div>
                    <div className="product-details">
                      <span className="product-catagory">{item.code}</span>
                      <h4>
                        <Link to={`/item/${item._id}`}>{item.name}</Link>
                      </h4>
                      <div className="product-bottom-details">
                        <div className="product-price">
                          <small>&#163; 96.00</small>&#163; {item.priceNUM}
                        </div>
                        <div className="product-links">
                          <Link to={`/item/${item._id}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#ffffff"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
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

export default CategoryTitle;
