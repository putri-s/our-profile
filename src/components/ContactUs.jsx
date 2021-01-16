import React, { Component } from 'react';

class ContactUs extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems, {});
    });
  }
  
  render() {
    return (
      <section className="contact bg-color5 scrollspy" id="contact">
        <div className="container">
          <h3 className="light grey-text text-darken-3 center">Contact Us</h3>
          <div className="row">
            <div className="col m5 s12">
              <div className="card-panel bg-color4 darken-2 center">
                <i className="material-icons white-text">email</i>
                <h5 className="white-text">Contact</h5>
                <p className="white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4 className="center">Our Office</h4>
                </li>
                <li className="collection-item">Nama Kantor</li>
                <li className="collection-item">Jl. Apabae No.123, Palembang</li>
                <li className="collection-item">Sumatera Selatan, Indonesia</li>
              </ul>
            </div>

            <div className="col m7 s12">
              <form action="">
                <div className="card-panel">
                  <h5>Please fill out this form!</h5>
                  <div className="input-field">
                    <input type="text" name="name" id="name" required className="validate"/>
                    <label for="name">Name</label>
                  </div>
                  <div className="input-field">
                    <input type="email" name="email" id="email" className="validate"/>
                    <label for="email">E-mail</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="phone" id="phone"/>
                    <label for="phone">Phone Number</label>
                  </div>
                  <div className="input-field">
                    <textarea name="message" id="message" className="materialize-textarea"></textarea>
                    <label for="message">Message</label>
                  </div>
                  <button type="submit" className="btn bg-color1 darken-2">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;