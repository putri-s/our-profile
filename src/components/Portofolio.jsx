import React, { Component } from 'react';

import Porto1 from '../img/portfolio/1.png';
import Porto2 from '../img/portfolio/2.png';
import Porto3 from '../img/portfolio/3.png';
import Porto4 from '../img/portfolio/4.png';
import Porto5 from '../img/portfolio/5.png';
import Porto6 from '../img/portfolio/6.png';

class Portofolio extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems, {});
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems, {});
    });
  }
  
  render() {
    return (
      <section id="portofolio" class="portofolio scrollspy bg-color4">
      <div class="container">
        <h3 class="light center white-text text-darken">Portofolio</h3>
        <div class="row">
          <div class="col m3 s12">
            <img src={Porto1} class="responsive-img materialboxed"/>
          </div>
          <div class="col m3 s12">
            <img src={Porto2} class="responsive-img materialboxed"/>
          </div>
          <div class="col m3 s12">
            <img src={Porto3} class="responsive-img materialboxed"/>
          </div>
          <div class="col m3 s12">
            <img src={Porto4} class="responsive-img materialboxed"/>
          </div>
        </div>
        <div class="row">
          <div class="col m3 s12">
            <img src={Porto5} class="responsive-img materialboxed"/>
          </div>
          <div class="col m3 s12">
            <img src={Porto6} class="responsive-img materialboxed"/>
          </div>
          <div class="col m3 s12">
            <img src={Porto1} class="responsive-img materialboxed"/>
          </div>
          <div class="col m3 s12">
            <img src={Porto2} class="responsive-img materialboxed"/>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Portofolio;