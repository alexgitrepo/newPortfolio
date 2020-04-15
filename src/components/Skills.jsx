import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import Fade from 'react-reveal/Fade';

const Skills = ({skillsTextContent}) => {debugger
    let skills = skillsTextContent.skillsData.map(item => <SkillItem img={item.src} header={item.h} description={item.description}/>)
    return (
        <div className="App">
         <section id="skills" className="service-area section-big">
                <Fade right>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="section-title">
                                    <h2>{skillsTextContent.h2}</h2>
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
