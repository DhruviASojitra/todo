import axios from 'axios';
import React ,{useState} from "react";
//import {useHistory} from 'react-router-dom';
const AddUser = () =>{
   // let history=useMemo([]);
    const [user,setUser]=useState({
        name:"",
        address:"",
        email:""
        
    })
    const{name,address,email}=user;
    const onInputChange = e =>{
        
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3322/posts",user);
       // history.push("/");
    }
    return(
        <>
        <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Add A User</h2>
        {/* <form onSubmit={e=>onSubmit(e)}> */}
        <form>
       <div className="form-group">
           <input type="text"
           className='form-control form-control-lg'
           placeholder='Enter Your Name'
           name='name'
           value={name}
           onChange={e=>onInputChange(e)}/>
       </div>
       <div className="form-group">
           <input type="text"
           className='form-control form-control-lg'
           placeholder='Enter Your Address'
           name='address'
           value={address}onChange={e=>onInputChange(e)}/>
       </div>
       <div className="form-group">
           <input type="text"
           className='form-control form-control-lg'
           placeholder='Enter Your Email'
           name='email'
           value={email}onChange={e=>onInputChange(e)}/>
       </div>
       
       <button className='btn btn-primary btn-block' onClick={onSubmit}>Add User</button>
       </form>
       </div>
       </div>
       </>
        
    );
};
export default AddUser;