import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import '../images/ardian.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" />
        <div className="container">
          <div className="col-8">
            <h2>Hello!</h2>
              <p>My name is Alice Golter and I am a 25 years old artist, musician, and entry level 
                developer living in Minneapolis, MN, USA. I graduated in 2019 from the University of St. Thomas
                in Saint Paul, MN with a Bachelor's Degree in Music, Magnum Cum Laude, and got my Certification
                as an Entry Level Full Stack Developer from the University of Minnesota in 2020. I currently live
                in Minneapolis with my partner and three pets: two cats Duchess and Muffin, and our dog Mabel.</p>
          </div>
          <div className="col-2">
            <img className="profile" src={require('../images/alice.jpg')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
