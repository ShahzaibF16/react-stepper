import React, { useState } from "react";
import { Button } from '@mui/material'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase";

function Form1(props){

    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

    const submit = async () =>{
        if(email==""|| password==""){
            alert("Enter Email & Pass")
        }
        else{
            // props.handlechg()
            try {
                let user = await createUserWithEmailAndPassword(auth,email,password)
                console.log(user.user.uid)
            } catch (err) {
                alert(err)
            }
        }
    }

    return(
        <div style={{margin:"auto",width:"600px"}}>
            <h1>Form 1</h1>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
             name="" id="" placeholder="Enter Email"/> <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
            name="" id="" placeholder="Enter Pass"/> <br />
            <button onClick={()=>submit()}>Next</button>
        </div>
        
    )
}

export default Form1