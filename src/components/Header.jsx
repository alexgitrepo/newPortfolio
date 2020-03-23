import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {Link} from "react-scroll";
import Typed from 'react-typed';


const Header = () => {

    return (
        <React.Fragment>
            <div className="header" id='home'>
                <div className="header__container">
                    <div className="mainmenu">
                        <ul className="navigation">
                            <LinkComponent to={"home"} item={'Home'}/>
                            <LinkComponent to={"about"} item={'About'}/>
                            <LinkComponent to={"skills"} item={'Skills'}/>
                            <LinkComponent to={"work"} item={'My Projects'}/>
                            <LinkComponent to={"contact"} item={'Contact'}/>
                        </ul>
                    </div>
                    <div className="typed">
                        <Typed className="typed relative"
                               startDelay={1000}
                               strings={['Frontend-developer.', 'Shibaev Alexander.']}
                               typeSpeed={80}
                               backSpeed={50}
                               loop
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}
const LinkComponent = ({to, item}) => {
    return <li className="header__navigation-item"><Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        hashSpy={true}
        offset={-70}

    >
        {item}</Link>
    </li>
}
export default Header;
