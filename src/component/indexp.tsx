import { ChangeEventHandler, useState } from "react";
// import { Link } from "react-router-dom";

// import "./style.css";

type Props = {
    name: string, 
    type?: "email" | "password" | "text" | "number" | "date", 
    variant: "one" | "two" | "three", 
    label: string,
    helperText?: string,
    errorText?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    icon?: JSX.Element
}
export const TextFieldExplained = ({ name, type = "text",  variant =  "one", label, helperText, 

    icon,
    onChange, errorText
}: Props) => {
    const [inputValue, setInputValue] = useState("");
    const inputId = name;
    // const emptyInput = inputValue !== "" ? "not-empty" : "";
    let emptyInput;
    if(inputValue == ""){
        emptyInput = "";
    }else{
        emptyInput = "not-empty";
    }
    
    return <div className={`txt-field-signup ${variant} ${emptyInput}`} >
        
        <input id={inputId} name={name} type={type} onChange={v=>{
            setInputValue(v.target.value);
            if(onChange) {
                onChange(v);
            }
        }} />
        <label htmlFor={inputId}>{label}</label>
        {
        !helperText ?  null :
        <span className="helper-text">{helperText}</span>
        }
         {
        !errorText ?  null :
        <span className="error-text">{errorText}</span>
        }
        <>{icon}</>
        {/* <Link className="link" to="/signup">Sign up</Link> */}
        
    </div>
}