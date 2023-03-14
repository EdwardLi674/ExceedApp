import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./checkout.css";
import { Col, Container, Row } from "react-bootstrap";
import TermsconditionsVIdeo from "../../assets/video/Man_walking_to_his_villa.mp4";
import { Link, useNavigate } from "react-router-dom";
import { getFormObj, server_domain } from "../../services/constants";
import { post } from "../../services/axios";
import { setError } from "../../redux/appsettingSlice";
import { ConfirmModal } from "../../Components/ConfirmModal";

const DOMAIN_STRING = "https://exceed.blueboxonline.com/";

const Checkout = () => {
  const user = useSelector((state) => state.auth.user);
  const user_id = user?.user_id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ordersItems, setOrdersItems] = useState([]);
  const [isRemoveModal, setIsRemoveModal] = useState(false);
  const [romoveOrderId, setRemoveOrderId] = useState("");

  useEffect(() => {
    const getOrdersItems = async () => {
      let formData = getFormObj();
      formData.append("api_method", "list_app_orders_items");
      formData.append("user_id", user_id);
      formData.append("get_linked_data", "1");

      try {
        const response = await post(server_domain, formData);
        if (response.data.message === "SUCCESS") {
          const ordersItems = response.data.list;
          setOrdersItems(ordersItems);
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

    getOrdersItems();
  }, []);

  const setOrderItemQty = (e, orderId) => {
    const newOrders = ordersItems.map((orderItem) => {
      if (orderItem.numeric_id === orderId) {
        const qty = e.target.value ? e.target.value : "0";
        return { ...orderItem, qtyNUM: qty };
      }
      return orderItem;
    });
    setOrdersItems(newOrders);
  };

  const handlerBlur = async (orderId) => {
    const order = ordersItems.find(
      (orderItem) => orderItem.numeric_id === orderId
    );

    let formData = getFormObj();
    formData.append("api_method", "update_app_orders_items");
    formData.append("user_id", user_id);
    formData.append("_id", orderId);
    formData.append(
      "itemISbb_esp_supplied_itemsID",
      order.itemISbb_esp_supplied_itemsID
    );
    formData.append("qtyNUM", order.qtyNUM);
    formData.append("priceNUM", order.priceNUM);

    try {
      const response = await post(server_domain, formData);
      if (response.data.message === "SUCCESS") {
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

  const handlerContinueShopping = () => {
    navigate(-2);
  };

  const handlerRemove = (orderId) => {
    setRemoveOrderId(orderId);
    setIsRemoveModal(true);
  };

  const handlerCloseRemoveModal = async (val) => {
    console.log(romoveOrderId);

    let formData = getFormObj();
    formData.append("api_method", "delete_app_orders_items");
    formData.append("user_id", user_id);
    formData.append("_id", romoveOrderId);

    try {
      const response = await post(server_domain, formData);
      if (response.data.message === "SUCCESS") {
        setIsRemoveModal(false);
        const newOrdersItems = ordersItems.filter(
          (orderItem) => orderItem.numeric_id !== romoveOrderId
        );
        setOrdersItems(newOrdersItems);
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
      <div className="video-term reveal fade-in active">
        <video loop muted autoPlay className="headervideo">
          <source src={TermsconditionsVIdeo}></source>
        </video>
        {/* <Container className='header-div'>

                </Container> */}
      </div>
      <div className="position-relative">
        <Container>
          <div className="header-maindiv">
            <h1 className="header-payment">Checkout</h1>
            <button className="continue-shop" onClick={handlerContinueShopping}>
              Continue Shopping
            </button>
          </div>
          <Row className="top-row">
            <Col lg="3"></Col>
            <Col lg="6"></Col>
            <Col lg="1"></Col>
            <Col lg="1">Price</Col>
            <Col lg="1">Total</Col>
          </Row>
          {ordersItems.map((orderItem) => (
            <Row className="checkout-row" key={orderItem.numeric_id}>
              <Col lg="3">
                <Link
                  to={`/item/${orderItem?.itemISbb_esp_supplied_itemsID_data?.numeric_id}`}
                >
                  <div className="checkout-image">
                    <img
                      src={
                        DOMAIN_STRING +
                        orderItem?.itemISbb_esp_supplied_itemsID_data
                          ?.image01ISfile
                      }
                      style={{
                        maxWidth: "200px",
                        maxHeight: "150px",
                        objectFit: "cover",
                      }}
                      alt="Product Checkout"
                    />
                  </div>
                </Link>
              </Col>
              <Col lg="6">
                <div>
                  <Link
                    to={`/item/${orderItem?.itemISbb_esp_supplied_itemsID_data?.numeric_id}`}
                  >
                    <h3 className="checkout-title">
                      {orderItem?.itemISbb_esp_supplied_itemsID_data?.name}
                    </h3>
                  </Link>
                  <p>
                    {orderItem?.itemISbb_esp_supplied_itemsID_data?.description}
                  </p>
                  <p className="checkout-people">
                    {parseInt(
                      orderItem?.itemISbb_esp_supplied_itemsID_data
                        ?.no_of_peopleNUM
                    )}{" "}
                    people
                  </p>
                </div>
              </Col>
              <Col lg="1" className="count">
                <div className="product-count">
                  <input
                    type="text"
                    placeholder="0"
                    value={parseInt(orderItem.qtyNUM)}
                    onChange={(e) => setOrderItemQty(e, orderItem.numeric_id)}
                    onBlur={() => handlerBlur(orderItem.numeric_id)}
                  />
                  <button
                    className="remove-btn"
                    onClick={() => handlerRemove(orderItem.numeric_id)}
                  >
                    Remove
                  </button>
                </div>
              </Col>
              <Col lg="1" className="list">
                <div>
                  <p className="price-list">
                    &#163;{parseFloat(orderItem.priceNUM)}
                  </p>
                </div>
              </Col>
              <Col lg="1" className="total">
                <div>
                  <p className="price-total">
                    &#163;
                    {parseFloat(orderItem.priceNUM) *
                      parseInt(orderItem.qtyNUM)}
                  </p>
                </div>
              </Col>
            </Row>
          ))}
          <Row>
            <Col lg="3"></Col>
            <Col lg="6"></Col>
            <Col lg="1"></Col>
            <Col lg="1"></Col>
            <Col lg="1" className="main-total">
              <p className="price-totallast">
                &#163;
                {ordersItems.reduce((pv, cv) => {
                  return pv + parseFloat(cv.priceNUM) * parseInt(cv.qtyNUM);
                }, 0)}
              </p>
              <Link to="/payment">
                <button className="cont-shop">Pay</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <ConfirmModal
        isShow={isRemoveModal}
        onClose={(val) => handlerCloseRemoveModal(val)}
        title="Remove Order"
        text="Are you sure to remove current order?"
      />
    </div>
  );
};

export default Checkout;
