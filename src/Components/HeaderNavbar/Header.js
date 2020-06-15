import React from 'react'
import Hamberger from './Hamberger';
//import { Link } from 'react-router-dom'

import logo from '../logo/logo.png';

function Header() {
    return (
        <>
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <Hamberger />
            </div>
        </>
    )
}

export default Header
