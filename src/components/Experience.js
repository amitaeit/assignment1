import React from 'react'
import Project from './Project'

function Experience() {
    const projects = [
        {
            position: "Front End Developer",
            duration: "1 July 2019 - 20 June 2020",
            company: "Pictures Tech Solutions",
            desc: "Works as Front End Developer"
        },
        {
            position: "Technical Lead",
            duration: "21 June 2020 - 30 May 2021",
            company: "Globes Pvt Ltd",
            desc: "Works as Technical Lead"
        },
        {
            position: "Solution Architect",
            duration: "1 June 2021 - 30 Sep 2021",
            company: "Tech Sol Pvt Ltd",
            desc: "Works as Solution Architect"
        },
        {
            position: "Project Manager",
            duration: "1 Oct 2021 - Present",
            company: "AVVP Visions",
            desc: "Works as Project Manager"
        }
    ]
    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <img className='img-fluid mt-5' src='experience.jpg' alt="aboutme"></img>
            </div>
            <div className='col-md-8' style={{ textAlign: 'left' }}>
                <h1 className='text-center  mb-4'>Experience</h1>
                {projects.map((project, index) => {
                    return (
                        <Project project={project} key={index}></Project>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience;