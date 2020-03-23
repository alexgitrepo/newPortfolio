import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import myPhoto from '../assets/img/about/about3.jpg'
import Fade from 'react-reveal/Fade';

const About=()=> {
        return (
            <div className="App">
                <section id="about" className="about-area section-big">
                    <Fade left>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="section-title">
                                        <h2>About Me</h2>
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
                                        <h3><span>A Quick</span> Info</h3>
                                        <p>Welcome to my portfolio site.</p>
                                        <p> My name is Alexander Shibaev, i am a frontend developer (with some knowledge of backend development).
                                            Here you can find some examples of my projects, which are based on the use
                                            of the "React" library </p>
                                           <p> My main goal for now -  is to progress and level up my skills in web development and make some benefit to my employer.  So if  you liked my projects, and you think that we can be useful to each other , contact me.</p>
                                        <a className="btn" href="#contact">Hire Me Now</a>
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
