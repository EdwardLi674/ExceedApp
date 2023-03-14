import React, { useState } from 'react'
import './payment.css'
import { Col, Container, Row } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'
import { Link } from 'react-router-dom'

const Payment = () => {

    const [payments, setPayment] = useState('credit')

    const handleronchange = (event) => {
        setPayment(event.target.value)
    }

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
                <Container className='mt-5'>
                    <div className='header-maindiv'>
                        <h1 className='header-payment'>Payment</h1>

                    </div>
                    <Row>
                        <Col lg="4" className='mb-4 payment-div'>
                            <form>
                                <div className="d-block my-3" >
                                    <div className='detail-card'>
                                        <div className="custom-control custom-radio">
                                            <input id="credit" value="credit" name="paymentMethod" type="radio" onChange={handleronchange} className="custom-control-input" checked={payments === 'credit'} required />
                                            <label className="custom-control-label" htmlFor="credit">Card Payment</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="debit" value="debit" name="paymentMethod" type="radio" onChange={handleronchange} className="custom-control-input" checked={payments === 'debit'} required />
                                            <label className="custom-control-label" htmlFor="debit">PayPal</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="paypal" value="paypal" name="paymentMethod" type="radio" onChange={handleronchange} className="custom-control-input" checked={payments === 'paypal'} required />
                                            <label className="custom-control-label" htmlFor="paypal">Google Pay</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="applepay" value="applepay" name="paymentMethod" type="radio" onChange={handleronchange} className="custom-control-input" checked={payments === 'applepay'} required />
                                            <label className="custom-control-label" htmlFor="applepay">Apple Pay</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Col>
                        <Col lg="8" className='enter-detail'>
                            <form className="needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div class="remember-me form-group">
                                            <input type="checkbox" name="" id="usecard" />
                                            <label for="usecard">Use VISA Card ending 4567</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-name">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-number">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-cvv">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='payment-total'>
                                            <p>Total to Pay: &#163;2,468</p>
                                            <div class="remember-me form-group">
                                                <input type="checkbox" name="" id="remember" />
                                                <label for="remember">Remember me</label>
                                            </div>
                                            <div className='text-center'>
                                                <Link to="/paid">
                                                    <button className="btn btn-lg btn-block cont-shop" type="submit">Make Payment</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Payment