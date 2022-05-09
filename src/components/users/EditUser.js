import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom'

const EditUser = () => {
    const { id } = useParams();
    const [users, setUser] = useState({
        name: "",
        address: "",
        email: ""
    });
    const { name, address, email } = users;

    const onInputChange = e => {
        setUser({ ...users, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loaduser();
    }, []);
    const onUpdate = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:3322/posts/${id}`, users);
        alert("Data Updated");

    }
    const loaduser = async () => {
        const result = await axios.get(`http://localhost:3322/posts/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form>
                    <div className="form-group p-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group p-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Address"
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group p-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <button className="btn btn-warning btn-block" onClick={onUpdate}>Update</button>
                </form>
            </div>
        </div>
    )
}
export default EditUser;