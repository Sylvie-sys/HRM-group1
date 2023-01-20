import { ChangeEventHandler } from "react";
import "./signup.css"
import { TextFieldExplained } from "../../Components/text-field-explained";
import Authentication from "../../data/repository/authentication-impl";
const authRepository = new Authentication();
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
                    <div className="singup-inputs-group">
                        <TextFieldExplained name="name" type="text" variant="two" label="FirstName" />
                        <TextFieldExplained name="name" type="text" variant="two" label="LaststName" />
                    </div>
                        <TextFieldExplained name="name" type="email" variant="two" label="Emails" />
                    <div className="singup-inputs-group">
                        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Password" />
                        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Re-type Password" />
                    </div>
                    <button className='signup-btn'>SIGN UP</button>
                    <div className="end">
                        <h5>Already have an account?Sign in now</h5>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Signup;