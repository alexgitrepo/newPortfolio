import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import telegram from "../../src/assets/img/svg/telegram.55a6e905.svg"
import linkedIn from "../../src/assets/img/svg/linkedin.2e070ff9.svg"
import viber from "../../src/assets/img/svg/viber.209ef270.svg"
import gitHub from "../../src/assets/img/svg/githubcontact.f3b8ed41.svg"


const Footer = ({footerTextContent}) => {
    return <footer className="footer-area">
        <div className="container">
            <div className="address">
                <div className="address-box clearfix">
                    <p>{footerTextContent.address}</p>
                </div>
                <div className="address-box clearfix">
                    <p><a href="mailto:alex.dev4web@gmail.com">alex.dev4web@gmail.com</a></p>
                </div>
            </div>
            <ul className="social-ul">
                <li><a target="_blank"  rel="noopener noreferrer" href="tg://resolve?domain=AlexandrDev"><img src={telegram} alt="telegram"/></a></li>
                <li><a target="_blank"  rel="noopener noreferrer" href=""><img src={linkedIn} alt="linkedIn"/></a></li>
                <li><a target="_blank"  rel="noopener noreferrer" href="viber://add?number=79026325664"><img src={viber} alt="viber"/></a></li>
                <li><a target="_blank"  rel="noopener noreferrer" href="https://github.com/alexgitrepo"><img src={gitHub} alt="gitHub"/></a></li>

            </ul>
            <p className="copyright">&copy; {footerTextContent.copyright}</p>

        </div>
    </footer>
}
export default Footer;
