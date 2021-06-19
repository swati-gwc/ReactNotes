import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FirstPage from './components/FirstPage';

import './App.css';

function App() {
  return (
    <div className="App"  style={{backgroundColor:"#FFA07A"}}>
     {/* <h1>First Page</h1> */}
       <BrowserRouter>
    
           
            <Switch>
            <Route path="/" component={FirstPage} exact/>
             <Route path="/home" component={Home} exact/>
             <Route path="/about" component={About}/>             
           
           </Switch>
       
      </BrowserRouter>
       </div>
   
  );
}

export default App;
