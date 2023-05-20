import React from "react";
import { Button } from '@mui/material'

function Form2(props){
    return(
        <div style={{margin:"auto",width:"600px"}}>
            <h1>Form 2</h1>
            <input type="email" name="" id="" placeholder="Enter Email"/>
            <input type="password" name="" id="" placeholder="Enter Pass"/>
            <button onClick={()=>props.handlechg()}>Next</button>
            <button onClick={()=>props.handlechgBack()}>Back</button>
        </div>
        
    )
}

export default Form2