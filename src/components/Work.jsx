import React, {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import workitem5 from "../assets/img/works/5.jpg"
import workItem4 from "../assets/img/works/4.jpg"
import workItem3 from "../assets/img/works/3.jpg"
import workItem2 from "../assets/img/works/2.jpg"
import workItem1 from "../assets/img/works/1.jpg"
import Fade from 'react-reveal/Fade';

const Work = () => {
    let [state, editState] = useState([{
        img: workItem1,
        projectTitle: "Todolist",
        projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,TypeScript,react,redux,react-redux,redux-thunk, axios, e.t.c.</span>
            <h6>Used technologies for backend :</h6><span>NodeJS, Express, MongoDB,Mongoose, Heroku (Self made solution).</span>
        </React.Fragment>,
        link: 'https://alexgitrepo.github.io/todoListRefactor/'
    },
        {
            img: workItem2,
            projectTitle: "Social Network",
            projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,react,redux,react-redux, redux-thunk, axios, redux-form e.t.c.</span>
                <h6>Used technologies for backend :</h6><span>https://social-network.samuraijs.com/api/1.0.</span>
                <p><b>Notice: If you want to try all available opportunities - request login and password.</b></p>
            </React.Fragment>
            ,
            link: 'https://alexgitrepo.github.io/SocialNetwork/'
        },
        {
            img: workitem5,
            projectTitle: "Charity run",
            projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,react,redux,react-redux,redux-form e.t.c.</span>
            </React.Fragment>
            ,
            link: 'https://alexgitrepo.github.io/competition/'
        },
        {
            img: workItem3, projectTitle: "Portfolio",
            projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,react,redux,react-redux, axios, redux-form e.t.c.</span>
                <h6>Used technologies for backend :</h6><span> NodeJS, Express, nodemailer, Heroku (Self made solution, for e-mail sending).</span>
            </React.Fragment>,
            link: 'https://alexgitrepo.github.io/newPortfolio/'
        },
        {
            img: workItem4, projectTitle: "Counter",
            projectDescription: <React.Fragment><h6>Used technologies for frontend :</h6><span>HTML, CSS, Javascript,react,redux,react-redux e.t.c.</span>
            </React.Fragment>,
            link: 'https://alexgitrepo.github.io/counter/'
        }
    ])
    let workItems = state.map(item =>
        <WorkItem img={item.img} projectTitle={item.projectTitle} projectDescription={item.projectDescription}
                  link={item.link}/>
    )
    return (
        <section id="work" className="works section-big">
            <Fade left>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2>My Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row work-items">
                        {workItems}
                    </div>
                </div>
            </Fade>
        </section>
    )
}
const WorkItem = ({img, projectTitle, projectDescription, link}) => {
    return (
        <div className="col-md-4 col-sm-6 ">
            <div className="projectItem" style={{backgroundImage: `url(${img})`}}>
                <a target="_blank" rel="noopener noreferrer" href={link} className="projectLink">
                    Watch
                </a>
                <div className="projectDescr">
                    <h3 className="projectTitle">{projectTitle}</h3>
                    <div className="projectDescrText">{projectDescription}</div>
                </div>
            </div>
        </div>)
}
export default Work;
