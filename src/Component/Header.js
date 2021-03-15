import React from 'react';
import header from '../Image/DevIcon/header.png'
import "./StyleHeader.css"
function Header() {
        return(
            <div className="mainHeader">
                <h1 className="header">
                    The Developer <br/>Repository
                </h1>
                <img src={header} className="image"/>
            </div>           
        )                 
}

export default Header;