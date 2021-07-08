import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Drawer from './components/Drawer';
import About from './components/About';
import FirstPage from './components/FirstPage';
import VideoPage from './components/VideoPage';
import NotesPage from './components/NotesPage';
import LiveSessionPage from './components/LiveSessionPage';
import FormPage from './components/FormPage';
import UploadVideo from './components/UploadVideo';
import TableDesign from './components/TableComponents/TableDesign';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <h1>First Page</h1> */}
       <BrowserRouter>
    
           
            <Switch>
            <Route path="/" component={FirstPage} exact/>
             <Route path="/drawer" component={Drawer} exact/>
             <Route path="/about" component={About}/>             
             <Route path="/livesession" component={LiveSessionPage}/> 
             <Route path="/videodisplay" component={VideoPage}/>   
             <Route path="/notes" component={NotesPage}/>      
             <Route path="/adminsettings" component={FormPage}/>   
             <Route path="/adminvideoupload" component={UploadVideo}/> 
             <Route path="/tabledesign" component={TableDesign}/>   
           </Switch>
       
      </BrowserRouter>
       </div>
   
  );
}

export default App;
