import React,{useEffect, useState} from "react";
import Button from "./Button"

export default function Alert({type, message, delay=false}){
    const[showAlert, setShowAlert]=useState(true);
    const closeAlert = (e) =>{
        e.target.parentElement.parentElement.classList.add("fade-alert");

        setTimeout(()=>{setShowAlert(false)},1000)
    } 
    useEffect(()=>{
        delay && setTimeout(()=>{
            setShowAlert(false)
        },3000)
    })
    return (
       showAlert && <div className={`alert alert-${type}`}> <div className='alert-close'><span className="mr-1">{message}</span>
        <Button btnClass={"btn-close"} text={"x"} 
       onClick={closeAlert}></Button>
        </div></div>
      )
}