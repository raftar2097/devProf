import React, { Component } from 'react';
import {ReactComponent as NorthEastIcon} from "../Image/DevIcon/northEast.svg"
import "./StyleRepo.css"
import { useHistory } from "react-router-dom";
export default function Repo(props){
    let history = useHistory();
    return (
        <div className="repo">
                 <div className="repoName">
                    <span className="spanName">{props.repo.name}</span>
                    <a href={props.repo.html_url} style={{textDecoration:"none",color:"inherit"}}><NorthEastIcon className="repoImage" style={{fill:"#0768FA",opacity:"0.4"}}/></a>
                    <span style={{color:"#3F3D56",opacity:"0.4"}} className="updatedTime">{"Updated on " +new Date(props.repo.updated_at).toDateString()}</span>   
                 </div>
                 <br/>
                 <div className="repoDescription">
                    <span>{props.repo.desription}</span>
                 </div>
                 <hr style={{borderTopWidth:"2px",width:"90%",backgroundColor:"#D0CDE1"}}/>
        </div>
    )
}