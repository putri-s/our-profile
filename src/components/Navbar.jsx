import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="bg-color1 lighten-2">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#home" className="brand-logo">Welcome!</a>
            <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#about">About Us</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portofolio">Portofolio</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;