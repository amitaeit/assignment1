import React from 'react'

function Aboutme(props) {
    return (

        <div className='row mt-5'>
            <div className='col-md-4'>
                <img className='img-fluid mt-5' src='pic.jpg' alt="aboutme"></img>
            </div>
            <div className='col-md-8' style={{ textAlign: 'left' }}>
                <h1 className='text-center mb-4' >About Me</h1>
                <table className="table table-striped" style={{ border: "1px solid black" }}>
                    <tbody>
                        <tr>
                            <td>
                                <b>Name</b>
                            </td>
                            <td>
                                {props.person.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>About Me</b>
                            </td>
                            <td>
                                {props.person.about}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Skills</b>
                            </td>
                            <td>
                                {props.person.skills}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Experience</b>
                            </td>
                            <td>
                                {props.person.experience}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Aboutme