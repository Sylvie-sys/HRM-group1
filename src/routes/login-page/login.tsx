
import { ChangeEventHandler, FormEventHandler } from "react";
import {TextFieldExplained}   from "./index"
import { Link } from "react-router-dom";


const authenticateWithTheBackend =async(
    apiUrl: string,
    email: String,
    password: string
) =>{
    const response= await fetch(encodeURI(apiUrl), {
      method: "post",
      headers:{
        "accept": "application/json",
        "Content-Type" : "application/json",
      } ,
      body: JSON.stringify({email, password})
    });
    
   if(!response.ok){
    const message=(await response.json()).message;
    alert(message);
    return;
   }
   alert("saved successifully")
}
const Components =() =>{
    let emailHolder = "";
    let passwordHolder = "";
const onSubmitLoginForm: FormEventHandler<HTMLInputElement> = (evt) =>{
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const endpoint = form.action;

    authenticateWithTheBackend(
        endpoint,
        emailHolder,
        passwordHolder
    );
    
}

  
    const loginAction = (evt: any) => {
        evt.preventDefault();
       
    }

return (
<div className="create">
    <form 
    id=""
    action="https://web-production-3d1f.up.railway.app/api/auth/login" 
    method="post"
    onSubmit={loginAction} 
    className="login-form">
         <h1 className="login">Sign In</h1>
        <div  className="email">
        <TextFieldExplained onChange={(evt)=>{emailHolder=evt.target.value;}}  name="name" type="email" variant="two" label="Enter your email address" errorText="invalid Email"/>
        </div>
        <div className="pass">
        <TextFieldExplained onChange={(evt)=>{passwordHolder=evt.target.value;}} name="password"  type="password" variant="two" label="Enter password" helperText="" errorText="your password is poor"/>
        
        </div>
        <div>

            <label className="logcheck" >Remember me</label>
        <input type="checkbox" id="logcheck" className="text"/>
        <Link to={""} className="passli">Forgot password?</Link>
        </div>
        <div className='btn'>
    <button type='submit' className='fil'>
    Sign In
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
