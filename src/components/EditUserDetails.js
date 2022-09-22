import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function EditUserDetails() {
    const [user, setUser] = useState({
        userId: "",
        name: "",
        role: "",
        email: "",
        contactno: "",
        about: ""
    })

    useEffect(() => {
        async function fetchUser() {
            const response = await axios({
                url: "http://localhost:8080/api/user/getuser",
                method: "GET",
                params: {
                    userId: localStorage.getItem('userId')
                }
            })
            console.log(response);
            setUser(response.data.user);
        }
        fetchUser()

    }, [])

    const submit = async (e) => {
        e.preventDefault();
        // const firstName = document.querySelector('#exampleInputFirstName').value;
        // const lastName = document.querySelector('#exampleInputLastName').value;
        // const email = document.querySelector('#exampleInputEmail').value;
        // const password = document.querySelector('#exampleInputPassword').value;
        // var user = { firstName: firstName, lastName: lastName, email: email, password: password };
        // console.log(user);
        // const jsondata = JSON.stringify(user);
        // console.log(jsondata);

        // try {
        //     const response = await axios.post('http://localhost:8080/signup', jsondata, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     if (response.data.code === "1") {
        //         alert("User created successfully")
        //     }
        //     else if (response.data.code === "2") {
        //         alert(response.data.message)

        //     }
        // }
        // catch (error) {
        //     console.log(error);
        // }
    }



    return (
        <div className="container">
            <div className="card login-form mx-auto">
                <div className="card-body">
                    <h2 className='card-title text-center'>Edit User Details</h2>
                    <div className='card-text'>
                        <form onSubmit={submit}>
                            <div className="form-group" >
                                <label htmlFor="exampleInputuserId">UserId</label>
                                <input type="text" className="form-control" id="exampleInputuserId" aria-describedby="emailHelp" value={user.userId} required readonly />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="exampleInputuserId">Name</label>
                                <input type="text" className="form-control" id="exampleInputuserId" aria-describedby="emailHelp" value={user.name} required />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="exampleInputuserId">Role</label>
                                <input type="text" className="form-control" id="exampleInputuserId" aria-describedby="emailHelp" value={user.role} required />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="exampleInputuserId">Email</label>
                                <input type="text" className="form-control" id="exampleInputuserId" aria-describedby="emailHelp" value={user.email} required />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="exampleInputuserId">Contact No</label>
                                <input type="text" className="form-control" id="exampleInputuserId" aria-describedby="emailHelp" value={user.contactno} required />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="exampleInputuserId">Address</label>
                                <input type="text" className="form-control" id="exampleInputuserId" aria-describedby="emailHelp" value={user.address} required />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="exampleInputuserId">About Me</label>
                                <input type="textArea" className="form-control" id="exampleInputuserId" aria-describedby="emailHelp" value={user.about} required />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUserDetails