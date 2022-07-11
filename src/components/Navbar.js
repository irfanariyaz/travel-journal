import React from "react"
import logo from "../images/logo.png"

export default function Navbar(){
    return(
        <div className="nav">
            <img  className ="nav-logo" src={logo} alt="logo" />
            <p className ="nav-title" >my travel journal.</p>
        </div>
    )}