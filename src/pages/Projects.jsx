import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import '../images/alice.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Projects" />
        <div className="container">
          <div className="row">
          <div className="col-8">
            <h2>Scream Cast</h2>
              <p>Project Description</p>
              <p>
                <ul>
                  <li>A specialized movie database focusing on Halloween movies and ranking them either by Spookiness levels, or by whether or not they are ‘Halloween’ movies.</li>
                  <li>Role Played: Seeding data, researching movies, database construction/deployment.</li>
                  <li>Technologies Used: JavaScript, MySQL, HTML, CSS, NodeSQL, Prettier, ESLint, OMdB, IMdB, Github, Heroku</li>
                </ul>
              </p>
          </div>
          <div className="col-2">
            <img className="profile" src={require('../images/ScreamCast.JPG')}/>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <h2>Hobby Quest</h2>
              <p>Project Description</p>
              <p>
                <ul>
                  <li>A task manager application where different projects can be separated, broken down into individual parts, edited, and deleted as necessary.</li>
                  <li>Role Played: General scheduling, front-end CSS, bug testing, component debugging</li>
                  <li>Technologies Used: JavaScript, MySQL, HTML, CSS, React, Github, Heroku</li>
                </ul>
              </p>
          </div>
          <div className="col-2">
            <img className="profile" src={require('../images/HobbyQuest.png')}/>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <h2>Art Portfolio</h2>
              <p>Project Description</p>
              <p>
                <ul>
                  <li>A compilation of personal artwork with traditional and digital media.</li>
                  <li>Role Played: Sole creator, editor, contributor, and coder.</li>
                  <li>Technologies Used: React, CSS, HTML, JavaScript, Github, Heroku</li>
                </ul>
              </p>
          </div>
          <div className="col-2">
            <img className="profile" src={require('../images/ArtPortfolio.jpg')}/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Home
