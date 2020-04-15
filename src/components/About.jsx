import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import myPhoto from '../assets/img/about/about3.jpg'
import Fade from 'react-reveal/Fade';

const About = ({aboutTextContent}) => {
    return (
        <div className="App">
            <section id="about" className="about-area section-big">
                <Fade left>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="section-title">
                                    <h2>{aboutTextContent.h2}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="me-image">
                                    <img src={myPhoto} alt=""/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="about-me">
                                    <h3><span>{aboutTextContent.h3FirstPart}</span> {aboutTextContent.h3SecondPart}</h3>
                                    <p>{aboutTextContent.welcomeParagraph}</p>
                                    <p> {aboutTextContent.aboutMeFirstParagraph} </p>
                                    <p> {aboutTextContent.aboutMeSecondParagraph}</p>
                                    <a className="btn" href="#contact">{aboutTextContent.hireButton}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    );
}


export default About;
