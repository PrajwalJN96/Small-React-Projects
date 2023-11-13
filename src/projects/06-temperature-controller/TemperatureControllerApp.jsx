import React, {useState} from 'react'
import Button from "../components/Button.jsx"

export default function TemperatureControllerApp() {
  const[temperature, setTemperature] = useState(0)

  const increaseTemperature = () =>{
    setTemperature(temperature+1)
  }
  const decreaseTemperature = () =>{
    setTemperature(temperature-1) 
  }
  let temp;
  if(temperature>0){
    temp=100-(temperature*5);
  }else{
    temp=200-(-temperature*5);
  }
  return (
    <div className='mt-3 text-center' >
      <div className="card bg-light m-auto" style={{width:200}}>
      <h1 className={`text-light card border-50 mx-autos centered-text `} style={{height:200, width:200, border:"3px solid #666", padding:"80px 0", 
      backgroundColor:`rgb(${(temperature > 0) ? 255 : 0},${temp},${temperature < 0 ? 255 : 0})`}}>{temperature}°C</h1>
      <div className="d-flex m-2">
        <Button text="-" btnClass={"btn-lg m-auto"} onClick={decreaseTemperature}/>
        <Button text="+" btnClass={"btn-lg m-auto"} onClick={increaseTemperature}/>
      </div>
      </div>
    </div>
  )  
}

