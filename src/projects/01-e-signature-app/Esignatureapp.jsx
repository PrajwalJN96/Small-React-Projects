import React,{useState} from 'react'
import Title from '../components/Title'

export default function Esignatureapp() {
  const inputStyle = {
    border:"none",
    borderBottom:"2px dotted",
    outline:"none",
    padding:".35rem 0"
  };

  const [name, setName] = useState("fijaui");
  const [date, setDate] = useState("");

  const handleNameChange = (e) =>{
    setName(e.target.value);
  }

  const handleDateChange = (e) =>{
    setDate(e.target.value);
  }

  document.body.style.background="#122454"

  return (
    <>
    <div className="container text-center">
      <Title classes="title" text={name}/>
      <Title classes="main-title mb-4" text={date || "DoB" }/>
      <p className ="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa officia expedita, omnis fugit dignissimos incidunt architecto tenetur iure eaque ullam obcaecati debitis voluptatum enim repudiandae, repellat autem placeat. Facilis?</p>
    </div> 

    <footer className='d-flex' style={{justifyContent:"space-around"}}>
      <input type="text" value={name} style={inputStyle} onChange={handleNameChange} />
      <input type="date" value={date} style={inputStyle} onChange={handleDateChange} />
    </footer>
    </>
  )
}
