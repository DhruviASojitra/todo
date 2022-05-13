import React, { useState } from "react";

const TodoList = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const [toggleBtn,setToggleBtn]=useState(true);
    const [editData,setEditData]=useState(null);
    const ItemEvent = (e) => {
        setInputList(e.target.value);
    }
    const listOfItems = () => {
        if (!inputList) {
            alert("please fill the data");
        }else if(inputList && !toggleBtn)
        {
            setItems(items.map((ele)=>{
                if(ele.id === editData)
                {
                    return{...ele,name:inputList}
                }
                return ele;
            }))
            setToggleBtn(true);
            setInputList("");
            setEditData(null);
        }
        else {
            const allData={id:new Date().getTime().toString(),name:inputList}
            setItems([...items, allData])
            setInputList("")
        };
    }
    const deleteItems = (index) => {
        //console.log("deleted......")

        const oldItem=items.filter((ele) => {
                return index !== ele.id;
            })
            setItems(oldItem);
    }
    const editItems = (id)=>
    {
        let newItem=items.find((ele)=>{
            return ele.id===id;
        })
        console.log(newItem)
        setToggleBtn(false);
        setInputList(newItem.name);
        setEditData(id);
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add A Items" onChange={ItemEvent} value={inputList} />
                    {
                        toggleBtn ? <button onClick={listOfItems}>+</button> :          <button onClick={listOfItems}>Update</button>
                    }
                    
                    <div className="showItems">
                        {
                            items.map((ele) => {
                                return (
                                    <>

                                        <div className="eachItem" key={ele.id}>
                                            <h5>{ele.name}
                                            <button  onClick={()=>editItems(ele.id)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button  onClick={()=>deleteItems(ele.id)}>Delete</button></h5>
                                        </div>

                                    </>
                                )
                            })
                        }



                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoList;