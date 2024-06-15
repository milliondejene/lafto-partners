import Link from 'next/link';
import Image from 'next/image';

function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <div className="row header-text text-center">
          <div className="col-lg-12">
            <h3>GAL<span>L</span>ERY</h3>
          </div>
        </div>
        <div className="row gallery-pa">
          <div className="col-lg-10 m-auto">
            <div className="row">
              <div className="col-lg-9 col-md-12 col-sm-6 col-12 gallery-img">
                <Image
                  src="/images/g1.jpg"
                  alt="gallery-img"
                  layout="responsive"
                  width={700}
                  height={475}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 g-2 col-12 mob-mar-top gallery-img tab-view-hide">
                <Image
                  src="/images/g2.jpg"
                  alt="gallery-img"
                  layout="responsive"
                  width={700}
                  height={475}
                  className="img-fluid sp-img2"
                />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 gallery-img g-mar sm-gallery-top">
                <Image
                  src="/images/g3.jpg"
                  alt="gallery-img"
                  layout="responsive"
                  width={700}
                  height={475}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 gallery-img g-mar">
                <Image
                  src="/images/g4.jpg"
                  alt="gallery-img"
                  layout="responsive"
                  width={700}
                  height={475}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 gallery-img g-mar sm-gallery-top2">
                <Image
                  src="/images/g5.jpg"
                  alt="gallery-img"
                  layout="responsive"
                  width={700}
                  height={475}
                  className="img-fluid w-100 sp-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
