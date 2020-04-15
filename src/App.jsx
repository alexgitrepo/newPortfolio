import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import $ from 'jquery';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import {connect} from "react-redux";
import {changeLanguage} from "./redux/commonReduser";

class App extends React.Component {
    componentDidMount() {
        $(window).on('scroll', function () {
            var menu_area = $('.mainmenu');
            if ($(window).scrollTop() > 200) {
                menu_area.addClass('sticky-menu');
            } else {
                menu_area.removeClass('sticky-menu');
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Header changeLanguage={this.props.changeLanguage} headerTextContent={this.props.headerTextContent}/>
                <About aboutTextContent={this.props.aboutTextContent}/>
                <Skills skillsTextContent={this.props.skillsTextContent}/>
                <Work workTextContent={this.props.workTextContent}/>
                <Contacts contactTextContent={this.props.contactTextContent}/>
                <Footer footerTextContent={this.props.footerTextContent}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        headerTextContent: state.common.textContent.header,
        aboutTextContent: state.common.textContent.about,
        skillsTextContent: state.common.textContent.skills,
        workTextContent: state.common.textContent.work,
        contactTextContent: state.common.textContent.contact,
        footerTextContent: state.common.textContent.footer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (language) => {
            return dispatch(changeLanguage(language))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
