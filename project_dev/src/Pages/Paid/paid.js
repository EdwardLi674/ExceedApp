import React from 'react'
import './paid.css'
import { Col, Container, Row } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'
import { Link } from 'react-router-dom'

const paid = () => {
    return (
        <div>
            <div className='video-term reveal fade-in active'>
                <video loop muted autoPlay className='headervideo'>
                    <source src={TermsconditionsVIdeo}></source>
                </video>
                <Container className='header-div'>

                </Container>
            </div>
            <div className='position-relative'>
                <Container>
                    <div className='header-maindiv'>
                        <h1 className='header-payment'>Paid</h1>
                    </div>
                    <Row>
                        <div className="main-contents">
                            <div className="success-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z" />
                                </svg>
                            </div>
                            <div className="success-title">
                                Payment Complete
                            </div>
                            <div className="order-details">
                                <div className="order-number-label">Order Reference: <span>OR123456</span></div>
                                {/* <div className="order-number"></div> */}
                            </div>
                            <div className="order-details">
                                <div className="order-number-label">Your voucher codes for this order:</div>
                                <div className="order-number-label"><span>VX102345</span></div>
                                <div className="order-number-label"><span>VX102346</span></div>
                                <div className="order-number-label"><span>VX102347</span></div>
                            </div>
                            <div className="success-description">
                                Thanks, your order has been paid for.<br /> To complete your order we need additional information, <br />please follow the link below to complete the form:
                            </div>
                            <div className='info-div'>
                                <Link to="/order-details"><button className='buy-now'>View Information Form</button></Link>
                            </div>
                            <div className="success-description">
                                You can track your order status and progress in your account.
                            </div>
                            <div className="order-footer">Thank you!</div>
                        </div>
                    </Row>
                </Container></div>
        </div>
    )
}

export default paid