"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '../lib/themeContext';

function Navbar() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const logoSrc = theme === 'light' ? '/images/logob.png' : '/images/logo.png';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <Image
            id="logo-img"
            src={logoSrc}
            alt="Logo"
            width={150}
            height={40}
          />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div className="collapse navbar-collapse menu-main" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto menu-item">
            <li className="nav-item">
              <a className="nav-link" href="index2#banner">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index2#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index2#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index2#product">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index2#blog">Blog</a>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
              </button>
            </li>
          </ul>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Us</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="input-group contact-input mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text faq-icon"><i className="fa fa-user-o" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" className="form-control box-bg" placeholder="Username" aria-label="Username"/>
                  </div>
                  <div className="input-group contact-input mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text faq-icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                    </div>
                    <input type="email" className="form-control box-bg" placeholder="Email Address" aria-label="Username"/>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control box-bg" placeholder="Ask a Question..." rows="3"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="dropboxx" data-dismiss="modal">Close</button>
                <button type="submit" className="dropboxx2" data-dismiss="modal">Send message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Subscription</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="input-group contact-input mb-3">
                    <input type="email" className="form-control box-bg" placeholder="Email Address" aria-label="Username"/>
                  </div>
                </form>
              </div>
              <div className="modal-footer mf-2">
                <button type="submit" className="dropboxx2" data-dismiss="modal">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
