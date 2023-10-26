import React from 'react'
import Alert from '../components/Alert'

export default function AlertsApp() {
  return (
    <div className="container mx-auto">
    <Alert type={"success"} message={"Successful Login"}/>
    <Alert type={"info"} message={"Time Triggered"} delay={true}/>
    </div>
    
  )
} 
