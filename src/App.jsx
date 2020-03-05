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


class App extends React.Component {
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
    render() {
        return (
            <div className="App">
                <Header/>
                <About/>
                <Skills/>
                <Work/>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default App;
