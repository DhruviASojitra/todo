import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";

import Contact from "./components/pages/Contact";
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
// import Regis from './Regis';
 function App() {
  return (
    <router>
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
                <Route path='/' element={<Home/>}/>
        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users/add' element={<AddUser />}/>
        <Route path='/users/edit/:id' element={<EditUser />}/>
        <Route element={<NotFound />}/>
       </Routes>
    </Router>
           {/* <Regis /> */}
           {/* <Navbar />
           <Home />
           <About />
           <Contact /> */}
               </div>
               </router>
  );
}
 export default App;
// function App() {

//     <div>
//     <h1>Helooooooooooooooooooo</h1>
//             <Regis /> 
//             </div>     
  
// }
// export default App;
// import React from 'react'
// import { BrowserRouter as Router,Route, Routes }
// from 'react-router-dom';
// import './App.css';
// import Create from './component/Create';
// import Edit from './component/Edit';
// import Home from './component/Home';
  
// function App() {
//   return (
//     <div className='App'>
  
//      <Router>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/create' element={<Create/>}/>
//         <Route path='/edit' element={<Edit/>}/>
//       </Routes>
//     </Router>
//   </div>
// );
  
// }
  
// export default App;


//import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
//import React,{useRef,useState} from 'react';HOC na Ex mate.
//import Hoc from './Hoc'

// function App() {
//   return (
//     <div className="App">
//    <Router>

//      <Link to="/">Home Page</Link>
//      <br />
//     <Link to="about">About Page</Link> 

//     <Routes>
//     <Route exact path="/" element={<Home />} />
//     <Route exact path="about" element={<About />} />
    
//     </Routes>
   
//     </Router> 
   
//     </div>
//   );
// }
// function Home()
// {
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <p>This is Home Page of website</p>
//         </div>
//     )
// }
// function About()
// {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <p>This is About Page of website</p>
//         </div>
//     )
// }
// export default App;

//data fatch API through
// class App extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.state={
//             users:null
//         }
//     }
//     componentDidMount()
//     {
//         fetch("https://reqres.in/api/users?per_page=20").then((resp)=>{
//             resp.json().then((result)=>{
//                 this.setState({users:result.data})

//             })
//         })
//     }
//     render()
//     {
//         return(
//             <div className="App">
//                 <h1>Fetch API Data</h1>
//                 {
//                     this.state.users ?
//                     this.state.users.map((item,i)=>
//                         <div><p>
//                             {i}---
//                             {item.first_name}
//                             {item.last_name}
//                             ---
//                             {item.email}
//                             </p>
//                         </div>
//                     ):null
                   
//                 }
//             </div>
//         )
//     }
// }
// export default App;


//inc****dec****
// import { useState, useEffect } from "react";
 
// const Counter = () => {
//   const [increment, setIncrement] = useState(0);
//   const [decrement, setDecrement] = useState(0);
 
//   useEffect(() => {
//     console.log("componentDidMount");
//   }, []);
 
//   useEffect(() => {
//     console.log("componentDidUpdate - increment");
//   }, [increment]);
 
//   useEffect(() => {
//     console.log("componentDidUpdate - decrement");
//   }, [decrement]);
 
//   return (
//     <>
//       <center><button onClick={() => setIncrement(increment + 1)}>Increment</button>
//       <h3>{increment}</h3>
//       <button onClick={() => setDecrement(decrement - 1)}>Decrement</button>
//       <h3>{decrement}</h3>
//       </center>
//     </>
//   );
// };
 
// export default Counter;


//***only object color change*****
// import { useState } from "react";
// import ReactDOM from "react-dom";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

// export default Car;

//example of useEffect************
// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return <h1>I've rendered {count} times!</h1>;
// }

// export default Timer


//example of useMemo*************
// import { useState, useMemo } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };
// export default App




//example of useRef****************
// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }
// export default App


// import React from 'react';

// class Parent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             data: null
//         }
//     }

//     handleCallback = (childData) =>{
//         this.setState({data: childData})
//     }

//     render(){
//         const {data} = this.state;
//         return(
//             <div>
//                 <Child parentCallback = {this.handleCallback}/>
//                 {data}
//             </div>
//         )
//     }
// }

// class Child extends React.Component{
  
//     onTrigger = (event) => {
//         this.props.parentCallback("Data from child");
//         event.preventDefault();
//     }

//     render(){
//         return(
//         <div>
//             <form onSubmit = {this.onTrigger}>
//                 <input type = "submit" value = "Submit"/>
//             </form>
//         </div>
//         )
//     }
// }

// export default Parent

// function App()
// {
//     return(
//         <div className="App">
//             <h1>HOC</h1>
//             <Counter />
//         </div>

//     );
// }
// function Counter()
// {
//         const [count,setCount]=useState(0)
//         return<div>
//             <h3>{count}</h3>
//             <button onClick={()=>setCount(count+1)}>Update</button>
//         </div>
// }
// export default App;