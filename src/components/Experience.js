import React from 'react'
import Project from './Project'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Experience() {
    const [jobs, setJob] = useState([])

    
      useEffect(() => {
        async function fetchUser() {
          const response = await axios({
            url: "http://localhost:8080/api/user/getjobs",
            method: "GET",
            params: {
              userId: localStorage.getItem('userId')
            }
          })
          setJob(response.data.jobs);
        }
        fetchUser()
    
      },[])

    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <img className='img-fluid mt-5' src='experience.jpg' alt="aboutme"></img>
            </div>
            <div className='col-md-8' style={{ textAlign: 'left' }}>
                <h1 className='text-center  mb-4'>Job Experience</h1>
                {jobs.map((project, index) => {
                    return (
                        <Project project={project} key={index}></Project>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience;