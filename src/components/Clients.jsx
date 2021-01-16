import React, { Component } from 'react';

import Gojek from '../img/clients/gojek.png';
import Tokopedia from '../img/clients/tokopedia.png';
import Traveloka from '../img/clients/traveloka.png';
import Slider4 from '../img/slider/4.png';


class Clients extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, {});
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems, {});
    });
  }
  
  render() {
    return (
      <div class="parallax-container scrollspy" id="clients">
      <div class="parallax"><img src={Slider4}/></div>
      <div class="container clients">
        <h3 class="center light white-text">Our Clients</h3>
        <div class="row">
          <div class="col m4 s12 center">
            <img src={Gojek} alt="Gojek"/>
          </div>
          <div class="col m4 s12 center">
            <img src={Tokopedia} alt="Tokopedia"/>
          </div>
          <div class="col m4 s12 center">
            <img src={Traveloka} alt="Traveloka"/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Clients;