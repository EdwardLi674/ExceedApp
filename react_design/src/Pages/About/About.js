import React from 'react'
import './About.css'
import '../../index.css'
import { Col, Container, Row } from 'react-bootstrap'
import VideoLogin from '../../assets/video/Jumping_in_the_swimming_pool.mp4'
import FirstImage from '../../assets/image/charbel-aoun-1IdM3Go0VSU-unsplash.jpeg'
import LastImage from '../../assets/image/cory-bjork-D1yT791Nf9A-unsplash.jpeg'
import ThirdImage from '../../assets/image/mar-cerdeira-bBF9e2UUh88-unsplash.jpeg'


const About = () => {

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
                    <source src={VideoLogin}></source>
                </video>
            </div>
            <div className='pt-5'>
                <Container className='position-relative'>
                    <h1 className='header-text'>About</h1>
                    <Row className="justify-content-md-center mt-5">
                        <Col lg="8">
                            <div className='first-row'>
                                <div className='maindiv-image'>
                                    <div className='image-div mb-4'>
                                        <img src={LastImage} alt="charbel aoun 1IdM3Go0VSU unsplash" />
                                    </div>
                                    <div className='image-div mb-4'>
                                        <img src={FirstImage} alt="cory bjork D1yT791Nf9A unsplash" />
                                    </div>
                                </div>
                                <div className='image-text'>
                                    <h1>Lorem Ipsum</h1>
                                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className=''>
                                <div className=''>
                                    <div className='side-blog'>
                                        <img src={ThirdImage} alt="mar cerdeira bBF9e2UUh88 unsplash" />
                                    </div>
                                </div>
                                <div className='side-text'>
                                    <h1>Lorem Ipsum</h1>
                                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default About