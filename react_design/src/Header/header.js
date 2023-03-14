import React, { useEffect, useState } from "react";
import './header.css';
import Logo from '../assets/logo-white.png'
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap'

export const Header = () => {
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()
    const get = window.sessionStorage.getItem("login")
    useEffect(() => {
        if (!get == null) {
            setLogin(true)
        }
        if (get) {
            setLogin(true)
        }
        console.log(get)
    }, [get])

    const handlerLogout = () => {
        console.log("tr")
        setLogin(false)
        window.sessionStorage.clear()
        navigate("/", { replace: true })
    }
    console.log(login)
    return (
        <>
            <Navbar expand={'false'} fixed="top" collapseOnSelect={true} className="background-black">
                <Container fluid>
                    <Link to='/' className="header-logo">
                        <img src={Logo} alt="Header Logo" />
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
                                    <Link to='/' className="nav-menulist">
                                        Home
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#" as={Nav}>
                                    <Link to='/about' className="nav-menulist" >
                                        About
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#" as={Nav}>
                                    <Link to='/contact-us' className="nav-menulist">
                                        Contact Us
                                    </Link> </Nav.Link>
                                {login == false && <Nav.Link href="#" as={Nav}>
                                    <Link to='/signup' className="nav-menulist">
                                        Sign up
                                    </Link> </Nav.Link>}
                                {login == true && <Nav.Link href="#" as={Nav}>
                                    <Link to='/checkout' className="nav-menulist">
                                        Checkout
                                    </Link> </Nav.Link>}
                                {login == true && <Nav.Link href="#" as={Nav}>
                                    <Link to='/user-profile' className="nav-menulist">
                                        Your Account
                                    </Link> </Nav.Link>}
                                <Nav.Link href="#" as={Nav}>
                                    <Link to='/terms-conditions' className="nav-menulist">
                                        Terms & Conditions
                                    </Link> </Nav.Link>
                                <Nav.Link href="#" as={Nav}>
                                    <Link to='/privacy-policy' className="nav-menulist">
                                        Privacy Policy
                                    </Link> </Nav.Link>
                                {login == true && <Nav.Link href="#" as={Nav}>
                                    <Link to='/login' className="nav-menulist" onClick={() => handlerLogout()}>
                                        Sign Out
                                    </Link> </Nav.Link>}
                                {login == false && <Nav.Link href="#" as={Nav}><Link to='/login' className="nav-menulist">
                                    Log in
                                </Link> </Nav.Link>}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};