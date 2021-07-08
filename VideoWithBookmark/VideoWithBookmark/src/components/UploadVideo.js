import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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
        <Typography variant="h6">Admin Upload Video Page</Typography>

      </Toolbar>
    </AppBar>
    <Toolbar />
    <br/>
    
   <div className="form">
       <div className="form-field">
        <label>
        Video Title        
        </label>
        <input type="texta" placeholder="Enter Video Title"/>
        </div>
        <div className="form-field">
        <label>
        Video URL       
        </label>
        <input type="url" placeholder="Enter Video URL"/>
        </div>
        <div className="form-field">
        <label>
         Date and Time of Session  
        </label>
        <TextField
            id="datetime-local"
        
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </div>
        <div className="form-field">
        <label>
        Type of Session  
        </label>
        <select >
        <option value="saab">Live Session</option>
        <option value="volvo">1-1 Session</option>
        
        
        </select>
        </div>
        <button type="submit" value="Save Changes">Save Changes</button>
        </div>
    
       </>
    );
}
 
export default LiveSessionPage;