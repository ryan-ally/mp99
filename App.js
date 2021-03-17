/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';


import './colors.css';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch><br/>
           <hr/>
           <br/>
           <hr/>
           <footer className='social'>
            <p>_all_copy 2021</p>
            <a href="https://ryans-initial-project-c2ebf5.webflow.io/">SilkyJohnson155</a>
           </footer>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;