import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import Fade from 'react-reveal/Fade';

const Work = ({workTextContent}) => {
    let workItems = workTextContent.workData.map(item =>
        <WorkItem img={item.img} projectTitle={item.projectTitle} projectDescription={item.projectDescription}
                  link={item.link} linkText={item.linkText}/>
    )
    return (
        <section id="work" className="works section-big">
            <Fade left>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2>{workTextContent.h2}</h2>
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
const WorkItem = ({img, projectTitle, projectDescription, link, linkText}) => {
    return (
        <div className="col-md-4 col-sm-6 ">
            <div className="projectItem" style={{backgroundImage: `url(${img})`}}>
                <a target="_blank" rel="noopener noreferrer" href={link} className="projectLink">
                    {linkText}
                </a>
                <div className="projectDescr">
                    <h3 className="projectTitle">{projectTitle}</h3>
                    <div className="projectDescrText">{projectDescription}</div>
                </div>
            </div>
        </div>)
}
export default Work;
