import React from 'react'
import Skill from './Skill'

function Skills() {
    const skills = [
        {
            name:"Javascript",
            description:"JavaScript , often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
            experience:"2 years",
            proficiency:"High"
        },
        {
            name:"HTML",
            description:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser",
            experience:"3 years",
            proficiency:"Medium"
        },
        {
            name:"CSS",
            description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
            experience:"2.5 years",
            proficiency:"High"
        },
        {
            name:"Nodejs",
            description:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications",
            experience:"2 years",
            proficiency:"High"
        },
        {
            name:"React",
            description:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components",
            experience:"2 years",
            proficiency:"High"
        }
    ]
  return (
    <div className='row mt-5'>
            <div className='col-md-4'>
                <img className='img-fluid mt-5' src='skills.jpg'  alt="aboutme"></img>
            </div>
            <div className='col-md-8' style={{ textAlign: 'left' }}>
                <h1 className='text-center   mb-4'>Skills</h1>
                <div>
                    {skills.map((skill,index)=>{
                        return(
                            <Skill skill={skill} key={index}></Skill>
                        )
                    })}
                </div>
            </div>
        </div>
  )
}

export default Skills