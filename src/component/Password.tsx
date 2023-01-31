import React, { ChangeEventHandler, FormEventHandler } from "react";
import { Link } from "react-router-dom";
import { TextFieldExplained } from "../Components/text-field-explained";
// import { TextFieldExplained } from "../Components/login-page";
import "./Password.css"


const authenticattingwithPassword= async(
   apiUrl: string,
   currentPassword: string,
   newPassword: string
)=>{
  const response = await fetch(apiUrl,{
    method:"patch",
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json",
  },
  body: JSON.stringify({currentPassword, newPassword})

  });
if (!response.ok){
const message= (await response.json()).message;
alert(message);
return;

}
alert("Password changed successfully")
}

const PasswordForm=() =>{
let currentPassword="";
let newPassword="";

const onsubmitPasswordForm: FormEventHandler<HTMLFormElement>=(event) =>{
  event.preventDefault();
  const form=event.target as HTMLFormElement;
  const endpoint= form.action;

  authenticattingwithPassword(
    endpoint,
    currentPassword,
    newPassword

  );



}

// const onCurrentPasswordChange:ChangeEventHandler<HTMLInputElement> = (v) =>{
//   currentPassword = v.target.value;

// }
// const onNewPasswordChange:ChangeEventHandler<HTMLInputElement> = (v) =>{
//   newPassword = v.target.value;

// }
// const passwordAction =(evt:any)=>{
//   evt.preventDefault();
//   const cred ={password};
//   console.log (cred)

// }


    return(
        <div className="forget">
         <u>Forgot You Password</u>
         <p className="no">No worries,we'll send you reset instructions <br />  </p>
           <p className="thr"> through this email</p>
          
         {/* <input type="text" placeholder="new password" className="new"/> */}
         {/* <input type="re-text" placeholder="re-type password"/> */}
        {/* <form 
        action="" 
        onSubmit={}
         > */}
        <div className="for-inputs">
         <TextFieldExplained 
        onChange={(event)=>{currentPassword=event.target.value}} name="currentPassword" 
        type="password" variant="two" label="New password" />
         <TextFieldExplained 
        onChange={(event)=>{newPassword=event.target.value}} name="newPassword" 
        type="password" variant="two" label=" Re-type password"/>
        </div>

         <button className="confirm">confirm</button>
        </div>
        // </form>
         
    )
}
export default PasswordForm 