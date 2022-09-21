import React,{Link} from 'react'

function Contactme(props) {
    console.log(props)
    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <img className='img-fluid mt-5' src='contactme.jpg' alt="contactme"></img>
            </div>
            <div className='col-md-8' style={{ textAlign: 'left' }}>
                <h1 className='text-center mb-4' >Contact Me</h1>
                <table className="table table-striped" style={{ border: "1px solid black" }}>
                    <tbody>
                        <tr>
                            <td>
                                <b>Name</b>
                            </td>
                            <td>
                                {props.contactDetail.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Address</b>
                            </td>
                            <td>
                                {props.contactDetail.address}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Phone</b>
                            </td>
                            <td>
                                {props.contactDetail.phone}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Email</b>
                            </td>
                            <td>
                                {props.contactDetail.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Resume</b>
                            </td>
                            <td>
                                <a href="http://localhost:3000/resume.pdf" target="_blank">Download Resume</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contactme