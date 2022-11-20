import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
const ToDoList = (props) =>
{
    const [num , setNum] = useState(0);

    const incNum=() =>
    {
        setNum(num+1);

    };
    const decNum =()=>{
        if(num>0){

            setNum(num-1);
        }else
        {
            alert("sorry , Zero limit reached")
            setNum(0)
        }
    }
    
return (
    <>
    <div className="main_div">

        <div className="center_div"> 
        <h1> {num}</h1>
        <div className="btn_div">
        <button onClick={incNum}> <AddIcon/></button> 
        <button onClick={decNum}> Decr</button> 

        
        </div>
        </div>
    </div>

 </>
  
  )
    


}
export default ToDoList;