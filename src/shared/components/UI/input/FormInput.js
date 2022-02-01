import React from "react";
import cl from './FormInput.module.css';

export const FormInput = (props) => {
    return (
        <input className={cl.customInput} {...props} />
    )
}