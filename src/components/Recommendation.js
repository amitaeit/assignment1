import React from 'react'

function Recommendation(props) {
    
    return (
        <div>
        <table className="table table-striped" style={{ border: "1px solid black" }}>
            <tbody>
                <tr>
                    <td>
                        <b>Refree Name</b>
                    </td>
                    <td>
                        {props.recommendation.refreename}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Refree Job Title</b>
                    </td>
                    <td>
                        {props.recommendation.refreejobtitle}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Refree Company</b>
                    </td>
                    <td>
                        {props.recommendation.refreecompany}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Referral Date</b>
                    </td>
                    <td>
                        {props.recommendation.refrraldate}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Referral Text</b>
                    </td>
                    <td>
                        {props.recommendation.reffraltext}
                    </td>
                </tr>
            </tbody>


        </table>
        </div>
    )
}

export default Recommendation