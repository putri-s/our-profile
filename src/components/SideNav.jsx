import React, { Component } from 'react';

class SideNav extends Component {
componentDidMount() {
  const M=window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{
      indicators: false,
      height: 500,
      transition: 600,
      interval: 3000
    });
  });
}

  render() {
    return (
      <ul className="sidenav" id="mobile-nav">
        <li><a href="#about">About Us</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio,</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    );
  }
}

export default SideNav;