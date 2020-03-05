import React from 'react'
import style from './FormsControl.module.css'
import {Field} from "redux-form";
import {required} from "../../validators/validators";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <textarea {...input} {...props}  />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <input {...input} {...props}  />
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const createField = (validationArray, component, name, type, placeholder, someInnerText = "") => {
    return <div>
        <Field validate={[...validationArray]} component={component} name={name} type={type}
               placeholder={placeholder}/>{someInnerText}
    </div>
}

createField([required], Input, "email", "input")

