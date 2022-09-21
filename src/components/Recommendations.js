import React from 'react'
import Recommendation from './Recommendation'

function Recommendations() {
    const recommendations = [
        {
            name: "Mr. Devendra Singh",
            workingTitle: "Front End Developer",
            text: "Amit has many outstanding qualities that make him a perfect candidate for this position.Amit has finished several projects in our organization"
        },
        {
            name: "Mr. Anil Kumar",
            workingTitle: "Technical Lead",
            text: "Amit is an exemplary employee and an outstanding role model for his peers"
        },
        {
            name: "Mr. Raghvendra Singh",
            workingTitle: "Solution Architect",
            text: "Amit acted as a technical resource person,a responsibility that required his constant assistance of end users in ICT related matters"
        },
        {
            name: "Mr. Rajesh Kumar",
            workingTitle: "Project Manager",
            text: "Amit was an apt leaner who adjusts quickly to his environment,he tackled his assignments with dedication, minimal supervision and pleasant"
        }
    ]

    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <img className='img-fluid mt-5' src='recommendation.jpg' alt="aboutme"></img>
            </div>
            <div className='col-md-8' style={{ textAlign: 'left' }}>
                <h1 className='text-center mb-4'>Recommendations</h1>
                {recommendations.map((recommendation, index) => {
                    return (
                        <Recommendation recommendation={recommendation} key={index}></Recommendation>
                    )
                })}
            </div>
        </div>
    )
}

export default Recommendations
