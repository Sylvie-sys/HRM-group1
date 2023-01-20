import { ChangeEventHandler, useState } from "react";
import "./style.css";

type Props = {
    name: string, 
    type?: "email" | "password" | "text" | "number" | "date", 
    variant?: "one" | "two" | "three", 
    label: string,
    helperText?: string,
    errorText?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}
export const TextFieldExplained = ({  name, type = "text", variant =  "one", label, helperText, onChange, errorText}: Props) => {
    const [inputValue, setInputValue] = useState("");
    const inputId = name;
    const emptyInput = inputValue !== "" ? "not-empty" : "";
    
    
    return <div className={`txt-field ${variant} ${emptyInput}`} >
        
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
        
    </div>
}