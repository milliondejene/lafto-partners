import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function Gallery() {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);
  const [imageLoaded4, setImageLoaded4] = useState(false);

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
                <div className={`image-container ${imageLoaded1 ? 'image-loaded' : 'image-loading'}`}>
                  <Image
                    src="https://milliondejene.github.io/lafto-partners/public/images/g1.jpg"
                    alt="gallery-img"
                    className="img-fluid"
                    width={800}
                    height={600}
                    layout="responsive"
                    onLoad={() => setImageLoaded1(true)}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 g-2 col-12 mob-mar-top gallery-img tab-view-hide">
                <div className={`image-container ${imageLoaded2 ? 'image-loaded' : 'image-loading'}`}>
                  <Image
                    src="https://milliondejene.github.io/lafto-partners/public/images/g2.jpg"
                    alt="gallery-img"
                    className="img-fluid sp-img2"
                    width={300}
                    height={400}
                    layout="responsive"
                    onLoad={() => setImageLoaded2(true)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 gallery-img g-mar sm-gallery-top2">
                <div className={`image-container ${imageLoaded3 ? 'image-loaded' : 'image-loading'}`}>
                  <Image
                    src="https://milliondejene.github.io/lafto-partners/public/images/g3.jpg"
                    alt="gallery-img"
                    className="img-fluid w-100 sp-img"
                    width={600}
                    height={400}
                    layout="responsive"
                    onLoad={() => setImageLoaded3(true)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 gallery-img g-mar sm-gallery-top2">
                <div className={`image-container ${imageLoaded4 ? 'image-loaded' : 'image-loading'}`}>
                  <Image
                    src="https://milliondejene.github.io/lafto-partners/public/images/g4.jpg"
                    alt="gallery-img"
                    className="img-fluid w-100 sp-img"
                    width={600}
                    height={400}
                    layout="responsive"
                    onLoad={() => setImageLoaded4(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
