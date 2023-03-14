import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./header.css";
import { logout } from "../redux/authSlice";
import { Link } from "react-router-dom";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { getFormObj, server_domain } from "../services/constants";
import { post } from "../services/axios";
import { AlertModal } from "../Components/AlertModal";
import { setError } from "../redux/appsettingSlice";

export const Header = () => {
  const error = useSelector((state) => state.appsetting.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const user_id = user?.user_id;
  const logo = useSelector((state) => state.appsetting.logo);

  const dispatch = useDispatch();

  const handlerLogout = async () => {
    let formData = getFormObj();
    formData.append("api_method", "logoff");
    formData.append("user_id", user_id);

    try {
      const logoutResponse = await post(server_domain, formData);

      if (logoutResponse.data.success === 1) {
        dispatch(logout());
        window.sessionStorage.clear();
      } else if (logoutResponse.data.error) {
        alert("Logout failed");
      }
    } catch (err) {
      alert(err.toString());
    }
  };

  const onModalClosed = () => {
    dispatch(
      setError({
        isShow: false,
        alert_title: "",
        alert_text: "",
        alert_action_button_title: "",
        alert_action_url: "",
        message: "",
      })
    );
  };

  return (
    <>
      <Navbar
        expand={"false"}
        fixed="top"
        collapseOnSelect={true}
        className="background-black"
      >
        <Container fluid>
          <Link to="/" className="header-logo">
            <img src={logo.image01ISfile} alt="Header Logo" />
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            // collapseOnSelect={false}
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                Offcanvas
                            </Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#" as={Nav}>
                  <Link to="/" className="nav-menulist">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="#" as={Nav}>
                  <Link to="/about" className="nav-menulist">
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link href="#" as={Nav}>
                  <Link to="/contact-us" className="nav-menulist">
                    Contact Us
                  </Link>{" "}
                </Nav.Link>
                {!isAuthenticated && (
                  <Nav.Link href="#" as={Nav}>
                    <Link to="/signup" className="nav-menulist">
                      Sign up
                    </Link>{" "}
                  </Nav.Link>
                )}
                {isAuthenticated && (
                  <Nav.Link href="#" as={Nav}>
                    <Link to="/checkout" className="nav-menulist">
                      Checkout
                    </Link>{" "}
                  </Nav.Link>
                )}
                {isAuthenticated && (
                  <Nav.Link href="#" as={Nav}>
                    <Link to="/user-profile" className="nav-menulist">
                      Your Account
                    </Link>{" "}
                  </Nav.Link>
                )}
                <Nav.Link href="#" as={Nav}>
                  <Link to="/terms-conditions" className="nav-menulist">
                    Terms & Conditions
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link href="#" as={Nav}>
                  <Link to="/privacy-policy" className="nav-menulist">
                    Privacy Policy
                  </Link>{" "}
                </Nav.Link>
                {isAuthenticated && (
                  <Nav.Link href="#" as={Nav}>
                    <Link
                      to="/"
                      className="nav-menulist"
                      onClick={() => handlerLogout()}
                    >
                      Sign Out
                    </Link>{" "}
                  </Nav.Link>
                )}
                {!isAuthenticated && (
                  <Nav.Link href="#" as={Nav}>
                    <Link to="/login" className="nav-menulist">
                      Log in
                    </Link>{" "}
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <AlertModal
        isShow={error.isShow}
        title={error.alert_title}
        text={error.alert_text}
        actionButtonTitle={error.alert_action_button_title}
        actionUrl={error.alert_action_url}
        message={error.message}
        onClose={onModalClosed}
      />
    </>
  );
};
