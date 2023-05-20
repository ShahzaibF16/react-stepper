import React from "react";
import { Button } from '@mui/material'

function Form4(props){
    return(
        <div style={{margin:"auto",width:"600px"}}>
            <h1>Form 4</h1>
            <input type="text" name="" id="" placeholder="Enter Name"/>
            <input type="email" name="" id="" placeholder="Enter Email"/>
            <input type="password" name="" id="" placeholder="Enter Pass"/>
            <br />
            <button onClick={()=>props.handlechg()}>Next</button>
        </div>
        
    )
}

export default Form4