
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
        <TextFieldExplained onChange={onEmailChange}  name="name" type="text" variant="two" label="Enter your email address" helperText="Remember me"/>
        </div>
        <div className="pass">
        <TextFieldExplained 
        icon={<img src="" alt="" className='icon'/>} 
        onChange={onPasswordChange} name="password" 
        type="password" variant="two" label="Enter password"/>
        <Link to={""} className="passli">Forgot password?</Link>
        </div>
        <div className='btn'>
    <button type='button' className='fil'>
    Sign In
    </button>
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20.95 31.95 35.4 17.5l-2.15-2.15-12.3 12.3L15 21.7l-2.15 2.15ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30ZM9 9v30V9Z"/></svg>
    <p className="dont">Don't have account?</p>
   <Link to="" >Create account</Link>
  </div>
    </form>

</div>
)
}
export default Components;
