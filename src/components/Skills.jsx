import React, {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import Fade from 'react-reveal/Fade';
import axiosImg from "../assets/img/svg/axios.5b4197e9.svg"
import cssImg from "../assets/img/svg/css.0af690f7.svg"
import githubImg from "../assets/img/svg/github.144406db.svg"
import htmlImg from "../assets/img/svg/html.db258945.svg"
import javaScriptImg from "../assets/img/svg/javascript.6f32e301.svg"
import reactImg from "../assets/img/svg/reactIcon.633579c4.svg"
import reduxImg from "../assets/img/svg/redux.17af9974.svg"
import typeScriptImg from "../assets/img/svg/typescript.a6e0504b.svg"

const Skills = () => {
    let [state, editState] = useState([{
        h: "HTML",
        src: htmlImg,
        description: "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. "
    },
        {
            h: "CSS",
            src: cssImg,
            description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML."
        },
        {
            h: "JavaScript",
            src: javaScriptImg,
            description: "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages,"
        },
        {
            h: "React",
            src: reactImg,
            description: "React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time."
        },
        {
            h: "Redux",
            src: reduxImg,
            description: "A library which holds and updates the entire state of the app in the simplest manner possible while also using the least amount of boilerplate code."
        },
        {
            h: "TypeScript",
            src: typeScriptImg,
            description: "TypeScript is an open-source programming language. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language."
        },
        {
            h: "Axios",
            src: axiosImg,
            description: "Axios is a very popular JavaScript library you can use to perform HTTP requests, that works in both Browser and Node. js platforms."
        },
        {
            h: "GitHub",
            src: githubImg,
            description: "GitHub is a Git repository hosting service, but it adds many of its own features."
        },
    ])
    let skills = state.map(item => <SkillItem img={item.src} header={item.h} description={item.description}/>)
    return (
        <div className="App">
         <section id="skills" className="service-area section-big">
                <Fade right>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="section-title">
                                    <h2>Skills</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {skills}
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    );
}

const SkillItem = ({img, header, description}) => {
    return <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="service-box">
            <span><img src={img}/></span>
            <h3>{header}</h3>
            <p>{description}</p>
        </div>
    </div>
}

export default Skills;
