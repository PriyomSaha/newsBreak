import React, { useState } from 'react'
import hamberger from '../logo/hamberger.png'
import NavBar from './NavBar'

function Hamberger() {
    const [open,setOpen] =  useState(false);
    return (
        <>
        <div className="hamHolder" onClick={()=>setOpen(!open)}>
            <img src={hamberger} style={{height:'4vh',width:'5vh'}} alt="menu" />          
        </div>
        <NavBar open={open}/>
        </>
    )
}

export default Hamberger
