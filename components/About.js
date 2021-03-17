import React from 'react';
import hero from './up.jpeg';
import img from './yt.jpeg';
import logo from './tr.jpeg';

const About = () => {
    return (
       <div> 
          <h1>About US</h1><br/>
          <p>About US page body content</p><br/>
          <br/>
          <img src={hero} className='.App-up' alt='up'/><br/>
          <br/>
          <img src={img} className='.App-yt' alt='yt'/><br/>
          <br/>
          <img src={logo} className='.App-tr' alt='tr'/>



       </div>
    );
}
 
export default About;