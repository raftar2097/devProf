import React from 'react';
import './StyleAddDeveloper.css'
import { useHistory } from "react-router-dom";
function AddDeveloper() {
        let history = useHistory();
        return(
            <div className="container">
                <div style={{width:"100%"}}>
                    Could not find what you were looking for?
                </div>
                <button className="button" onClick={()=>{history.push("/signup")}}>Add developer info</button>
            </div>           
        )                 
}

export default AddDeveloper;