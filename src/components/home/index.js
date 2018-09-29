import React, { Component } from 'react';
import './style.css';
import {Link } from "react-router-dom";
import homepageImage from '../../images/husky.jpeg';
class Home extends Component{

    render(){
        return(
           <div id="home" className="container">
            
            <div>Take a picture of your animal</div>
            
            <img src={homepageImage}/>
            
            <Link to="/animal" style={{ textDecoration: 'none' }}><button className="linkButton">Scan the animal</button></Link>
      </div>
      )
    }
}

export default Home