import { ChangeEventHandler } from "react";
import "./comp.css"
import { TextFieldExplained } from "./text-field-explained";
import TextInp from "./text/text"

const Components =() =>{

    let email = "";
    let password = "";
    let number ="";
    const onEmailChange: ChangeEventHandler<HTMLInputElement> = (v) => {
        email = v.target.value;
        
    }
    const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (v) => {
        password = v.target.value;
        
    }
    const onNumberChange: ChangeEventHandler<HTMLInputElement> = (v) => {
        password = v.target.value;
        
    }

    const loginAction = (evt: any) => {
        evt.preventDefault();
        const cred = {email, password, number};
        // call the auth api
        console.log(cred);
        
    }

return (
<div className="create">
<div className='header-text'>
            <h3>Create Account</h3>

    <form action="" onSubmit={loginAction} className="form">
        <div className="input-field">
        <TextFieldExplained  name="name" type="text" variant="two" label="FirstName" />
        <TextFieldExplained  name="name" type="text" variant="two" label="LaststName" /> 
        </div>
    <div className="input-field">
    <TextFieldExplained  name="name" type="text" variant="two" label="New Username" /> 

    <TextFieldExplained onChange={onEmailChange} name="Email" type="email" variant="two" label="Email" errorText="Invalid email" helperText="Email should contain @ sign"/>

    </div>
        <div className="input-field">
        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Password" helperText="characters contain @,!,? and capital letters"/>
        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Re-type Password" helperText="confirm Password"/>
  
        </div>
        <button className='signup-btn'>SIGN UP</button>
    </form>
</div>
</div>
)



}
export default Components;