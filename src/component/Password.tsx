import React, { ChangeEventHandler } from "react";
import { TextFieldExplained } from "../Components/login-page";
import "./Password.css"
const PasswordForm=() =>{
let password="";

const onPasswordChange:ChangeEventHandler<HTMLInputElement> = (v) =>{
  password = v.target.value;

}
const passwordAction =(evt:any)=>{
  evt.preventDefault();
  const cred ={password};
  console.log (cred)

}


    return(
        <div className="forget">
         <u>Forgot You Password</u>
         <p className="no">No worries,we'll send you reset instructions <br />  </p>
           <p className="thr"> through this email</p>
          
         {/* <input type="text" placeholder="new password" className="new"/> */}
         {/* <input type="re-text" placeholder="re-type password"/> */}
         <TextFieldExplained 
        onChange={onPasswordChange} name="password" 
        type="password" variant="two" label="New password"/>
         <TextFieldExplained 
        onChange={onPasswordChange} name="password" 
        type="password" variant="two" label=" Re-type password"/>

         <button className="confirm">confirm</button>
        </div>
    )
}
export default PasswordForm 