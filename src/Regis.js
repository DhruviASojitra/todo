import React from "react";
import { useState,useEffect } from "react";
import Axios from 'axios'
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { AirplaySharp } from "@material-ui/icons";


const Regis = ()=>
{
    // const { id } = useParams();
    // alert(id);
    const[define,setDefine]=useState(false);
    const url="http://localhost:3322/posts";
    
    const[userRegistration,setuserRegistration]=useState({
        name:"",
        address:"",
        age:"",
        email:"",
        contact:"",
        gender:"",
        hobby:"",
        state:""
        });
    const[records,setRecords]=useState([]);
    const [user, setUser] = useState([]);
    const [data,setData]=useState({});
    const [hobby,setHobby]=useState({
        dancing:false,
        reading:false,
        singing:false
    });

    useEffect(() =>{
        console.log("Dhruvi");
        loadUsers();
    },[]);
    // useEffect(async (id)=>{
    //     let result=await axios(`http://localhost:3322/posts${id}`);
    //     result=await result.json();
    //     setData(result);
    // })
    function submit(e)
    {
        let formData={...userRegistration}
        //e.preventDefault();
        let hobbyArr=[]
        if(hobby.dancing)
        {
            hobbyArr.push("dancing");
        }
        if(hobby.reading)
        {
            hobbyArr.push("reading");
        }
        if(hobby.singing)
        {
            hobbyArr.push("singing")
        }
        console.log(hobbyArr,"aaaaaaaaa");
       
        Axios.post(url,
            {
            name:formData.name,
            address:formData.address,
            age:formData.age,
            email:formData.email,
            contact:formData.contact,
            gender:formData.gender,
            hobby:hobbyArr,
             state:formData.state
           
            })
         }
        const loadUsers = async() =>{
        const result =  await axios.get("http://localhost:3322/posts");
        setUser(result.data);
        console.log(user,"Helooooooooooooooooooo");
        }

        const handleOnChange=(e)=>{
        let {value, name, checked} = e.target
        setHobby(pre=>({...pre,[name]:checked}))}
      console.log(hobby,"hellooo");

      function handleInput(e) {
       // let isChecked = e.target.checked;
        const{name,value,checked}=e.target;
        setuserRegistration({...userRegistration,[name]:value});
        //setuserRegistration(e.target.value);
        console.log(name,value)
      }
      
      
     const deleteUser = async id =>{
        
         await axios.delete(`http://localhost:3322/posts/${id}`);
         console.log(id);
         loadUsers();
        
      }


      const editUser = async id =>
      {
          //console.log(id,"helloooooooooo");
          //id.preventDefault();
        //  const item1={name,address,age,email,contact,gender,hobby,state}
       const result= await axios.get(`http://localhost:3322/posts/${id}`)
        //console.log(id);
        let formData={...result.data}
        setData(formData);
        setDefine(true);
        
        
        }
        console.log(data);
      
    return(
        <>
            <form action="" onSubmit={(e)=>submit(e)}>
                <div className="container">
                     <div className="header">
                        <h2>REGISTRATION FORM</h2>
                    </div>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={define ? data.name : userRegistration.name} onChange={handleInput}name="name" id="name" autoComplete="off"/>
                </div>  
                <div className="form-control">
                    <label htmlFor="address">Address:</label>
                    <input type="textarea" value={define ? data.address : userRegistration.address} 
                    onChange={handleInput}
                    name="address" id="address" autoComplete="off"/>
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age:</label>
                    <input type="text" value={define ? data.age : userRegistration.age}  onChange={handleInput}name="age" id="age" autoComplete="off"/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="text" value={define ? data.email : userRegistration.email} onChange={handleInput} name="email" id="email" autoComplete="off"/>
                </div>
                <div className="form-control">
                    <label htmlFor="contact">contact_No:</label>
                    <input type="text" value={define ? data.contact : userRegistration.contact} onChange={handleInput} name="contact" id="contact" autoComplete="off"/>
                </div>
               <div className="form-control">
                    <label>Gender:</label>
                    Male<input type="radio" name="gender"id="gender" 
                    value="male" onChange={handleInput} 
                    checked={userRegistration.gender==="male"}/>&nbsp;

                    Female<input type="radio" name="gender"id="gender"  
                    value="female" onChange={handleInput}
                    checked={userRegistration.gender==="female"}/>&nbsp;

                  
                </div>  
                <div className="form-control">
                    <label>Hobbies:</label>
                    <input type="checkbox" name="dancing" 
                    value={"dancing"}
                    checked={hobby.dancing}
                    onChange={(e)=>handleOnChange(e)}
                    /> Dancing&nbsp;

                    <input type="checkbox" name="reading"  
                    value={"reading"} 
                    checked={hobby.reading}
                    onChange={(e)=>handleOnChange(e)}/>Reading&nbsp;

                    <input type="checkbox" name="singing" 
                    value={"singing"}
                    checked={hobby.singing}
                    onChange={(e)=>handleOnChange(e)}/> Singing&nbsp;
                </div>  
                
                <div className="form-control">
                <label htmlFor="state">Select-State:</label>
                <select name="state" id="state" onChange={handleInput} value={define ? data.state : userRegistration.state}> 
                    <option value="">- - -</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Panjab">Panjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Goa">Goa</option>
                </select>
                </div>  
                
              <div className="form-control">
              <input type="submit" name="button"  value="Submit" id="btn"/>
              </div>
              </div>
            </form>   
            
            <div>
            
                <table border="1" className="list" id="stud">
                    <thead>
                         <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Gender</th>
                            <th>Hobbies</th>
                            <th>State</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>                
                    {
                    
                    user.map((item)=>{
                        
                         //console.log(item.name);   
                         return(
                                <tr>
                                    
                                <td>{item.name}</td>
                                
                                <td>{item.address}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.gender}</td>
                                <td>{item.hobby}</td>
                                <td>{item.state}</td>
                                <td><button onClick={()=>editUser(item.id)}>Edit</button>
                                
                                <button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                                </tr>
                         )
                      
                        
                    })
                    
                }
                </tbody>
                
                
                    </table>
                </div>
        </>
    )
}
export default Regis;
                
