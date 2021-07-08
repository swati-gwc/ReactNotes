import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './FormPageStyle.css';

const useStyles = makeStyles({
    
    abRoot: {
      backgroundColor: "#9a0036",
    
    },
  });
const LiveSessionPage = () => {
    const classes = useStyles();
    return (
       <>
          
        
    <AppBar position="fixed" className={classes.abRoot}>
      <Toolbar>
        <Typography variant="h6">Admin Setting Page</Typography>

      </Toolbar>
    </AppBar>
    <Toolbar />
    <br/>
    
   <div className="form">
       <div className="form-field">
        <label>
        Admin Email          
        </label>
        <input type="texta" placeholder="Enter Admin Username"/>
        </div>
        <div className="form-field">
        <label>
        Admin Password         
        </label>
        <input type="password" placeholder="Enter Admin Password"/>
        </div>
        <div className="form-field">
        <label>
        Confirm Password         
        </label>
        <input type="password" placeholder="Re-enter Password"/>
        </div>
        <button type="submit" value="Save Changes">Save Changes</button>
        </div>
    
       </>
    );
}
 
export default LiveSessionPage;