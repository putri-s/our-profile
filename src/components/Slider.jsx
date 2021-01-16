import React, { Component } from 'react';

import Slider1 from '../img/slider/1.png';
import Slider2 from '../img/slider/2.png';
import Slider3 from '../img/slider/3.png';

class Slider extends Component {
  componentDidMount() {
    const M=window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.slider');
      var instances = M.Slider.init(elems, {
        indicators: false,
        height: 500,
        transition: 600,
        interval: 3000,
      });
    });
  }

  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img src={Slider1}/>
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src={Slider2} />
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src={Slider3} />
            <div className="caption right-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
        </ul>
      </div>
    );
  };
}
export default Slider;