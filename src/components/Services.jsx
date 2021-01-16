import React, { Component } from 'react';

class Services extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems, {});
    });
  }

  render() {
    return (
      <section id="services" class="scrollspy services bg-color3 lighten-3">
        <div class="container">
          <div class="row">
            <h3 class="light center grey-text text-darken-3">Our Services</h3>
            <div class="col m4 s12">
              <div class="card-panel center">
                <i class="material-icons medium">desktop_windows</i>
                <h5>Web Developmnet</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas quos deserunt, porro modi molestias? Quis neque ut eos, odit laboriosam ipsam illo sequi nam modi voluptates dolores dolore non.</p>
              </div>
            </div>
            <div class="col m4 s12">
              <div class="card-panel center">
                <i class="material-icons medium">desktop_windows</i>
                <h5>Web Developmnet</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas quos deserunt, porro modi molestias? Quis neque ut eos, odit laboriosam ipsam illo sequi nam modi voluptates dolores dolore non.</p>
              </div>
            </div>
            <div class="col m4 s12">
              <div class="card-panel center">
                <i class="material-icons medium">desktop_windows</i>
                <h5>Web Developmnet</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas quos deserunt, porro modi molestias? Quis neque ut eos, odit laboriosam ipsam illo sequi nam modi voluptates dolores dolore non.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;