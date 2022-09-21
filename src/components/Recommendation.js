import React from 'react'

function Recommendation(props) {
    
    return (
        <div>
        <table className="table table-striped" style={{ border: "1px solid black" }}>
            <tbody>
                <tr>
                    <td>
                        <b>Recommendor Name</b>
                    </td>
                    <td>
                        {props.recommendation.name}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Working Title</b>
                    </td>
                    <td>
                        {props.recommendation.workingTitle}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Recommendation</b>
                    </td>
                    <td>
                        {props.recommendation.text}
                    </td>
                </tr>
            </tbody>


        </table>
        </div>
    )
}

export default Recommendation