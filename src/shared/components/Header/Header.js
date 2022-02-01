import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Searchbar } from "../Searchbar/Searchbar";
import cl from './header.module.css'

export const Header = ({ search }) => {

    return (
        <header className={cl.header}>
            <Searchbar search={search} />
            <Navbar />
        </header>
    )
}