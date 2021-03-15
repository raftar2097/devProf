
import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer'
import SearchBar from './Component/SearchBar';
import AddDeveloper from './Component/AddDeveloper';
import "./StyleHomePage.css"


class  HomePage extends Component{
  render(){
    return (
      <div>
        <Header/>
        <div className="upHead">
            Explore developer profiles
        </div>
        <hr style={{borderTopWidth:"2px",width:"90%",backgroundColor:"#D0CDE1"}}/>
        <SearchBar/>  
        <hr style={{borderTopWidth:"2px",width:"90%",backgroundColor:"#D0CDE1"}}/>
        <AddDeveloper/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
