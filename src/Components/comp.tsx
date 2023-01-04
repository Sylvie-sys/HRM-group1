import { ChangeEventHandler } from "react";
import "./comp.css"
import { TextFieldExplained } from "./text-field-explained";
import TextInp from "./text/text"
import { TextField } from "@mui/material";

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
    {/* <TextInp  type="text" name="fullNames" label="FullName*" helperText="SupportingText"/> <br />
    <span>SupportingText</span>
    <TextInp type="password" name="password" label="password*"/> <br />
    <span>SupportingText</span>
    <TextInp type="email" name="email" label="Email*"/>
    <span>SupportingText</span> */}
    
   

    <input name="" type="" />

    <form action="" onSubmit={loginAction}>
        <TextFieldExplained 
            onChange={onEmailChange} 
            name="Email" 
            type="email" 
            variant="one" 
            label="Email" 
            errorText="Invalid email" 
            helperText="Email should contain @ sign"
        />
        <TextFieldExplained onChange={onPasswordChange} name="age" type="password" variant="one" label="Password" helperText="Only numbers"/>
        <button>Login</button>
    </form>

</div>
)



}
export default Components;