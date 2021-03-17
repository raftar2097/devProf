import React from 'react';
import GithubIcon from "../Image/Profile Icons/GithubIcon.png"
import LinkedinIcon from "../Image/Profile Icons/LinkedinIcon.png"
import CodeChefIcon from "../Image/Profile Icons/CodeChefIcon.png"
import MediumIcon from "../Image/Profile Icons/MediumIcon.png"
import TwitterIcon from "../Image/Profile Icons/TwitterIcon.png"
import HackerankIcon from "../Image/Profile Icons/HackerankIcon.png"
import "./StyleSignUp.css";
import Footer from "./Footer";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import axios from "axios"

function SignUp(){
    const [form,setForm] = React.useState({github:"",medium:"",linkedin:"",codechef:"",hackerrank:"",twitter:"",message:""});
    
    const handleChange = event=>{
        const {name,value} = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]:value,
            message:""  
        }));
    }

    const submit = ()=>{
        if(form.github){
            axios.post('/api/developers',{
            github_id:form.github,
            medium:form.medium,
            linkedin:form.linkedin,
            codechef:form.codechef,
            hackerrank:form.hackerrank,
            twitter:form.twitter
            })
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(error=>{
                setForm(prevState=>({
                    ...prevState,
                    message:error.message
                }));
            })
        }        
    }
    let history = useHistory();
    return(
        <div >
        <Header/>
        <div className="mainSignUp">
            <div className="innerSignUp">
                <div className="headerSignUp">
                    Add Developer Profile
                </div>
                <hr style={{height:"1px",width:"100%",backgroundColor:"#D0CDE1",border:"none"}}/>
                <div className="sectionSignUp">
                    <div className="innersectionSignUp">
                        <img src={GithubIcon} className="imageSignUp"/>
                        <span className="spanSignUp">Github*</span>
                    </div>
                    <input type="text" name="github" value={form.github} onChange={handleChange} className="inputSignUp"></input>
                    {form.message?<h6 style={{color:"red"}}>Enter valid github id</h6>:null}
                </div>
                <div className="sectionSignUp">
                    <div className="innersectionSignUp">
                        <img src={LinkedinIcon} className="imageSignUp" />
                        <span className="spanSignUp">Linkedin</span>
                    </div>
                    <input className="inputSignUp" name="linkedin" value={form.linkedin} onChange={handleChange}></input>
                </div>
                <div className="sectionSignUp">
                    <div className="innersectionSignUp">
                        <img src={CodeChefIcon} className="imageSignUp"/>
                        <span className="spanSignUp">CodeChef</span>
                    </div>
                    <input className="inputSignUp" name="codechef" value={form.codechef} onChange={handleChange}></input>
                </div>
                <div className="sectionSignUp">
                    <div className="innersectionSignUp">
                        <img src={MediumIcon} className="imageSignUp"/>
                        <span className="spanSignUp">Medium</span>
                    </div>
                    <input className="inputSignUp" name="medium" value={form.medium} onChange={handleChange}></input>
                </div>
                <div className="sectionSignUp">
                    <div className="innersectionSignUp">
                        <img src={TwitterIcon} className="imageSignUp"/>
                        <span className="spanSignUp">Twitter</span>
                    </div>
                    <input className="inputSignUp" name="twitter" value={form.twitter} onChange={handleChange}></input>
                </div>
                <div className="sectionSignUp">
                    <div className="innersectionSignUp">
                        <img src={HackerankIcon} className="imageSignUp"/>
                        <span className="spanSignUp">Hackerrank</span>
                    </div>
                    <input className="inputSignUp" name="hackerrank" value={form.hackerrank} onChange={handleChange}></input>
                </div>
                <hr style={{height:"1px",width:"100%",backgroundColor:"#D0CDE1",border:"none"}}/>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"flex-end",width:"100%",padding:"50px 0px"}}>
                    <div style={{width:"60%"}}></div>
                    <button className="cancelButton" onClick={()=>history.push("/")}>Cancel</button>
                    <button className="signUpButton" onClick={submit} >Submit</button>
                </div>
            </div>
        </div>
        <Footer style={{opacity:"0"}}/>
    </div>           
    )                 
        
}

export default SignUp;