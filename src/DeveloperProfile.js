import React from 'react';
import axios from  'axios';
import Footer from "../src/Component/Footer"
import {Link} from "react-router-dom"
import "./StyleDeveloperProfile.css"
import GithubIcon from "./Image/Profile Icons/GithubIcon.png"
import LinkedinIcon from "./Image/Profile Icons/LinkedinIcon.png"
import CodeChefIcon from "./Image/Profile Icons/CodeChefIcon.png"
import MediumIcon from "./Image/Profile Icons/MediumIcon.png"
import TwitterIcon from "./Image/Profile Icons/TwitterIcon.png"
import HackerankIcon from "./Image/Profile Icons/HackerankIcon.png"
import {ReactComponent as EmailIcon} from "./Image/Profile Icons/Email.svg"
import Repo from "./Component/Repo.js"

class DeveloperProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {developer:{}};
    }

    componentDidMount() {
        axios.get(`/api/developers/${this.props.match.params.developerId}`)
        .then(response => {
            console.log(response);
            this.setState({developer: response.data.user});
        })
    }

    render() {
        const repos = this.state.developer.repos
        const developer = this.state.developer;
        console.log(repos);
        return (
            <div>
                <div className="headerDev">
                    <p>The Developer Profile</p>
                    <Link to="/" style={{color:"inherit",textDecoration:"inherit"}}><p>All Developers</p></Link>
                </div>
                <div className="userSection">
                    <img src={developer.avatar_url} className="imgProDev"/>
                    <p>
                        <span className="h1Dev">{developer.name}</span>
                        {developer.bio?<div> <br/>
                        <br/>
                        <span className="h2Dev">{developer.bio}</span>
                        <br/>
                        <br/></div>:<br/>}
                       
                        <div className="linkDev">
                            <a href={"https://github.com/"+developer.github_id} style={{color:"inherit",textDecoration:"inherit"}}><img src={GithubIcon} className="imgDev"/></a>
                            <a href={"https://www.hackerrank.com/"+developer.hackerrank} style={{color:"inherit",textDecoration:"inherit"}}><img src={HackerankIcon} className="imgDev"/></a>
                            <a href={"https://www.codechef.com/users/"+developer.codechef} style={{color:"inherit",textDecoration:"inherit"}}><img src={CodeChefIcon} className="imgDev"/></a>
                            <a href={"https://www.linkedin.com/in/"+developer.linkedin} style={{color:"inherit",textDecoration:"inherit"}}><img src={LinkedinIcon} className="imgDev"/></a>
                            <a href={"https://medium.com/@"+developer.medium} style={{color:"inherit",textDecoration:"inherit"}}><img src={MediumIcon} className="imgDev"/></a>
                            <a href={"https://twitter.com/"+developer.twitter} style={{color:"inherit",textDecoration:"inherit"}}><img src={TwitterIcon} className="imgDev"/></a>
                        </div>
                        <br/>
                    </p>
                </div>
                <p className="pRepo">Github Repositories</p>
                <hr style={{borderTopWidth:"2px",width:"90%",backgroundColor:"#D0CDE1"}}/>
                <div>
                    {repos?repos.map(item => <Repo repo={item}/>):null}  
                </div>
                <Footer/>
            </div>
            
        );
    }
}

export default DeveloperProfile;