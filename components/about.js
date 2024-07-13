import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function About() {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);

  return (
    <section id="about">
      <div className="container">
        <div className="row header-text text-center about-header">
          <div className="col-lg-12">
            <h3>
              AB<span>O</span>UT
            </h3>
          </div>
        </div>
        <div className="row about-pa">
          <div className="col-lg-10 col-md-12 m-auto about-item">
            <div className="row">
              <div className="col-lg-4 col-sm-8 m-sm-auto col-md-5 text-center">
                <div className="about-img ai-one">
                  <div className={`image-container ${imageLoaded1 ? 'image-loaded' : 'image-loading'}`}>
                    <Image
                      src="https://milliondejene.github.io/lafto-partners/public/images/about1.JPG"
                      alt="about-img"
                      className="img-fluid"
                      width={300}
                      height={300}
                      onLoad={() => setImageLoaded1(true)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-7 col-md-6">
                <div className="about-txt">
                  <span className="separet-span">Who We Are</span>
                  <h3>Your Go-To Marketing Agency</h3>
                  <p>
                    Lafto Partners is a dynamic marketing and consulting agency
                    based in Ethiopia, offering a full spectrum of services from
                    strategic planning to creative execution. Our team
                    specializes in bridging diverse cultural divides, ensuring
                    your message resonates across Ethiopia's rich tapestry of
                    over 90 ethnic groups.
                  </p>
                  <p className="separate-p tab-hider">
                    Founded with a deep understanding of local nuances, we craft
                    tailored strategies that connect with varied audiences,
                    making your brand stand out in a competitive landscape.
                  </p>
                  <a href="">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 m-auto about-item col-md-12">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="about-txt sm-reduce-pa">
                  <span className="separet-span">Business Credentials</span>
                  <div className="p-bars">
                    <div className="col-lg-12 p-bar">
                      <span>Consultancy Services</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-lg-11 p-bar">
                      <span>Video Production</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-lg-10 p-bar">
                      <span>Event Organization</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row counter-main">
                  <div className="counter-1 col-4 col-lg-4 col-sm-3 col-md-4">
                    <div className="chart" data-percent="75"></div>
                    <h5>100+</h5>
                    <span>Projects Completed</span>
                  </div>
                  <div className="counter-1 col-4 col-lg-4 col-sm-3 col-md-4">
                    <div className="chart" data-percent="65"></div>
                    <h5>50+</h5>
                    <span>Happy Clients</span>
                  </div>
                  <div className="counter-1 col-4 col-lg-4 col-sm-3 col-md-4">
                    <div className="chart" data-percent="55"></div>
                    <h5>10+/</h5>
                    <span>Years in Business</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-4 text-center mob-hide sm-hide col-md-5">
                <div className="about-img ai-two">
                  <div className={`image-container ${imageLoaded2 ? 'image-loaded' : 'image-loading'}`}>
                    <Image
                      src="https://milliondejene.github.io/lafto-partners/public/images/about2.JPG"
                      alt="about-img"
                      className="img-fluid"
                      width={300}
                      height={300}
                      onLoad={() => setImageLoaded2(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 m-auto about-item col-md-12">
            <div className="row">
              <div className="col-lg-4 col-sm-8 m-sm-auto text-center col-md-5">
                <div className="about-img ai-three">
                  <div className={`image-container ${imageLoaded3 ? 'image-loaded' : 'image-loading'}`}>
                    <Image
                      src="https://milliondejene.github.io/lafto-partners/public/images/about3.JPG"
                      alt="about-img"
                      className="img-fluid"
                      width={300}
                      height={300}
                      onLoad={() => setImageLoaded3(true)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-7 col-md-6">
                <div className="about-txt">
                  <span className="separet-span">Our Achievements</span>
                  <h3>Transformative Projects & Impact</h3>
                  <p>
                    At Lafto Partners, our portfolio boasts collaborations with
                    esteemed clients such as the Oromia Tourism Commission and
                    Alphabet Inc. (Google). Our work spans digital media
                    management, branding, and content production, consistently
                    delivering exceptional results that drive growth and
                    visibility.
                  </p>
                  <p className="separate-p tab-hider">
                    We pride ourselves on creating impactful strategies and
                    compelling stories that elevate our clients' brands and
                    resonate with diverse audiences.
                  </p>
                  <a href="">See Our Work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
