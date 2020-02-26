import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import myPhoto from './assets/img/about/about.jpg'
import workItem6 from "./assets/img/works/6.jpg"
import workItem5 from "./assets/img/works/5.jpg"
import workItem4 from "./assets/img/works/4.jpg"
import workItem3 from "./assets/img/works/3.jpg"
import workItem1 from "./assets/img/works/1.jpg"
import {Link} from "react-scroll";
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';


class App extends React.Component{
    componentDidMount() {
        $(window).on('scroll', function () {
            var menu_area = $('.mainmenu');
            if ($(window).scrollTop() > 200) {
                menu_area.addClass('sticky-menu');
            } else {
                menu_area.removeClass('sticky-menu');
            }
        }); // $(window).on('scroll' end

    }

    render(){ return (
        <div className="App">
            <div className="header" id='home'>
                <div className="header__container">
                    <div className="mainmenu">
                        <ul className="navigation">
                            <li className="header__navigation-item"><Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                hashSpy={true}
                                offset={-70}

                            >
                                Home</Link>
                            </li>
                            <li className="header__navigation-item"><Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                hashSpy={true}
                            >
                                About</Link>
                            </li>
                            <li className="header__navigation-item"><Link
                                activeClass="active"
                                to="service"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                hashSpy={true}


                            >
                                Services</Link>
                            </li>
                            <li className="header__navigation-item"><Link
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                hashSpy={true}

                            >
                                Work</Link>
                            </li>
                            <li className="header__navigation-item"><Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                hashSpy={true}

                            >
                                Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="typed">
                        <Typed className="typed relative"
                               startDelay={1000}
                               strings={['Frontend-developer','Shibaev Alexander']}
                               typeSpeed={80}
                               backSpeed={50}
                               loop
                        />
                    </div>
                </div>

            </div>

            <section id="about" className="about-area section-big">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2><span>About</span> Me</h2>
                                <p>The new common language will be more simple and regular than.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*About Image */}
                        <div className="col-md-6">
                            <div className="me-image">
                                <img src={myPhoto} alt=""/>
                            </div>
                        </div>

                        {/*About Text*/}
                        <div className="col-md-6">
                            <div className="about-me">
                                <h3><span>A Quick</span> Bio</h3>
                                <p>Web Bean has everything you need to get your new website up and running in no time!
                                    All
                                    of the templates and themes on Web Bean w3c valid error free code and easy to use.
                                    Web
                                    Bean has everything you'll need to get your new website up and running in no time!
                                    All
                                    of the new templates and themes on Web Bean w3c valid error free code and easy to
                                    use.
                                    Web Bean has everything you need to get your new website up and running in no time!
                                    Web
                                    Bean w3c valid error free code and easy to use. All of the templates and themes on
                                    Web
                                    Bean w3c valid error free code and easy to use. Web Bean w3c valid error free code
                                    and
                                    easy to use. All of the error free code and easy to use.</p>

                                <a className="btn" href="#contact">Hire Me Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About area ends */}


