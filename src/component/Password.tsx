import React from "react";
import "./Password.css"


const PasswordForm=() =>{
    return(
        <div className="cover">
         <h1>Forgot You Password</h1>
         <p className="no">No worries,we'll send you reset instructions <br />  </p>
           <p className="thr"> through this email</p>
          
         <input type="text" placeholder="new password" className="new"/>
         <input type="re-text" placeholder="re-type password"/>

         <button className="confirm">confirm</button>
        </div>
    )
}
export default PasswordForm 