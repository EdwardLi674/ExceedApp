import React from 'react'
import './categorytitle.css'
import '../../index.css'
import { Col, Container, Row } from 'react-bootstrap'
import WelcomeVideo from '../../assets/video/Woman_in_the_pool.mp4'
import ProductTitle1 from '../../assets/image/Product-title-1.jpeg'
import { Link } from 'react-router-dom'

const categorytitle = () => {
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
            <div className='video-term reveal fade-in active'>
                <video loop muted autoPlay className='headervideo'>
                    <source src={WelcomeVideo}></source>
                </video>
                <Container>

                </Container>
            </div>
            <div className='pt-5 position-relative'>
                <Container>
                    <h1 className='header-text'>Category Title</h1>
                    <Row>
                        <Col lg="6">
                            <Link to="/product-detail">
                                <div className="product-card">
                                    <div className="badge-per">8 people</div>
                                    <div className="product-tumb">
                                        <img src={ProductTitle1} alt="Product" />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory">Lorem, Ipsum</span>
                                        <h4><Link to="/product-detail">Lorem Ipsum is simply dummy text</Link></h4>
                                        <div className="product-bottom-details">
                                            <div className="product-price"><small>&#163; 96.00</small>&#163; 230.99</div>
                                            <div className="product-links">
                                                <Link to="/product-detail">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
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
                        <Col lg="6">
                            <Link to="/product-detail">
                                <div className="product-card">
                                    <div className="badge-per">8 people</div>
                                    <div className="product-tumb">
                                        <img src={ProductTitle1} alt="Product" />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory">Lorem, Ipsum</span>
                                        <h4><Link to="/product-detail">Lorem Ipsum is simply dummy text</Link></h4>
                                        <div className="product-bottom-details">
                                            <div className="product-price"><small>&#163; 96.00</small>&#163; 230.99</div>
                                            <div className="product-links">
                                                <Link to="/product-detail">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
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
                        <Col lg="6">
                            <Link to="/product-detail">
                                <div className="product-card">
                                    <div className="badge-per">8 people</div>
                                    <div className="product-tumb">
                                        <img src={ProductTitle1} alt="Product" />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory">Lorem, Ipsum</span>
                                        <h4><Link to="/product-detail">Lorem Ipsum is simply dummy text</Link></h4>
                                        <div className="product-bottom-details">
                                            <div className="product-price"><small>&#163; 96.00</small>&#163; 230.99</div>
                                            <div className="product-links">
                                                <Link to="/product-detail">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
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
                        <Col lg="6">
                            <Link to="/product-detail">
                                <div className="product-card">
                                    <div className="badge-per">8 people</div>
                                    <div className="product-tumb">
                                        <img src={ProductTitle1} alt="Product" />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory">Lorem, Ipsum</span>
                                        <h4><Link to="/product-detail">Lorem Ipsum is simply dummy text</Link></h4>
                                        <div className="product-bottom-details">
                                            <div className="product-price"><small>&#163; 96.00</small>&#163; 230.99</div>
                                            <div className="product-links">
                                                <Link to="/product-detail">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
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
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default categorytitle