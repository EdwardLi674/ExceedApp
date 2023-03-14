import React from 'react'
import './userprofile.css'
import '../../index.css'
import { Container } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'
import { Link } from 'react-router-dom'

const userprofile = () => {

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
                        <Link to="/user-profile" className="nav-link ms-0 active">
                            Edit Profile
                        </Link>
                        <Link to="/your-order" className="nav-link  ">
                            Your Order
                        </Link>
                        <Link to="/save-item" className="nav-link">
                            Saved / Favorites
                        </Link>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="row">
                        {/* <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2"
                                    src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <button className="btn button-gold" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div> */}
                        <div className="col-xl-8">
                            <div className="card mb-4">
                                <div className="card-header">Account Details</div>
                                <div className="card-body">
                                    <form>
                                        {/* <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to
                                            other
                                            users on the site)</label>
                                        <input className="form-control" id="inputUsername" type="text"
                                            placeholder="Enter your username" />
                                    </div> */}
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                                <input className="form-control" id="inputFirstName" type="text"
                                                    placeholder="Enter your first name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                                <input className="form-control" id="inputLastName" type="text"
                                                    placeholder="Enter your last name" />
                                            </div>
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputOrgName">Company name</label>
                                                <input className="form-control" id="inputOrgName" type="text"
                                                    placeholder="Enter your organization name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                                <input className="form-control" id="inputPhone" type="tel"
                                                    placeholder="Enter your phone number" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                            <input className="form-control" id="inputEmailAddress" type="email"
                                                placeholder="Enter your email address" />
                                        </div>
                                        <button className="btn button-gold" type="button">Save changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card mb-4 mb-xl-0 p-4">
                                <Link to="/reset-pass">
                                    <button className='btn button-gold mb-5'>Reset Password</button>
                                </Link>

                                <div>
                                    Save Card<br />
                                    VISA ending 4567
                                    <br />
                                    <button className='btn button-gold mt-3'>Reset Password</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default userprofile