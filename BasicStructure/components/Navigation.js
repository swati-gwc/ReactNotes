import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div style={{backgroundColor:"#87CEEB"}}>
           <p>Navigation bar</p>
           <NavLink to="/">First Page</NavLink>
           <br/>
          <NavLink to="/home">Home</NavLink>
          <br/>
          <NavLink to="/about">About</NavLink>
          
       </div>
    );
}
 
export default Navigation;