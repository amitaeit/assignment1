import React from 'react'
import Recommendation from './Recommendation'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Recommendations() {
    const [recommendation, setRecommendation] = useState([])

    
      useEffect(() => {
        async function fetchUser() {
          const response = await axios({
            url: "http://localhost:8080/api/user/getrecommendations",
            method: "GET",
            params: {
              userId: localStorage.getItem('userId')
            }
          })
          setRecommendation(response.data.recommendations);
        }
        fetchUser()
    
      },[])

    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <img className='img-fluid mt-5' src='recommendation.jpg' alt="aboutme"></img>
            </div>
            <div className='col-md-8' style={{ textAlign: 'left' }}>
                <h1 className='text-center mb-4'>Recommendations</h1>
                {recommendation.map((recommendation, index) => {
                    return (
                        <Recommendation recommendation={recommendation} key={index}></Recommendation>
                    )
                })}
            </div>
        </div>
    )
}

export default Recommendations
