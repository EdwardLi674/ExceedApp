import React from 'react'
import './passreset.css'
import '../../index.css'
import { Container } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'
import { Link } from 'react-router-dom'

const passreset = () => {
    return (
        <div>
            <div className='video-term reveal fade-in active'>
                <video loop muted autoPlay className='headervideo'>
                    <source src={TermsconditionsVIdeo}></source>
                </video>
                {/* <Container>
                </Container> */}
            </div>
            <div className='position-relative'>
                <Container className='mt-5 pt-5'>
                    <h1 className='header-text'>Your Account</h1>

                    <div className='row'>
                        <div className="card mb-4">
                            <div className="card-header">Change Password</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="currentPassword">Current Password</label>
                                        <input className="form-control" id="currentPassword" type="password"
                                            placeholder="Enter current password" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="newPassword">New Password</label>
                                        <input className="form-control" id="newPassword" type="password"
                                            placeholder="Enter new password" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="confirmPassword">Confirm Password</label>
                                        <input className="form-control" id="confirmPassword" type="password"
                                            placeholder="Confirm new password" />
                                    </div>
                                    <button className="btn button-gold" type="button">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default passreset