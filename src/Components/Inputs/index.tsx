import React from "react";
import "./index.css"
import { FormEventHandler,useState } from "react";

type Props = {
    
    type: "text" | "email" | "password" | "number",
    variant: "outlined" | "filled",
    label: "textfield",
    helperText : "supporting text",
    errorMessage : "text",
    onChange: (evt: Event)=>void

    
}
const Input =(props: Props) =>{
   
return(
    <form id="form-1">
    <div>
        <button className="right-button"> Upload photo</button>
        <button className="left-button"> Edit</button>
    </div>
    <div className="inputs">
        <div className="inputs1">
            <input type="text" placeholder="Employee name" />
            <input type="text" placeholder="Employee ID" /> 
        </div>
            <div className="inputs2">
                <input type="email" placeholder="Employee Email" />
                <input type="text" placeholder="Employee phone number" /> 
            </div>
            <div className="inputs3">
                <input type="text" placeholder="Employee education level" />
                <input type="text" placeholder="Sex" /> 
            </div>
            <div className="inputs3">
                    <input type="text" placeholder="Employee Skills" />
                    <input type="text" placeholder="Address" /> 
            </div>
            </div>
                    <button className="uploadbutton"> Upload Document</button>
                    <button className="last-button">save changes</button> 
    </form>
)


   

      );
    }


    




export default Input;