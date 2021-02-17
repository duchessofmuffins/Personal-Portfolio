import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </Router>
    );
  }
}

export default App;
