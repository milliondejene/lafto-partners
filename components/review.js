import Link from "next/link";

function Review() {
  return (
    <section id="review">
      {/* <div>Clients _List</div> */}
      <div className="container">
        <div className="row header-text text-center">
          <div className="col-lg-12">
            <h3>
              REV<span>I</span>EW
            </h3>
          </div>
        </div>
        <div className="row review-pa">
          <div className="col-lg-12">
            <div className="review-main">
              <div className="col-lg-6">
                <div className="review-item">
                  <div className="comment">
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      Lafto Partners helped us redefine our brand strategy. Their
                      team's creativity and professionalism exceeded our
                      expectations. The impact on our brand visibility has been
                      phenomenal.
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                  </div>
                  <div className="user">
                    <div className="row">
                      <div className="col-lg-4 col-sm-4 user-img">
                        {/* <!-- <img src="images/testimonial.png" alt="user-img"/> --> */}
                      </div>
                      <div className="col-lg-7 col-sm-7 user-txt">
                        <h3>John Doe</h3>
                        <div className="star2">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <span>5 Days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="review-item">
                  <div className="comment">
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      The PR services provided by Lafto Partners were exceptional.
                      They managed our campaign with precision and creativity,
                      resulting in significant media coverage and positive public
                      response.
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                  </div>
                  <div className="user">
                    <div className="row">
                      <div className="col-lg-4 col-sm-4 user-img">
                        {/* <!-- <img src="images/testimonial1.png" alt="user-img"/> --> */}
                      </div>
                      <div className="col-lg-7 col-sm-7 user-txt">
                        <h3>Jane Smith</h3>
                        <div className="star2">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <span>2 Months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="review-item">
                  <div className="comment">
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      Working with Lafto Partners on our social media strategy has
                      been a game-changer. Their insights and execution have
                      dramatically improved our engagement and reach.
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                  </div>
                  <div className="user">
                    <div className="row">
                      <div className="col-lg-4 col-sm-4 user-img">
                        {/* <!-- <img src="images/testimonial2.png" alt="user-img"/> --> */}
                      </div>
                      <div className="col-lg-7 col-sm-7 user-txt">
                        <h3>Michael Johnson</h3>
                        <div className="star2">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
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
