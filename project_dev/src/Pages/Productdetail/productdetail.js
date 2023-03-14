import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productdetail.css";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import Rating from "../../assets/image/rating.png";
import { useParams, useNavigate } from "react-router-dom";
import { getFormObj, server_domain } from "../../services/constants";
import { post } from "../../services/axios";
import { setError } from "../../redux/appsettingSlice";

const ProductDetail = () => {
  const params = useParams();
  const itemId = params.id;

  const user = useSelector((state) => state.auth.user);
  const user_id = user?.user_id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [item, setItem] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let formData = getFormObj();
      formData.append("api_method", "get_item");
      formData.append("user_id", user_id);
      formData.append("item_id", itemId);

      try {
        const response = await post(server_domain, formData);
        if (response.data.message === "SUCCESS") {
          setItem(response.data.item);
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

  const handlerBuyNow = async () => {
    let formData = getFormObj();
    formData.append("api_method", "add_app_orders_items");
    formData.append("user_id", user_id);
    formData.append("itemISbb_esp_supplied_itemsID", itemId);
    formData.append("qtyNUM", "1");
    formData.append("priceNUM", item.typically_sells_for);

    try {
      const response = await post(server_domain, formData);
      if (response.data.message === "SUCCESS") {
        navigate("/checkout");
      } else if (response.data.error) {
        dispatch(
          setError({
            isShow: true,
            alert_title: response.data.alert_title,
            alert_text: response.data.alert_text,
            alert_action_button_title: response.data.alert_action_button_title,
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

  return (
    <div>
      <div className="slider-product">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.image01}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.image02}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.image03}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <Container className="mt-5">
          <Row className="sm-detail">
            <Col lg="3" className="price-sec">
              <div>
                <p className="price">&#163; 1768</p>
                <p className="people">{item.no_of_people} people</p>
                <div>
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555019755!2d-122.50764063294503!3d37.75781499718648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652075004362!5m2!1sen!2sus" width="220" height="200" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.851905223259!2d-0.0945627!3d51.497585099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a097011091%3A0xc1b8da219324a789!2s4%20Brockham%20St%2C%20London%20SE1%204HX%2C%20UK!5e0!3m2!1sen!2sus!4v1652538531478!5m2!1sen!2sus"
                    width="220"
                    height="200"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="map"
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col lg="6" className="title-last">
              <div>
                <h1 className="product-title">{item.name}</h1>
                <div className="rating-star">
                  <img src={Rating} alt="Rating star" />
                </div>
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                <ul className="product-description">
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="3" className="mt-4 button-top">
              <div className="buynow-maindiv">
                <button className="buy-now" onClick={handlerBuyNow}>
                  Buy Now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetail;