            {/*Service area starts */}
            <section id="service" className="service-area section-big">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2><span>What I</span> Do</h2>
                                <p>The new common language will be more simple and regular than.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="service-box">
                                <span>ХХХ</span>
                                <h3>Web Design</h3>
                                <p>The new common language will be more simple and regular than. It will be more
                                    Occidental
                                    in fact.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="service-box">
                                <span>ХХХ</span>
                                <h3>Graphic Design</h3>
                                <p>The new common language will be more simple and regular than. It will be more
                                    Occidental
                                    in fact.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="service-box">
                                <span>ХХХ</span>
                                <h3>App Development</h3>
                                <p>The new common language will be more simple and regular than. It will be more
                                    Occidental
                                    in fact.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="service-box">
                                <span>ХХХ</span>
                                <h3>24/7 Support</h3>
                                <p>The new common language will be more simple and regular than. It will be more
                                    Occidental
                                    in fact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Service area ends */}


            {/*Work area starts */}
            <section id="work" className="works section-big">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2><span>My</span> Works</h2>
                                <p>The new common language will be more simple and regular than.</p>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio">
                        <div className="row work-items">

                            {/*work item */}
                            <div className="col-md-4 col-sm-6 ">
                                <div className="item">
                                    <a href="assets/img/works/1.jpg" className="work-popup">
                                        <img src={workItem1} alt=""/>
                                        <div className="overlay">
                                            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                        </div>
                                        <div className="title">This is project Title</div>
                                    </a>
                                </div>
                            </div>

                            {/*work item */}
                            <div className="col-md-4 col-sm-6 ">
                                <div className="item">
                                    <a href="assets/img/works/1.jpg" className="work-popup">
                                        <img src={workItem1} alt=""/>
                                        <div className="overlay">
                                            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                        </div>
                                        <div className="title">This is project Title</div>
                                    </a>
                                </div>
                            </div>

                            {/*work item */}
                            <div className="col-md-4 col-sm-6 ">
                                <div className="item">
                                    <a href="assets/img/works/3.jpg" className="work-popup">
                                        <img src={workItem3} alt=""/>
                                        <div className="overlay">
                                            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                        </div>
                                        <div className="title">This is project Title</div>
                                    </a>
                                </div>
                            </div>

                            {/*work item */}
                            <div className="col-md-4 col-sm-6 ">
                                <div className="item">
                                    <a href="assets/img/works/4.jpg" className="work-popup">
                                        <img src={workItem4} alt=""/>
                                        <div className="overlay">
                                            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                        </div>
                                        <div className="title">This is project Title</div>
                                    </a>
                                </div>
                            </div>

                            {/*work item */}
                            <div className="col-md-4 col-sm-6 ">
                                <div className="item">
                                    <a href="assets/img/works/5.jpg" className="work-popup">
                                        <img src={workItem5} alt=""/>
                                        <div className="overlay">
                                            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                        </div>
                                        <div className="title">This is project Title</div>
                                    </a>
                                </div>
                            </div>

                            {/*work item */}
                            <div className="col-md-4 col-sm-6 ">
                                <div className="item">
                                    <a href="assets/img/works/6.jpg" className="work-popup">
                                        <img src={workItem6} alt=""/>
                                        <div className="overlay">
                                            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                        </div>
                                        <div className="title">This is project Title</div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/*Work area ends */}

            {/*Contact area starts */}
            <section id="contact" className="contact-area section-big">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2><span>Contact</span> Me</h2>
                                <p>The new common language will be more simple and regular than.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/*Contact form starts */}
                            <div className="contact-form">
                                <form id="ajax-contact" action="assets/mailer.php" method="post">
                                    <div className="form-group in_name">
                                        <input type="text" name="name" className="form-control" id="name"
                                               placeholder="Name"
                                               required="required"/>
                                    </div>
                                    <div className="form-group in_email">
                                        <input type="email" name="email" className="form-control" id="email"
                                               placeholder="Email" required="required"/>
                                    </div>
                                    <div className="form-group in_message">
                                    <textarea rows="5" name="message" className="form-control" id="message"
                                              placeholder="Message" required="required"></textarea>
                                    </div>
                                    <div className="actions">
                                        <input type="submit" value="Send Message" name="submit" id="submitButton"
                                               className="btn" title="Submit Your Message!"/>
                                    </div>
                                </form>

                                {/*Submition status */}
                                <div id="form-messages"></div>

                            </div>
                            {/*Contact form ends*/}
                        </div>

                    </div>

                </div>
            </section>
            {/*Contact area ends */}


            {/*Footer area starts*/}
            <footer className="footer-area">
                <div className="container">

                    <div className="address">
                        <div className="address-box clearfix">
                            <p>1502 N Elm St, Fairmont, MN, 56031, United States</p>
                        </div>
                        <div className="address-box clearfix">
                            <p><a href="tel:015110022">+00 123-456-789</a></p>
                        </div>
                        <div className="address-box clearfix">
                            <p><a href="mailto:email@yourdomain.com">email@yourdomain.com</a></p>
                        </div>
                        <div className="address-box clearfix">
                            <p><a href="http://www.yourdomain.com">www.yourdomain.com</a></p>
                        </div>
                    </div>

                    <ul className="social-ul">
                        <li><a href=""><span className="icon-facebook"></span></a></li>
                        <li><a href=""><span className="icon-twitter"></span></a></li>
                        <li><a href=""><span className="icon-googleplus"></span></a></li>
                        <li><a href=""><span className="icon-tumblr"></span></a></li>
                        <li><a href=""><span className="icon-linkedin"></span></a></li>
                    </ul>

                    <p className="copyright">&copy; 2017 Copyright web_bean</p>

                </div>
            </footer>
        </div>
    );}
}

export default App;
