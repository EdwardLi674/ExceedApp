import React from 'react'
import './checkout.css'
import { Col, Container, Row } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'
import Productimage from '../../assets/image/Product-title-1.jpeg'
import { Link } from 'react-router-dom'

const checkout = () => {
    return (
        <div>
            <div className='video-term reveal fade-in active'>
                <video loop muted autoPlay className='headervideo'>
                    <source src={TermsconditionsVIdeo}></source>
                </video>
                {/* <Container className='header-div'>

                </Container> */}
            </div>
            <div className='position-relative'>
                <Container>
                    <div className='header-maindiv'>
                        <h1 className='header-payment'>Checkout</h1>
                        <Link to="/categorytitle"><button className='cont-shop'>Continue Shopping</button></Link>
                    </div>
                    <Row className='top-row'>
                        <Col lg="3"></Col>
                        <Col lg="6"></Col>
                        <Col lg="1"></Col>
                        <Col lg="1">Price</Col>
                        <Col lg="1">Total</Col>
                    </Row>
                    <Row className='checkout-row'>
                        <Col lg="3">
                            <Link to="/product-detail">
                                <div className='checkout-image'>
                                    <img src={Productimage} alt="Product Checkout" />
                                </div>
                            </Link>
                        </Col>
                        <Col lg="6">
                            <div>
                                <Link to="/product-detail">
                                    <h3 className='checkout-title'>Title</h3>
                                </Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p className='checkout-people'>8 people</p>
                            </div>
                        </Col>
                        <Col lg="1" className='count'>
                            <div className='product-count'>
                                <input type="text" placeholder='0' />
                                <Link to="/checkout">Remove</Link>
                            </div>
                        </Col>
                        <Col lg="1" className='list'>
                            <div>
                                <p className='price-list'>&#163;176</p>
                            </div>
                        </Col>
                        <Col lg="1" className='total'>
                            <div>
                                <p className='price-total'>&#163;176</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='checkout-row'>
                        <Col lg="3">
                            <Link to="/product-detail">
                                <div className='checkout-image'>
                                    <img src={Productimage} alt="Product Checkout" />
                                </div>
                            </Link>
                        </Col>
                        <Col lg="6">
                            <div>
                                <Link to="/product-detail">
                                    <h3 className='checkout-title'>Title</h3>
                                </Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p className='checkout-people'>8 people</p>
                            </div>
                        </Col>
                        <Col lg="1" className='count'>
                            <div className='product-count'>
                                <input type="text" placeholder='0' />
                                <Link to="/checkout">Remove</Link>
                            </div>
                        </Col>
                        <Col lg="1" className='list'>
                            <div>
                                <p className='price-list'>&#163;176</p>
                            </div>
                        </Col>
                        <Col lg="1" className='total'>
                            <div>
                                <p className='price-total'>&#163;176</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3"></Col>
                        <Col lg="6"></Col>
                        <Col lg="1"></Col>
                        <Col lg="1"></Col>
                        <Col lg="1" className='main-total'>
                            <p className='price-totallast'>&#163; 352</p>
                            <Link to="/payment">
                                <button className='cont-shop'>Pay</button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default checkout