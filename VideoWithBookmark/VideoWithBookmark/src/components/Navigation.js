import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div >
           <p>Nav Bar</p>
           <NavLink to="/">First Page</NavLink>
           <br/>
          <NavLink to="/drawer">Drawer</NavLink>
          <br/>
          <NavLink to="/about">About</NavLink>
          <br/>
          <NavLink to="/videodisplay">Video Display Page</NavLink>
          <br/>
          <NavLink to="/notes">Notes Page</NavLink>
          <br/>
          <NavLink to="/livesession">Live Session Page</NavLink>
          <br/>
          <NavLink to="/adminsettings">Form Page</NavLink>
          <br/>
          <NavLink to="/adminvideoupload">Video Upload Page</NavLink>
          <br/>
          <NavLink to="/tabledesign">Table Design Page</NavLink>
          
       </div>
    );
}
 
export default Navigation;