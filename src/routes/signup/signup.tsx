import { ChangeEventHandler, FormEventHandler } from "react";
import "./signup.css"
import { TextFieldExplained } from "../../Components/text-field-explained";
import Authentication from "../../data/repository/authentication-impl";
import { Link } from "react-router-dom";

const authenticateWithBackend=()=>{
// email:string,


}
const authRepository = new Authentication();
const Signup = () => {

    let email= "";
    let password= "";
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
    const onSubmitLoginForm: FormEventHandler<HTMLFormElement> =(evt) =>{
          evt.preventDefault();
//1.get data from the form
const form =evt.target as HTMLFormElement;
const emailElt =form.querySelector("input[name=email]");
const passwordElt =form.querySelector("input[name=password]");
// emailValue=emailElt.Value;
// passwordValue=passwordElt.Value;

// console.log(emailValue);
// console.log(passwordValue)

    }

    // const createUser = async (evt: any) => {
    //     evt.preventDefault();

    //     const newUser: NewUser = {
    //         email: "test@email.com",
    //         password: "Abcd@1234",
    //         first_name: "Test",
    //         last_name: "User",
    //         phone_number: "2507883212342"
    //     };

    //     const user = await authRepository.register(newUser);
    //     console.log(user);
    // }






    return (
        <div className="create">

            <div className="container">


                <form action="" className="signup-form">
                    <div className='header-text'>
                        <h3>Create Account</h3>
                    </div>
                    <div className="signup-txtfld">
                    <div className="singup-inputs-group">
                        <TextFieldExplained name="name" type="text" variant="two" label="FirstName" />
                        <TextFieldExplained name="name" type="text" variant="two" label="LaststName" />
                    </div>
                        <div className="email-pass">
                        <TextFieldExplained onChange={onEmailChange} name="name" type="email" variant="two" label="Emails" errorText="Invalid Email"/>
                        <TextFieldExplained onChange={onNumberChange} name="number" type="number" variant="two" label="Phone number" errorText="Invalid number"/>
                        </div>
                    <div className="singup-inputs-groups">
                        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Password" errorText="Strong Password"/>
                        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Re-type Password" errorText="Confirm Password"/>
                    </div>
                    </div>
                    <button className='signup-btn'>Sign Up</button>
                    <div className="end">
                        <h5>Already have an account?</h5>
                        <a href="/login">Sign in now
                        {/* <Link to="/calling">Sign in now</Link> */}
                        </a>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Signup;