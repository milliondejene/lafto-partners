import Link from 'next/link'
import { useEffect, useState } from 'react';

function Product() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section id="product">
        <div class="container">
            <div class="row header-text text-center">
                <div class="col-lg-12">
                <h3>In-<span>H</span>ouse Pro<span>j</span>ects</h3>
                    {/* <h3>PRO<span>D</span>UCT</h3> */}
                </div>
            </div>
            <div class="row product-pa">
                <div class="col-lg-7 mob-mar-bottom">
                    <div class="product-item">
                        <div class="row">
                            <div class="col-lg-8 col-md-7 product-txt">
                            <span>Featured Work</span>
                            <h3>Google Arts & Culture</h3>
                            <p>Lafto Partners collaborated with Alphabet Inc. to produce the Oromia Online Exhibition. This project involved creating 2,000 descriptions and crafting compelling stories, making Oromo culture accessible globally.</p>
                            <a href="index2#">Explore More</a>

                            </div>
                            <div class="col-lg-4 col-md-4 mob-img-hide">
                                <img src="images/pro1.png" alt="product-img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-4">
                    <div class="product-item product-txt">
                    <span>Recent Achievement</span>
                    <h3>Oromia Tourism Commission</h3>
                    <p class="next-p">We revitalized the digital presence of Oromia Tourism Commission, enhancing their social media strategy and boosting their online engagement significantly.</p>
                    <a href="index2#">See Project</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-main">
                        <div class="col-lg-3">
                            <div class="product-slider text-center">
                                <div class="pro-img">
                                    <img src="images/p1.jpg" alt="product-img"/>
                                </div>
                                <div class="border-style">
                                    <h3>Mando</h3>
                                    <a href="index2#">Educational consultancy</a>
                                </div>
                                <div class="row pro-info">
                                    <div class="col-lg-6 col-6 col-sm-5">
                                        <span>Visit</span>
                                    </div>
                                    <div class="col-lg-6 col-6 stars col-sm-7">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="product-slider text-center">
                                <div class="pro-img">
                                    <img src="images/p2.jpg" alt="product-img"/>
                                </div>
                                <div class="border-style">
                                    <h3>Outdoor</h3>
                                    <a href="index2#">Ethiopia</a>
                                </div>
                                <div class="row pro-info">
                                    <div class="col-lg-6 col-sm-5 col-6">
                                        <span>Visit</span>
                                    </div>
                                    <div class="col-lg-6 col-6 col-sm-7 stars">
                                       Click Here
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="product-slider text-center">
                                <div class="pro-img">
                                    <img src="images/p3.jpg" alt="product-img"/>
                                </div>
                                <div class="border-style">
                                    <h3>Infinity</h3>
                                    <a href="index2#">Web Discription</a>
                                </div>
                                <div class="row pro-info">
                                    <div class="col-lg-6 col-sm-5 col-6">
                                        <span>Visit</span>
                                    </div>
                                    <div class="col-lg-6 col-6 col-sm-7 stars">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="product-slider text-center">
                                <div class="pro-img">
                                    <img src="images/p4.jpg" alt="product-img"/>
                                </div>
                                <div class="border-style">
                                    <h3>Visit Oromia</h3>
                                    <a href="index2#"> Discription</a>
                                </div>
                                <div class="row pro-info">
                                    <div class="col-lg-6 col-sm-5 col-6">
                                        <span>Visit</span>
                                    </div>
                                    <div class="col-lg-6 col-sm-7 col-6 stars">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="product-slider text-center">
                                <div class="pro-img">
                                    <img src="images/p5.jpg" alt="product-img"/>
                                </div>
                                <div class="border-style">
                                    <h3>Mando</h3>
                                    <a href="index2#">Educational consultancy</a>
                                </div>
                                <div class="row pro-info">
                                    <div class="col-lg-6 col-sm-5 col-6">
                                        <span>Visit</span>
                                    </div>
                                    <div class="col-lg-6 col-sm-7 col-6 stars">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
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
