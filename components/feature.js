"use client"

import Link from 'next/link';

function Feature() {
  return (
    <section id="overview">
      <div className="container">
        <div className="row header-text text-center">
          <div className="col-lg-12">
            <h3>OUR <span>SERVICES</span></h3>
          </div>
        </div>
        <div className="row over-pa">
          <div className="col-lg-9 col-sm-12 m-auto">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="over-item txt-right unique-style3">
                  {/* <i className="fa fa-comments over-i" aria-hidden="true"></i> */}
                  <div className="break"></div>
                  <h3>Comprehensive Communications</h3>
                  <p>We modernize your communications systems to thrive in a connected world, enhancing your organization's visibility and engagement.</p>
                  <div className="over-btn">
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="over-item txt-left unique-style">
                  {/* <i className="fa fa-bullhorn over-i" aria-hidden="true"></i> */}
                  <div className="break"></div>
                  <h3>Expert <br/>PR Services</h3>
                  <p>Our public relations services include crafting compelling press releases and producing engaging PR videos tailored to your audience.</p>
                  <div className="over-btn">
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="over-item txt-right unique-style2">
                  {/* <i className="fa fa-share-alt over-i" aria-hidden="true"></i> */}
                  <div className="break"></div>
                  <h3>Social Media <br/> Management</h3>
                  <p>We provide expert management of your social media presence, ensuring consistent and effective engagement with your audience.</p>
                  <div className="over-btn">
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="over-item txt-left unique-style4">
                  {/* <i className="fa fa-pencil-alt over-i" aria-hidden="true"></i> */}
                  <div className="break"></div>
                  <h3>Creative<br/> Storytelling</h3>
                  <p>Our team excels in storytelling across mediums, including writing, video, and animation, to captivate and connect with your audience.</p>
                  <div className="over-btn">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
