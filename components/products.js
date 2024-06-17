import Link from 'next/link';
import { useEffect, useState } from 'react';

function Product() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="product">
      <div className="container">
        <div className="row header-text text-center">
          <div className="col-lg-12">
            <h3>In-<span>H</span>ouse Pro<span>j</span>ects</h3>
            {/* <h3>PRO<span>D</span>UCT</h3> */}
          </div>
        </div>
        <div className="row product-pa">
          <div className="col-lg-7 mob-mar-bottom">
            <div className="product-item">
              <div className="row">
                <div className="col-lg-8 col-md-7 product-txt">
                  <span>Featured Work</span>
                  <h3>Google Arts & Culture</h3>
                  <p>Lafto Partners collaborated with Alphabet Inc. to produce the Oromia Online Exhibition. This project involved creating 2,000 descriptions and crafting compelling stories, making Oromo culture accessible globally.</p>
                  <a href="index2#">Explore More</a>
                </div>
                <div className="col-lg-4 col-md-4 mob-img-hide">
                  <img src="images/pro1.png" alt="product-img"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <div className="product-item product-txt">
              <span>Recent Achievement</span>
              <h3>Oromia Tourism Commission</h3>
              <p className="next-p">We revitalized the digital presence of Oromia Tourism Commission, enhancing their social media strategy and boosting their online engagement significantly.</p>
              <a href="index2#">See Project</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="product-main">
              <div className="col-lg-3">
                <div className="product-slider text-center">
                  <div className="pro-img">
                    <img src="images/p1.jpg" alt="product-img"/>
                  </div>
                  <div className="border-style">
                    <h3>Mando</h3>
                    <a href="index2#">Educational consultancy</a>
                  </div>
                  <div className="row pro-info">
                    <div className="col-lg-6 col-6 col-sm-5">
                      <span>Visit</span>
                    </div>
                    <div className="col-lg-6 col-6 col-sm-7 stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-slider text-center">
                  <div className="pro-img">
                    <img src="images/p2.jpg" alt="product-img"/>
                  </div>
                  <div className="border-style">
                    <h3>Outdoor</h3>
                    <a href="index2#">Ethiopia</a>
                  </div>
                  <div className="row pro-info">
                    <div className="col-lg-6 col-sm-5 col-6">
                      <span>Visit</span>
                    </div>
                    <div className="col-lg-6 col-6 col-sm-7 stars">
                      Click Here
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-slider text-center">
                  <div className="pro-img">
                    <img src="images/p3.jpg" alt="product-img"/>
                  </div>
                  <div className="border-style">
                    <h3>Infinity</h3>
                    <a href="index2#">Web Discription</a>
                  </div>
                  <div className="row pro-info">
                    <div className="col-lg-6 col-sm-5 col-6">
                      <span>Visit</span>
                    </div>
                    <div className="col-lg-6 col-6 col-sm-7 stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-slider text-center">
                  <div className="pro-img">
                    <img src="images/p4.jpg" alt="product-img"/>
                  </div>
                  <div className="border-style">
                    <h3>Visit Oromia</h3>
                    <a href="index2#">Discription</a>
                  </div>
                  <div className="row pro-info">
                    <div className="col-lg-6 col-sm-5 col-6">
                      <span>Visit</span>
                    </div>
                    <div className="col-lg-6 col-sm-7 col-6 stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-slider text-center">
                  <div className="pro-img">
                    <img src="images/p5.jpg" alt="product-img"/>
                  </div>
                  <div className="border-style">
                    <h3>Mando</h3>
                    <a href="index2#">Educational consultancy</a>
                  </div>
                  <div className="row pro-info">
                    <div className="col-lg-6 col-sm-5 col-6">
                      <span>Visit</span>
                    </div>
                    <div className="col-lg-6 col-sm-7 col-6 stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
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

export default Product;
