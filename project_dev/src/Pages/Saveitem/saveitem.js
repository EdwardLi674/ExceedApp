import React from 'react'
import './saveitem.css'
import '../../index.css'
import { Col, Container, Row } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'
import LastImage from '../../assets/image/cory-bjork-D1yT791Nf9A-unsplash.jpeg'
import { Link } from 'react-router-dom'

const saveitem = () => {
    return (
        <div>
            <div className='video-term reveal fade-in active'>
                <video loop muted autoPlay className='headervideo'>
                    <source src={TermsconditionsVIdeo}></source>
                </video>
            </div>
            <div className='position-relative'>
                <Container className='mt-5 pt-5'>
                    <h1 className='header-text'>Your Account</h1>
                    <nav className="nav nav-borders">
                        <Link to="/user-profile" className="nav-link ms-0">
                            Edit Profile
                        </Link>
                        <Link to="/your-order" className="nav-link">
                            Your Order
                        </Link>
                        <Link to="/save-item" className="nav-link active ">
                            Saved / Favorites
                        </Link>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <Row className="justify-content-md-center mt-5">
                        <Col lg="6" className=''>
                            <Link to="/product-detail" className='details-row'>
                                <div className='first-row'>
                                    <div className='maindiv-image'>
                                        <div className='image-div mb-3'>
                                            <img src={LastImage} alt="charbel aoun 1IdM3Go0VSU unsplash" />
                                        </div>
                                    </div>
                                    <div className='image-text'>
                                        <h3>Lorem Ipsum</h3>
                                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg="6" className=''>
                            <Link to="/product-detail" className='details-row'>
                                <div className='first-row'>
                                    <div className='maindiv-image'>
                                        <div className='image-div mb-3'>
                                            <img src={LastImage} alt="charbel aoun 1IdM3Go0VSU unsplash" />
                                        </div>
                                    </div>
                                    <div className='image-text'>
                                        <h3>Lorem Ipsum</h3>
                                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg="6" className=''>
                            <Link to="/product-detail" className='details-row'>
                                <div className='first-row'>
                                    <div className='maindiv-image'>
                                        <div className='image-div mb-3'>
                                            <img src={LastImage} alt="charbel aoun 1IdM3Go0VSU unsplash" />
                                        </div>
                                    </div>
                                    <div className='image-text'>
                                        <h3>Lorem Ipsum</h3>
                                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg="6" className=''>
                            <Link to="/product-detail" className='details-row'>
                                <div className='first-row'>
                                    <div className='maindiv-image'>
                                        <div className='image-div mb-3'>
                                            <img src={LastImage} alt="charbel aoun 1IdM3Go0VSU unsplash" />
                                        </div>
                                    </div>
                                    <div className='image-text'>
                                        <h3>Lorem Ipsum</h3>
                                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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

export default saveitem