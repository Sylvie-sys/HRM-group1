
import { ChangeEventHandler } from "react";
import {TextFieldExplained}   from "./index"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Comps =() =>{
    let firstname = "";
    let secondname = "";
    let email = "";
    let password = "";

    const onEmailChange: ChangeEventHandler<HTMLInputElement> = (v) => {
        email = v.target.value;
        
    }
    const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (v) => {
        password = v.target.value;
        
    }
    // const onClick: this.props: any.first
    const signupAction = (evt: any) => {
        evt.preventDefault();
        const cred = {email, password};
        // call the auth api
        console.log(cred);
        
    }

return (
<div className="create">
    {/* <TextInp  type="text" name="fullNames" label="FullName*" helperText="SupportingText"/> <br />
    <span>SupportingText</span>
    <TextInp type="password" name="password" label="password*"/> <br />
    <span>SupportingText</span>
    <TextInp type="email" name="email" label="Email*"/>
    <span>SupportingText</span> */}
    


    <form action="" onSubmit={signupAction} className="s-form">
        <h1 className="signup">Create account</h1>
        <div className="names">
        <TextFieldExplained name="name" type="text" variant="one" label="First names"/>
        <TextFieldExplained name="name" type="text" variant="one" label="Last names"/>
        </div>
        <div className="email">
        <TextFieldExplained onChange={onEmailChange}  name="email" type="email" variant="two" label="Email" errorText="Invalid email" helperText="example@gmail.com"/>
        </div>
        <div className="set">
        <TextFieldExplained onChange={onPasswordChange} name="password" type="password" variant="two" label="Password"/>
        </div>
        <div className="confirm">
        <TextFieldExplained onChange={onPasswordChange} name="password" type="password" variant="two" label="Re-type password"/>
        </div>
        <button type="submit" className='out'>
    Signup
    </button>
   {/* <p>Do you have account?<link to='/loginn'>LogIn<link/></p> */}
    </form>
     {/* <Link to="/login" >Login</Link>  */}
    <Button/>
</div>
)



}
export default Comps;