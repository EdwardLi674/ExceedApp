import React from 'react'
import './yourorder.css'
import '../../index.css'
import { Container } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'
import { Link } from 'react-router-dom'


const yourorder = () => {
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
                        <Link to="/your-order" className="nav-link active ">
                            Your Order
                        </Link>
                        <Link to="/save-item" className="nav-link">
                            Saved / Favorites
                        </Link>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100 border-start-lg border-start-primary">
                                <div className="card-body">
                                    <div className="small text-muted">Current monthly bill</div>
                                    <div className="h3">$20.00</div>
                                    <Link to="/" className="text-arrow-icon small box-color" href="#!">
                                        Switch to yearly billing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="feather feather-arrow-right">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100 border-start-lg border-start-secondary">
                                <div className="card-body">
                                    <div className="small text-muted">Next payment due</div>
                                    <div className="h3">July 15</div>
                                    <Link to="/" className="text-arrow-icon small box-color" href="#!">
                                        View payment history
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="feather feather-arrow-right">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100 border-start-lg border-start-success">
                                <div className="card-body">
                                    <div className="small text-muted">Current plan</div>
                                    <div className="h3 d-flex align-items-center">Freelancer</div>
                                    <Link to="/" className="text-arrow-icon small box-color" href="#!">
                                        Upgrade plan
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="feather feather-arrow-right">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Order History</div>
                        <div className="card-body p-0">
                            <div className="table-responsive table-billing-history">
                                <div>
                                    <div className='order-history order-sm-off'>
                                        <p className='date-order'>Date</p>
                                        <p className='date-order'>Order ID</p>
                                        <p className='item-order'>Item</p>
                                        <p className='date-order'>Voucher</p>
                                        <p className='date-order'>Value</p>
                                        <p className='date-order'></p>
                                    </div>
                                    <div className='order-history'>
                                        <p className='date-order date'><span className='titleorder-add'>Date</span>  06/15/2021</p>
                                        <p className='date-order orderid'><span className='titleorder-add'>Order Id</span> #39201</p>
                                        <p className='item-order item-title'>Item name</p>
                                        <p className='date-order code order-code'>VFX075GF</p>
                                        <p className='date-order total-order'><span className='titleorder-add'>Total</span> $29.99</p>
                                        <p className='date-order button-history sm-button-order'><Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></p>
                                    </div>
                                    <div className='order-history'>
                                        <p className='date-order date'><span className='titleorder-add'>Date</span>  06/15/2021</p>
                                        <p className='date-order orderid'><span className='titleorder-add'>Order Id</span> #39201</p>
                                        <p className='item-order item-title'>Item name</p>
                                        <p className='date-order code order-code'>VFX075GF</p>
                                        <p className='date-order total-order'><span className='titleorder-add'>Total</span> $29.99</p>
                                        <p className='date-order button-history sm-button-order'><Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></p>
                                    </div>
                                    <div className='order-history'>
                                        <p className='date-order date'><span className='titleorder-add'>Date</span>  06/15/2021</p>
                                        <p className='date-order orderid'><span className='titleorder-add'>Order Id</span> #39201</p>
                                        <p className='item-order item-title'>Item name</p>
                                        <p className='date-order code order-code'>VFX075GF</p>
                                        <p className='date-order total-order'><span className='titleorder-add'>Total</span> $29.99</p>
                                        <p className='date-order button-history sm-button-order'><Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></p>
                                    </div>
                                    <div className='order-history'>
                                        <p className='date-order date'><span className='titleorder-add'>Date</span>  06/15/2021</p>
                                        <p className='date-order orderid'><span className='titleorder-add'>Order Id</span> #39201</p>
                                        <p className='item-order item-title'>Item name</p>
                                        <p className='date-order code order-code'>VFX075GF</p>
                                        <p className='date-order total-order'><span className='titleorder-add'>Total</span> $29.99</p>
                                        <p className='date-order button-history sm-button-order'><Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></p>
                                    </div>
                                    <div className='order-history'>
                                        <p className='date-order date'><span className='titleorder-add'>Date</span>  06/15/2021</p>
                                        <p className='date-order orderid'><span className='titleorder-add'>Order Id</span> #39201</p>
                                        <p className='item-order item-title'>Item name</p>
                                        <p className='date-order code order-code'>VFX075GF</p>
                                        <p className='date-order total-order'><span className='titleorder-add'>Total</span> $29.99</p>
                                        <p className='date-order button-history sm-button-order'><Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></p>
                                    </div>

                                </div>
                                {/* <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th className="border-gray-200" scope="col">Order ID</th>
                                        <th className="border-gray-200" scope="col">Date</th>
                                        <th className="border-gray-200" scope="col">Item</th>
                                        <th className="border-gray-200" scope="col">Voucher</th>
                                        <th className="border-gray-200" scope="col">Value</th>
                                        <th className="border-gray-200" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#39201</td>
                                        <td>06/15/2021</td>
                                        <td>Item name</td>
                                        <td>VFX075GF</td>
                                        <td>$29.99</td>
                                        <td> <Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></td>
                                    </tr>
                                    <tr>
                                        <td>#39201</td>
                                        <td>06/15/2021</td>
                                        <td>Item name</td>
                                        <td>VFX075GF</td>
                                        <td>$29.99</td>
                                        <td><Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></td>
                                    </tr>
                                    <tr>
                                        <td>#39201</td>
                                        <td>06/15/2021</td>
                                        <td>Item name</td>
                                        <td>VFX075GF</td>
                                        <td>$29.99</td>
                                        <td><Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></td>
                                    </tr>
                                    <tr>
                                        <td>#39201</td>
                                        <td>06/15/2021</td>
                                        <td>Item name</td>
                                        <td>VFX075GF</td>
                                        <td>$29.99</td>
                                        <td><Link to="/order-details"><span className="badge buttony-gold text-dark">Manage</span></Link></td>
                                    </tr>
                                </tbody>
                            </table> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default yourorder