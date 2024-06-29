import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

const teamMembers = [
  { name: "Jessie Sundberg", role: "Copywriter", img: "/images/p9.jpg" },
  { name: "Cherinet Kifle", role: "Project Manager", img: "/images/p6.jpg" },
  { name: "Ariel Germond", role: "Social Media", img: "/images/p11.jpg" },
  { name: "Argene", role: "Senior Designer", img: "/images/p8.jpg" },
  { name: "Janna Sundberg", role: "Chief Editor", img: "/images/p7.jpg" },
  { name: "Ephream Sileshi", role: "Account Manager", img: "/images/p2.jpg" },
];

function Team() {
  var settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
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
    <section id="team" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center header-text team-header">
          <h3 className="text-3xl font-bold" style={{ marginBottom: "80px" }}>
            TE<span>A</span>M
          </h3>
        </div>
        <div className="mx-auto team-slick">
          <Slider {...settings} className="mx-auto">
            {teamMembers.map((person, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
                <div className="team-card overflow-hidden">
                  <div className="pro-img">
                    <Image
                      src={person.img}
                      alt="product-img"
                      layout="responsive"
                      width={190}
                      height={190}
                    />
                  </div>
                  <div className="border-style mt-4 px-4 pb-4">
                    <h3
                      className="text-lg font-semibold"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {person.name}
                    </h3>
                    <Link href="" legacyBehavior>
                      <a className="block team-role">{person.role}</a>
                    </Link>
                  </div>
                  <div className="pro-info flex justify-between items-center px-4">
                    <span className="mr-2 mb-3 text-gray-600">Contact</span>
                    <div
                      className="icon-container flex"
                      style={{ marginBottom: "20px" }}
                    >
                      <Link href="" legacyBehavior>
                        <a className="te mr-2">
                          <i className="fa fa-envelope clickable-icon text-xl"></i>
                        </a>
                      </Link>
                      <Link href="" legacyBehavior>
                        <a className="te">
                          <i className="fa fa-info-circle clickable-icon text-2xl"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Team;
