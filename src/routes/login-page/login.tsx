
import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { TextFieldExplained } from "./index"
import { Link, useNavigate, useNavigation } from "react-router-dom";





const Components = () => {
    let email = "";
    let password = "";
    let [errorMessage, setErrorMessage] = useState([]);
    const goto = useNavigate();

    const authenticatingBackend = async (

        apiUrl: string,
        email: string,
        password: string,
    
    ) => {
        const response = await fetch(apiUrl, { 
            method: "post",
            headers: {
                "accept": "application/json",
                "content-Type": "application/json",
    
            },
            body: JSON.stringify({ email, password })
        });
        
        if (!response.ok) {
            errorMessage = (await response.json()).message;
            setErrorMessage(errorMessage);
            
            // return;
        }
        goto("/admin-dashboard");
    }

    const onSubmittingLoginForm: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        const endpoint = form.action;


        authenticatingBackend(
            endpoint,
            email,
            password
        );

    }





    return (
        <div className="create">
            <form
                action="https://web-production-3d1f.up.railway.app/api/auth/login"
                onSubmit={onSubmittingLoginForm}
                method="post"
                className="login-form">
                <h1 className="login">Sign In</h1>
                <div className="email">
                    <TextFieldExplained required onChange={(evt) => { email = evt.target.value }} name="name" type="email" variant="two" label="Enter your email address" helperText="" errorText="invalid email" />
                </div>
                <div className="pass">
                    <TextFieldExplained required onChange={(evt) => { password = evt.target.value }} name="password" type="password" variant="two" label="Enter password" errorText="password required" />
                    <Link to="/password" className="passli">Forgot password?</Link>
                </div>
                <div>

                    <label className="logcheck" >Remember me</label>
                    <input type="checkbox" id="logcheck" className="text" />
                </div>
                <div className='btn'>
                    {errorMessage.length && 
                    errorMessage.map((message, index)=>{
                        return <p key={`error-${index}`} className="error-message">{message}</p>
                    })
                    }
                    <button className='fil'>
                        <a href="/admin-dashboard"> SignIn</a>
                       
                    </button>
                    <div className="dontli">
                        <p>Don't have account?</p>
                        <Link className="createli" to="/signup" >Create account</Link>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Components;
