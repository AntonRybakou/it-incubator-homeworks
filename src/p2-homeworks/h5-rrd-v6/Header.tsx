import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={style.menu}>
            <div className={style.title}>Level</div>
            <div className={style.item}>
                <NavLink to={PATH.PRE_JUNIOR}>
                    <span>PreJunior</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.JUNIOR}>
                    <span>Junior</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.JUNIOR_PLUS}>
                    <span>Junior+</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Header
