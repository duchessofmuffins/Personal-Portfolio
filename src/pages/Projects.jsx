import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Projects" />
          <div className="container">
            <div className="row projects">
              <div className="row one">
                <div className="col-xs-2">
                    <h3>Project Name/Image</h3>
                </div>
                <div className="col-xs-2">
                    <h3>Github Link</h3>
                </div>
                <div className="col-xs-2">
                    <h3>Deployed Project</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default Projects