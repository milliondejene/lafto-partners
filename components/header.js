"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container">
        <a class='navbar-brand' href='index.html'>
      {/* Example image with optimization */}
      <Image
        src="/images/logo.png"
        alt="Description of the image"
        width={150}
        height={40}
      />
    </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse menu-main" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto menu-item">
                <li class="nav-item">
                    <a class="nav-link" href="index2#banner">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index2#about">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index2#gallery">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index2#product">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index2#blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link bor" href="index2#" data-toggle="modal" data-target="#exampleModal">Contact</a>
                </li>
            </ul>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Contact Us</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="input-group contact-input mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text faq-icon"><i class="fa fa-user-o" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control box-bg" placeholder="Username" aria-label="Username"/>
                            </div>
                            <div class="input-group contact-input mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text faq-icon"><i class="fa fa-envelope-o" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input type="email" class="form-control box-bg" placeholder="Email Address" aria-label="Username"/>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control box-bg" placeholder="Ask a Question..." rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="dropboxx" data-dismiss="modal">Close</button>
                        <button type="submit" class="dropboxx2" data-dismiss="modal">Send message</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Subscription</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="input-group contact-input mb-3">
                                <input type="email" class="form-control box-bg" placeholder="Email Address" aria-label="Username"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer mf-2">
                        <button type="submit" class="dropboxx2" data-dismiss="modal">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
  );
}

export default Navbar;
