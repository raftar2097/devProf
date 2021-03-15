import React, { Component } from 'react';
import {ReactComponent as NorthEastIcon} from "../Image/DevIcon/northEast.svg"
import "./StyleShorterUser.css"
import { useHistory } from "react-router-dom";
export default function ShortUser(props){
    let history = useHistory();
    return (
        <div className="userContainer">
                 <img src={props.user.avatar_url} className="avatar"/>
                 <span className="spanUser">{props.user.id}</span>
                 <NorthEastIcon className="iconAvatar" onClick={()=>history.push("/developers/"+props.user.id)} />
        </div>
    )
}