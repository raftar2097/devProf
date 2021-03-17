
import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer'
import SearchBar from './Component/SearchBar';
import AddDeveloper from './Component/AddDeveloper';
import "./StyleHomePage.css"


class  HomePage extends Component{
  render(){
    return (
      <div style={{width:"100%",display:"flex",flexWrap:"wrap"}}>
        <Header/>
        <div className="upHead">
            <span>Explore developer profiles</span>
        </div>
        <hr style={{borderTopWidth:"0px",width:"90%",backgroundColor:"#e5e7eb"}}/>
        <SearchBar/>  
        <hr style={{borderTopWidth:"0px",width:"90%",backgroundColor:"#e5e7eb"}}/>
        <AddDeveloper/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
