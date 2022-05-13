import axios from 'axios';
import React ,{useState} from "react";
import { Link } from "react-router-dom";
//import {useHistory} from 'react-router-dom';
const AddData = () =>{
   // let history=useMemo([]);
    const [user,setUser]=useState({
        name:"",
        address:"",
        email:"",
        gender:""
    })
    const{name,address,email,gender}=user;
    const onInputChange = e =>{
        
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3322/posts",user);
        alert("Data Saved");
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
        <div className="form-group p-3">
        <h4><label>Select Your Gender:</label></h4>
         <h5> <input type="radio" value="Male" name="gender" onChange={e => onInputChange(e)} 
         /> Male
        <input type="radio" value="Female" name="gender" onChange={e => onInputChange(e)} 
        /> Female
        <input type="radio" value="Other" name="gender" onChange={e => onInputChange(e)}
        /> Other</h5>
        </div>
       <button className='btn btn-primary btn-block' onClick={onSubmit}>AddData</button>&nbsp;&nbsp;&nbsp;
       <Link className="btn btn-primary" to="/">Back To Home</Link>
       </form>
       </div>
       </div>
       </>
        
    );
};
export default AddData;