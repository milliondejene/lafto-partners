"use client";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

function Banner() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="banner">
      {/* Correct class name for particles.js canvas */}
      <div className="particles-js-canvas-el" id="particles-js"></div>
      <div className="design-layer"></div>
      <div
        className="backtotop"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          height: "50px",
          width: "50px",
          borderRadius: "100px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#ffffff",
          zIndex: "1000", // Ensure it's above other elements
        }}
        onClick={handleBackToTop}
      >
        <ArrowUpIcon
          style={{
            color: "hsl(0, 0%, 70%)", // Light gray for white background
            height: "24px",
            width: "24px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div className="container zindex">
        <div className="row">
          <div className="col-lg-7 banner-txt">
            <h3>Unlock Your Potential with Lafto Partners</h3>
            <p>
              Lafto Partners is a leading marketing and consulting agency in
              Ethiopia. We specialize in strategic planning, creative services,
              and PR communications. With a deep understanding of Ethiopia's
              diverse culture, we craft strategies that connect and resonate.
            </p>
            <a href="">Discover More</a>
          </div>
          <div className="col-lg-5">
            <div className="banner-img">
              {/* Replace img tag with Next.js Image component */}
              <div className={`image-container ${imageLoaded ? 'image-loaded' : 'image-loading'}`}>
                <Image
                  src="https://milliondejene.github.io/lafto-partners/public/images/banner.png"
                  alt="banner-img"
                  width={900}
                  height={900}
                  className="img-fluid"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
