import { ChangeEventHandler } from "react";
import "./signup.css"
import { TextFieldExplained } from "../text-field-explained";

const Signup = () => {

    let email = "";
    let password = "";
    let number = "";
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
        const cred = { email, password, number };
        // call the auth api
        console.log(cred);

    }

    return (
        <div className="create">

            <div className="container">


                <form action="" onSubmit={loginAction} className="form">
                    <div className='header-text'>
                        <h3>Create Account</h3>
                    </div>
                    <div className="signup-txt-flds">
                    <div className="input-field1">
                        <TextFieldExplained name="name" type="text" variant="two" label="FirstName" />
                        <TextFieldExplained name="name" type="text" variant="two" label="LaststName" />
                    </div>
                    <div className="input-field2">
                        <TextFieldExplained name="name" type="email" variant="two" label="Emails" />
                    </div>
                    <div className="input-field3">
                        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Password" />
                        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Re-type Password" />
                    </div>
                    </div>
                    <button className='signup-btn'>SIGN UP</button>
                    <div className="end">
                        <h5 className="already">Already have an account?</h5>
                    <a href="#" className="signinlink"> Sign in now</a>
                    </div>
                </form>
            </div>
        </div>

    )



}
export default Signup;