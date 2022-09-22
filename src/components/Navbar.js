import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('role')
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                {localStorage.getItem('role') ? <></> :
                    <Link className="navbar-brand" to="/">Portfolio App</Link>}


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {localStorage.getItem('role') === "admin" ? <>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                                <Link className="nav-link" to="/home">About me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactme">Contact Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recommendations">Recommendations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/edituser">Edit User Details</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/signout" onClick={handleLogOut}>Sign Out</Link>
                            </li>
                        </ul></>
                        : <>{localStorage.getItem('role') !== "admin" ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">About me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactme">Contact Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recommendations">Recommendations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Sign In</Link>
                            </li>
                        </ul> : <></>}</>}

                </div>
            </div>
        </nav >
    )
}

export default Navbar



