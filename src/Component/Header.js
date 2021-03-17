import React from 'react';
import header from '../Image/DevIcon/header.png'
import "./StyleHeader.css"
function Header() {
        return(
            <div className="mainHeader">
                <span className="header">
                    The Developer <br/>Repository
                </span>
                <img src={header} className="image"/>
            </div>           
        )                 
}

export default Header;