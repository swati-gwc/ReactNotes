import React from 'react';
import Navigation from './Navigation';
 
const About = () => {
    return (
       <div >
            <Navigation />
          <h1>About us</h1>
          <p>About us page body content <br/> On this page Nav bar is shown which is due to Navigation component</p>
       </div>
    );
}
 
export default About;