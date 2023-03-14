import React from 'react'
import './contactus.css'
import '../../index.css'
import { Container, Row } from 'react-bootstrap'
import TermsconditionsVIdeo from '../../assets/video/Man_walking_to_his_villa.mp4'

const contactus = () => {
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
                    <source src={TermsconditionsVIdeo}></source>
                </video>
            </div>
            <div className='position-relative'>
                <Container>
                    <h1 className='header-text'>Contact Us</h1>
                    <Row className="justify-content-md-center mt-5">
                        <div className="container">
                            <div className="innerwrap">
                                <section className="section2 clearfix">
                                    <div className="col2 column2 first">
                                        <div className="sec2contactform">
                                            <h3 className="sec2frmtitle">Want to Know More? Drop Us a Mail</h3>
                                            <form action="">
                                                <div className="clearfix">
                                                    <input className="col2 first" type="text" placeholder="FirstName" />
                                                    <input className="col2 last" type="text" placeholder="LastName" />
                                                </div>
                                                <div className="clearfix">
                                                    <input className="col2 first" type="Email" placeholder="Email" />
                                                    <input className="col2 last" type="text" placeholder="Contact Number" />
                                                </div>
                                                <div className="clearfix">
                                                    <textarea name="textarea" id="" cols="30" rows="1" placeholder='Your message here...'></textarea>
                                                </div>
                                                <div className="clearfix"><input type="submit" value="Send" /></div>
                                            </form>
                                        </div>

                                    </div>
                                    <div className="col2 column1 last">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.851724339624!2d-0.09675138476511905!3d51.4975884192424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a097011091%3A0xc1b8da219324a789!2s4%20Brockham%20St%2C%20London%20SE1%204HX%2C%20UK!5e0!3m2!1sen!2sus!4v1652538382383!5m2!1sen!2sus" width="600" height="390" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                                        <div className="sec2innercont">
                                            <div className="sec2addr">
                                                <p><span className="collig">Address :</span> 4 Brockham St, London SE1 4HX, UK</p>
                                                <p><span className="collig">Phone :</span> +00 000 000 0000</p>
                                                <p><span className="collig">Email :</span> test@gmail.com</p>
                                                <p><span className="collig">Fax :</span> +00 000 000 0000</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default contactus