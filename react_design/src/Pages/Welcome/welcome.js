import React from 'react'
import './welcome.css'
import '../../index.css'
import { Col, Container, Row } from 'react-bootstrap'
import WelcomeVideo from '../../assets/video/Woman_in_the_pool.mp4'
import ProductTitle1 from '../../assets/image/Product-title-1.jpeg'
import ProductTitle2 from '../../assets/image/Product-title-2.jpeg'
import { Link } from 'react-router-dom'


const welcome = () => {
    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < (windowHeight - elementVisible)) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    reveal()
    window.addEventListener("scroll", reveal);
    return (
        <div>
            <div className='welcome-term reveal fade-in active'>
                <video loop muted autoPlay className='headervideo'>
                    <source src={WelcomeVideo}></source>
                </video>
            </div>
            <div className='pt-5'>
                <Container>
                    <h1 className='header-text'>Welcome</h1>
                    <Row>
                        <Col lg="6">
                            <Link to="/categorytitle">
                                <div className="content">
                                    <div className="grid">
                                        <figure className="effect-layla">
                                            <img src={ProductTitle1} alt="Product" />
                                            <figcaption>
                                                <h2>Category Title</h2>
                                                <p>is simply dummy text of the printing and typesetting industry.</p>

                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg="6">
                            <Link to="/categorytitle">
                                <div className="content">
                                    <div className="grid">
                                        <figure className="effect-layla">
                                            <img src={ProductTitle2} alt="Product" />
                                            <figcaption>
                                                <h2>Category Title </h2>
                                                <p>is simply dummy text of the printing and typesetting industry.</p>

                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg="6">
                            <Link to="/categorytitle">
                                <div className="content">
                                    <div className="grid">
                                        <figure className="effect-layla">
                                            <img src={ProductTitle1} alt="Product" />
                                            <figcaption>
                                                <h2>Category Title</h2>
                                                <p>is simply dummy text of the printing and typesetting industry.</p>

                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg="6">
                            <Link to="/categorytitle">
                                <div className="content">
                                    <div className="grid">
                                        <figure className="effect-layla">
                                            <img src={ProductTitle2} alt="Product" />
                                            <figcaption>
                                                <h2>Category Title </h2>
                                                <p>is simply dummy text of the printing and typesetting industry.</p>

                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default welcome