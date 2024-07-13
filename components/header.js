"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../lib/themeContext";
import Preloader from "./Preloader";
import { useRouter } from "next/router";

function Navbar() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const logoSrc = theme === "light" ? "https://milliondejene.github.io/lafto-partners/public/images/logob.png" : "https://milliondejene.github.io/lafto-partners/public/images/logo.png";
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleToggleTheme = () => {
    setIsLoading(true);
    setTimeout(() => {
      toggleTheme();
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar?.classList?.add('nav-bg');
      } else {
        navbar?.classList?.remove('nav-bg');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToElement = (element) => {
    const targetElement = document.getElementById(element);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close the menu after navigation
    }
  };

  return (
    <>
      {isLoading && <Preloader />}
      <nav
        ref={navRef}
        className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image
              id="logo-img"
              src={logoSrc}
              alt="Logo"
              width={150}
              height={40}
              priority // Added priority property
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div
            className={`collapse navbar-collapse menu-main ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto menu-item">
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handleScrollToElement("about")}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handleScrollToElement("gallery")}
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handleScrollToElement("product")}
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handleScrollToElement("team")}
                >
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleScrollToElement("blog")}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={handleToggleTheme}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    paddingLeft: "15px",
                  }}
                >
                  <i
                    className={`fa ${
                      theme === "light" ? "fa-toggle-off" : "fa-toggle-on"
                    }`}
                    style={{ marginLeft: "10px", fontSize: "28px" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Contact Us</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="input-group contact-input mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text faq-icon">
                          <i className="fa fa-user-o" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control box-bg"
                        placeholder="Username"
                        aria-label="Username"
                      />
                    </div>
                    <div className="input-group contact-input mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text faq-icon">
                          <i
                            className="fa fa-envelope-o"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control box-bg"
                        placeholder="Email Address"
                        aria-label="Username"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control box-bg"
                        placeholder="Ask a Question..."
                        rows="3"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="dropboxx"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="dropboxx2"
                    data-dismiss="modal"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Subscription</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="input-group contact-input mb-3">
                      <input
                        type="email"
                        className="form-control box-bg"
                        placeholder="Email Address"
                        aria-label="Username"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer mf-2">
                  <button
                    type="submit"
                    className="dropboxx2"
                    data-dismiss="modal"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
