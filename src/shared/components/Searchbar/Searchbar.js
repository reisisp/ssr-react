import React from "react";
import { CustomInput } from "../UI/input/CustomInput";
import cl from './Searchbar.module.css'

export const Searchbar = ({ search }) => {
    return (
        <form className={cl.search}>
            <CustomInput
                onChange={(e) => search(e.target.value)}
                placeholder='Поиск...'
                type="text"
            />
        </form>
    )
}