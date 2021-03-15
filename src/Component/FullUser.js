
import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer'

class  FullUser extends Component{

  render(){
    return (
      <div>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
            <h3>The Developer Profile</h3>
            <h3>All Developers</h3>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default FullUser;
