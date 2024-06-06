import Image from "next/image";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
function Banner() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth behavior for a smooth transition
    });
  };

  return (
    <section id="banner">
      <div class=".particles-js-canvas-el" id="particles-js"></div>
      <div class="design-layer"></div>
      <div
        className="backtotop"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          height: "50px",
          width: "50px",
          borderRadius: "100px",
        }}
      >
        <ArrowUpIcon
          style={{
            color: "rgb(255,118,87)",
            height: "24px",
            width: "24px",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          fontWeight={800}
          onClick={() => {
            handleBackToTop();
          }}
        />
      </div>
      <div class="container zindex">
        <div class="row">
          <div class="col-lg-7 banner-txt">
          <h3>Unlock Your Potential with Lafto Partners</h3>
      <p>
        Lafto Partners is a leading marketing and consulting agency in Ethiopia. 
        We specialize in strategic planning, creative services, and PR communications. 
        With a deep understanding of Ethiopia's diverse culture, we craft 
        strategies that connect and resonate.
      </p>
      <a href="index3#">Discover More</a>
          </div>
          <div class="col-lg-5">
            <div class="banner-img">
              <img src="images/banner.png" alt="banner-img"    width={900}
        height={900} class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
