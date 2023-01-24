
import { ChangeEventHandler } from "react";
import {TextFieldExplained}   from "./index"
import { Link } from "react-router-dom";

const Components =() =>{
    let email = "";
    let password = "";

    const onEmailChange: ChangeEventHandler<HTMLInputElement> = (v) => {
        email = v.target.value;
        
    }
    const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (v) => {
        password = v.target.value;
        
    }

    const loginAction = (evt: any) => {
        evt.preventDefault();
        const cred = {email, password};
        // call the auth api
        console.log(cred);
        
    }

return (
<div className="create">
    <form action="" onSubmit={loginAction} className="login-form">
         <h1 className="login">Sign In</h1>
        <div className="email">
        <TextFieldExplained onChange={onEmailChange}  name="name" type="text" variant="two" label="Enter your email address" helperText=""/>
        </div>
        <div className="pass">
        <TextFieldExplained 
        onChange={onPasswordChange} name="password" 
        type="password" variant="two" label="Enter password"/>
        <Link to={""} className="passli">Forgot password?</Link>
        </div>
        <div>

            <label className="logcheck" >Remember me</label>
        <input type="checkbox" id="logcheck" className="text"/>
        </div>
        <div className='btn'>
    <button type='button' className='fil'>
    Sign In
    </button>
    <div className="dontli">
    <p>Don't have account?</p>
   <Link className="createli" to="" >Create account</Link>
   </div>
  </div>
    </form>

</div>
)
}
export default Components;
