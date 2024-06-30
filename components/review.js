import React from 'react';
import Slider from 'react-slick';

function Review() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="review" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-8 header-text">
          <h3 className="text-3xl font-bold" style={{ marginBottom: '80px' }}>
            REV<span>I</span>EW
          </h3>
        </div>
        <div className="lg:w-full review-slick">
          <Slider {...settings} className="review-main">
            <div className="review-item px-2 lg:px-4">
              <div className="comment">
                <p className="text-center">
                  <i className="fa fa-quote-left text-2xl text-gray-400" aria-hidden="true"></i>
                  Lafto Partners helped us redefine our brand strategy. Their team's creativity and professionalism exceeded our expectations. The impact on our brand visibility has been phenomenal.
                  <i className="fa fa-quote-right text-2xl text-gray-400" aria-hidden="true"></i>
                </p>
              </div>
              <div className="user mt-4">
                <div className="flex items-center">
                  <div className="user-img mr-4">
                    {/* <img src="images/testimonial.png" alt="user-img"/> */}
                  </div>
                  <div className="user-txt">
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <div className="star2">
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                    </div>
                    <span className="text-sm">5 Days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-item px-2 lg:px-4">
              <div className="comment">
                <p className="text-center">
                  <i className="fa fa-quote-left text-2xl text-gray-400" aria-hidden="true"></i>
                  The PR services provided by Lafto Partners were exceptional. They managed our campaign with precision and creativity, resulting in significant media coverage and positive public response.
                  <i className="fa fa-quote-right text-2xl text-gray-400" aria-hidden="true"></i>
                </p>
              </div>
              <div className="user mt-4">
                <div className="flex items-center">
                  <div className="user-img mr-4">
                    {/* <img src="images/testimonial1.png" alt="user-img"/> */}
                  </div>
                  <div className="user-txt">
                    <h3 className="text-xl font-semibold">Jane Smith</h3>
                    <div className="star2">
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                    </div>
                    <span className="text-sm">2 Months ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-item px-2 lg:px-4">
              <div className="comment">
                <p className="text-center">
                  <i className="fa fa-quote-left text-2xl text-gray-400" aria-hidden="true"></i>
                  Working with Lafto Partners on our social media strategy has been a game-changer. Their insights and execution have dramatically improved our engagement and reach.
                  <i className="fa fa-quote-right text-2xl text-gray-400" aria-hidden="true"></i>
                </p>
              </div>
              <div className="user mt-4">
                <div className="flex items-center">
                  <div className="user-img mr-4">
                    {/* <img src="images/testimonial2.png" alt="user-img"/> */}
                  </div>
                  <div className="user-txt">
                    <h3 className="text-xl font-semibold">Michael Johnson</h3>
                    <div className="star2">
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                      <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                    </div>
                    <span className="text-sm">1 Year ago</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Review;
