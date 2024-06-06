import Link from "next/link";

function Review() {
  return (
    <section id="review">
      <div class="container">
        <div class="row header-text text-center">
          <div class="col-lg-12">
            <h3>
              REV<span>I</span>EW
            </h3>
          </div>
        </div>
        <div class="row review-pa">
          <div class="col-lg-12">
            <div class="review-main">
            <div class="col-lg-6">
                        <div class="review-item">
                            <div class="comment">
                                <p><i class="fa fa-quote-left" aria-hidden="true"></i>Lafto Partners helped us redefine our brand strategy. Their team's creativity and professionalism exceeded our expectations. The impact on our brand visibility has been phenomenal.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
                            </div>
                            <div class="user">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-4 user-img">
                                        {/* <!-- <img src="images/testimonial.png" alt="user-img"/> --> */}
                                    </div>
                                    <div class="col-lg-7 col-sm-7 user-txt">
                                        <h3>John Doe</h3>
                                        <div class="star2">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <span>5 Days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="review-item">
                            <div class="comment">
                                <p><i class="fa fa-quote-left" aria-hidden="true"></i>The PR services provided by Lafto Partners were exceptional. They managed our campaign with precision and creativity, resulting in significant media coverage and positive public response.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
                            </div>
                            <div class="user">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-4 user-img">
                                        {/* <!-- <img src="images/testimonial1.png" alt="user-img"/> --> */}
                                    </div>
                                    <div class="col-lg-7 col-sm-7 user-txt">
                                        <h3>Jane Smith</h3>
                                        <div class="star2">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <span>2 Months ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="review-item">
                            <div class="comment">
                                <p><i class="fa fa-quote-left" aria-hidden="true"></i>Working with Lafto Partners on our social media strategy has been a game-changer. Their insights and execution have dramatically improved our engagement and reach.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
                            </div>
                            <div class="user">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-4 user-img">
                                        {/* <!-- <img src="images/testimonial2.png" alt="user-img"/> --> */}
                                    </div>
                                    <div class="col-lg-7 col-sm-7 user-txt">
                                        <h3>Michael Johnson</h3>
                                        <div class="star2">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <span>1 Year ago</span>
                                    </div>
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

export default Review;
