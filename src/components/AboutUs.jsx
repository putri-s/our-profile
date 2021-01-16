import React, { Component } from 'react';

class AboutUs extends Component {
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
    const Progress1 = {
      width: 427,
    };
    const Progress2 = {
      width: 337,
    };
    const Progress3 = {
      width: 382,
    };
    let Progress4 = {
      width: 405,
    };

    return (
      <section id="about" className="about scrollspy bg-color2">
        <div className="container">
          <div className="row">
            <h3 className="center light grey-text text-darken-3">About Us</h3>
            <div className="col m6">
              <h5>We Are Professionals</h5>
              <p className="light">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam iure obcaecati sunt pariatur enim! Sit eos beatae in saepe dolorum alias debitis temporibus repudiandae magnam sequi quasi, sapiente odit!</p>
            </div>
            <div className="col m6 light">
              <p class="about-us-text">Web Development</p>
              <div className="progress">
                <div className="determinate color1" style={Progress1}></div>
              </div>   
              <p class="about-us-text">Mobile App Development</p>
              <div className="progress">
                <div className="determinate color1" style={Progress2}></div>
              </div>
              <p class="about-us-text">Photoshop and Corel Draw</p>
              <div className="progress">
                <div className="determinate color1" style={Progress3}></div>
              </div> 
              <p class="about-us-text">Figma</p>
              <div className="progress">
                <div className="determinate color1" style={Progress4}></div>
              </div>         
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;