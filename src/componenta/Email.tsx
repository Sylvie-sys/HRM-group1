import React from "react";
import './Email.css'

const EmailForm=() =>{
    return(
        <div className="Email">
         <h1>Forgot Your Password</h1>
         <p className="no">No worries,we'll send you reset instructions <br />  </p>
           <p className="thr"> through this email</p>
          
         <input type="text" placeholder="Admin@gmail.com" className="new"/>
         <button className="confirm">confirm</button>
        </div>
    )
}
export default EmailForm 