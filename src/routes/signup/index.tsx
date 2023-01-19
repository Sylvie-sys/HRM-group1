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

    const createUser = async (evt: any) => {
        evt.preventDefault();

        const newUser: NewUser = {
            email: "test@email.com",
            password: "Abcd@1234",
            first_name: "Test",
            last_name: "User",
            phone_number: "2507883212342"
        };

        const user = await authRepository.register(newUser);
        console.log(user);
    }
    return (
        <div className="create">

            <div className="container">


                <form action="" onSubmit={createUser} className="signup-form">
                    <div className='header-text'>
                        <h3>Create Account</h3>
                    </div>
                    <div className="signup-txtfld">
                    <div className="singup-inputs-group">
                        <TextFieldExplained name="name" type="text" variant="two" label="FirstName" />
                        <TextFieldExplained name="name" type="text" variant="two" label="LaststName" />
                    </div>
                        <div className="email-pass">
                        <TextFieldExplained name="name" type="email" variant="two" label="Emails" />
                        <TextFieldExplained name="number" type="number" variant="two" label="Phone number" />
                        </div>
                    <div className="singup-inputs-groups">
                        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Password" />
                        <TextFieldExplained onChange={onPasswordChange} name="passcode" type="password" variant="two" label="Re-type Password" />
                    </div>
                    </div>
                    <button className='signup-btn'>Sign up</button>
                    <div className="end">
                        <h5>Already have an account?</h5>
                        <a href="">Sign in now</a>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Signup;