import React from 'react'
import './orderdetails.css'
import '../../index.css'
import { Container } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'
import { Link } from 'react-router-dom'

const orderdetails = () => {
    return (
        <div>
            <div className='video-term reveal fade-in active'>
                <video loop muted autoPlay className='headervideo'>
                    <source src={TermsconditionsVIdeo}></source>
                </video>
                <Container>
                </Container>
            </div>
            <div className='position-relative'>
                <Container className='mt-5 pt-5'>
                    <h1 className='header-text'>Your Account</h1>

                    <nav className="nav nav-borders">
                        <Link to="/user-profile" className="nav-link ms-0">
                            Edit Profile
                        </Link>
                        <Link to="/your-order" className="nav-link active ">
                            Your Order
                        </Link>
                        <Link to="/save-item" className="nav-link">
                            Saved / Favorites
                        </Link>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="card mb-4">
                        <div className="card-header">Order Details</div>
                        <div className="card-body p-0">
                            <div className="table-responsive table-billing-history">
                                <div className='history'>
                                    <span>Order Id: 39201</span>
                                </div>
                                <div className='history'>
                                    <span>Date: 06/05/2022</span>
                                </div>
                                <div className='history'>
                                    <span>Total: $29.99</span>
                                </div>
                                <div className='history'>
                                    <span>Paid : $29.99</span>
                                </div>
                                <div className='history'>
                                    <span>Payment Date: 06/05/2022</span>
                                </div>
                                <div className='history'>
                                    <span>Payment Ref#: ch_f5g5fh54cn5645</span>
                                </div>
                                <div className='history'>
                                    <span>Payment Method: VISA ****3456</span>
                                </div>
                                <div className='download-invoice'>
                                    <button>Download Invoice</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default orderdetails