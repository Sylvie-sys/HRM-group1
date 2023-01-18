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

     <div className={`text-field ${props.variant}`}>
         <label>{props.label}</label>
        <input type={props.type} placeholder={props.label} />
        
        <span>{props.helperText}</span>
     </div>

   

      );
    }


    




export default Input;