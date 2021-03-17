import React,{Component}from 'react';
import {ReactComponent as SearchIcon} from "../Image/DevIcon/search.svg"
import "./StyleSearchBar.css"
import axios from 'axios';
import ShorterUser from "./ShorterUser"
class  SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            users:[],
            searchUser:[],
            search:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
   
    componentDidMount(){
      axios.get('/api/developers')
      .then(res=>{
        console.log(res.data);
        this.setState(prevState =>({...prevState,users:res.data,searchUser:res.data}))
      })
    };

    onSubmit(){
        const data = this.state.users.filter(user=>user.id.toLowerCase().includes(this.state.search.toLowerCase()));
        console.log(data);
        this.setState(prevState=>({
            ...prevState,
            searchUser:data
        }));
    }
    handleChange(event){
        const value = event.target.value;
        this.setState(prevState=>({
            ...prevState,
            search:value
        }))
    };

    render(){
        return (
            <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                <div className="containerone">
                    <div className="innerContainer">
                        <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search for username" className="input"></input>
                        <SearchIcon  className="searchIcon" onClick={this.onSubmit}/>
                    </div>
                </div>
                <div className="user">
                    {this.state.searchUser.map(user =>
                        <ShorterUser user={user}/>)
                    }
                </div>
            </div> 
        );
    }
}

export default SearchBar;