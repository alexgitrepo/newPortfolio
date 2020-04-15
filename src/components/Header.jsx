import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {Link} from "react-scroll";
import Typed from 'react-typed';
import englishFlag from'../assets/img/svg/uk.svg'
import russianFlag from'../assets/img/svg/russia.svg'



const Header = ({headerTextContent, changeLanguage}) => {

    return (
        <React.Fragment>
            <div className="header" id='home'>
                <div className="header__container">
                    <div className="mainmenu">
                        <ul className="navigation">
                            <LinkComponent to={"home"} item={headerTextContent.navigationLink1}/>
                            <LinkComponent to={"about"} item={headerTextContent.navigationLink2}/>
                            <LinkComponent to={"skills"} item={headerTextContent.navigationLink3}/>
                            <LinkComponent to={"work"} item={headerTextContent.navigationLink4}/>
                            <LinkComponent to={"contact"} item={headerTextContent.navigationLink5}/>
                        </ul>
                        {headerTextContent.languageActive ==='RU'? <button className="language" onClick={()=>{changeLanguage('EN')}}>
                            <img className="flag" src={englishFlag} alt=""/></button>:<button className="language" onClick={()=>{changeLanguage('RU')}}><img className="flag" src={russianFlag} alt=""/></button>}
                    </div>
                    <div className="typed">
                        <Typed className="typed relative"
                               startDelay={1000}
                               strings={[headerTextContent.typedFirstDisplay, headerTextContent.typedSecondDisplay]}
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
