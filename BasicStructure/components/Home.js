import React from 'react';
import Navigation from './Navigation';
  
function Home (){
    return  <div style={{backgroundColor:"#40E0D0"}}>
        {/* <Navigation /> */}
        <h1>Home Page</h1>
        <p>Here we have not added navigation bar, this is done to show that how to present a whole new page in react where no code on App.js is shown on Home.js</p>
        </div>
}
  
export default Home;