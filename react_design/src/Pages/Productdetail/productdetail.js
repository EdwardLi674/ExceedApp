import React from 'react'
import './productdetail.css'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import Slider1 from '../../assets/image/slider1.jpeg'
import Slider2 from '../../assets/image/Product-title-1.jpeg'
import Slider3 from '../../assets/image/Product-title-2.jpeg'
import Rating from '../../assets/image/rating.png'
import { Link } from 'react-router-dom'

const productdetail = () => {
    return (
        <div>
            <div className='slider-product'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Slider1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Slider2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Slider3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Container className='mt-5'>
                    <Row className='sm-detail'>
                        <Col lg="3" className='price-sec'>
                            <div>
                                <p className='price'>&#163; 1768</p>
                                <p className='people'>8 people</p>
                                <div>
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555019755!2d-122.50764063294503!3d37.75781499718648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652075004362!5m2!1sen!2sus" width="220" height="200" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe> */}
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.851905223259!2d-0.0945627!3d51.497585099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a097011091%3A0xc1b8da219324a789!2s4%20Brockham%20St%2C%20London%20SE1%204HX%2C%20UK!5e0!3m2!1sen!2sus!4v1652538531478!5m2!1sen!2sus" width="220" height="200" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" className='title-last'>
                            <div>
                                <h1 className='product-title'>Title</h1>
                                <div className='rating-star'>
                                    <img src={Rating} alt="Rating star" />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <ul className='product-description'>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="3" className='mt-4 button-top'>
                            <div className='buynow-maindiv'>
                                <Link to="/checkout">
                                    <button className='buy-now'>Buy Now</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default productdetail