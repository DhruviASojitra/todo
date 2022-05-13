import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, NavLink} from'react-router-dom'

const Home = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3322/posts");
        setUser(result.data);
    }
    const deleteUser = async id  =>{
        await axios.delete(`http://localhost:3322/posts/${id}`);
        loadUsers();
        //console.log("helooooooooooooooooooooooo");
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table" border shadow>
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td> 
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                       
                                        <Link className="btn btn-primary edit mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className='btn btn-danger' to="" onClick={() => deleteUser(user.id)}>Delete</Link>
                                                                              
                                    </td>
                                </tr>
                           ))
                       } 
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;