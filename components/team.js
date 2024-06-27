import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  { name: "Jessie Sundberg", role: "Copywriter", img: "/images/p9.jpg" },
  { name: "Cherinet Kifle", role: "Project Manager", img: "/images/p6.jpg" },
  { name: "Ariel Germond", role: "Social Media", img: "/images/p11.jpg" },
  { name: "Argene", role: "Senior Designer", img: "/images/p8.jpg" },
  { name: "Janna Sundberg", role: "Chief Editor", img: "/images/p7.jpg" },
  { name: "Ephream Sileshi", role: "Account Manager", img: "/images/p2.jpg" },
];

function Team() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="team">
      <div className="container">
        <div className="row header-text text-center team-header">
          <div className="col-lg-12">
            <h3>
              TE<span>A</span>M
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings} className="product-main" style={{ marginTop: "80px" }}>
              {teamMembers.map((person, index) => (
                <div key={index} className="col-lg-3">
                  <div className="product-slider text-center">
                    <div className="pro-img">
                      <Image
                        src={person.img}
                        alt="product-img"
                        layout="responsive"
                        width={190}
                        height={190}
                      />
                    </div>
                    <div className="border-style" style={{ marginTop: "25px" }}>
                      <h3>{person.name}</h3>
                      <Link href="index2#" legacyBehavior>
                        <a>{person.role}</a>
                      </Link>
                    </div>
                    <div className="row pro-info">
                      <div
                        className="col-lg-6 col-sm-5 col-6"
                        style={{ marginLeft: "10px" }}
                      >
                        <span>Contact</span>
                      </div>
                      <div className="" style={{ marginRight: "25px" }}>
                        <div className="icon-container">
                          <Link href="mailto:example@example.com" legacyBehavior>
                            <a>
                              <i
                                style={{
                                  marginRight: "10px",
                                  color: "#c18b28",
                                  fontSize: "20px",
                                }}
                                className="fa fa-envelope clickable-icon"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </Link>
                          <Link href="/info-page" legacyBehavior>
                            <a>
                              <i
                                style={{ color: "#c18b28", fontSize: "22px" }}
                                className="fa fa-info-circle clickable-icon"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
