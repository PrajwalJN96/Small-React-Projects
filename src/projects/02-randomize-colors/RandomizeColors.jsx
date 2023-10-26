import React from 'react';
import Title from "../components/Title.jsx";
export default function RandomizeColors() {
    function handleClick(e){
        // console.log("clcik");
        console.log(e.target);
    }

    const handlearrowClick = (event) =>{
        // console.log(event);
        // console.log(getRandomColor());
        let body =document.querySelector("body");
        body.style.background=getRandomColor();
        event.target.style.backgroundColor=getRandomColor();
        // document.querySelector(".btn-warning").style.backgroundColor=getRandomColor();
    }
    const getRandomColor = () =>{
        let letters = "0123456789ABCDEF";
        let color = "#";
        for( let i=0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)]
        } 
        return color;
    }
  return (
    <div className='container m-auto  text-center'>
        <Title text={"hi"} classes={"mb-4"}/>
        <button className='btn btn-danger' onClick={(event) => handleClick(event)}>Click me!</button>
        <button className='btn btn-success' onClick={(event) => handlearrowClick(event)}>Click me!</button>
        <button className='btn btn-primary' onClick={(event) => handlearrowClick(event)}>Click me!</button>
        <button className='btn btn-warning' onClick={handlearrowClick}>Click me!</button>
    </div>
  )
}
