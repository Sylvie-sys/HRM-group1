import React, { FormEventHandler, useState } from "react";
import "./text.css"

type Props ={
name: string,
label : string,
type? : string,

onChange?: (evt: Event)=>void
variant?: string,
// variant1:string,
helperText?: string,
errorMessage?: string
}

const TextInp =({
    name, label, type = "text", variant = "outlined", onChange, helperText, errorMessage
}: Props) =>{
let [value, setValue] = useState("");

const _inputValueChanged: FormEventHandler<HTMLInputElement> = (evt) => {
    const input = evt.target as HTMLInputElement;
    setValue(input.value);

}

const tansform = value == "" ? "" : "transform";

return <div className={`text-field ${tansform} ${variant}`}>
<input onInput={_inputValueChanged} type={type} placeholder={label} />
<label>{label}</label>
<span>{helperText}</span>

<div className={`text-field1 ${tansform}`}>
<input onInput={_inputValueChanged} type={type} placeholder={label} />
<label>{label}</label>
<span>{helperText}</span>
</div>
</div>




    }


export default TextInp;