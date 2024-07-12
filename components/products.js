import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Product() {
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="product">
      <div className="container">
        <div className="row header-text text-center">
          <div className="col-lg-12">
            <h3>In-<span>H</span>ouse Pro<span>j</span>ects</h3>
          </div>
        </div>
        <div className="row product-pa">
          <div className="col-lg-7 mob-mar-bottom">
            <div className="product-item">
              <div className="row">
                <div className="col-lg-8 col-md-7 product-txt">
                  <span>Featured Work</span>
                  <h3>Google Arts & Culture</h3>
                  <p>Lafto Partners collaborated with Alphabet Inc. to produce the Oromia Online Exhibition. This project involved creating 2,000 descriptions and crafting compelling stories, making Oromo culture accessible globally.</p>
                  <Link href="">Explore More</Link>
                </div>
                <div className="col-lg-4 col-md-4 mob-img-hide">
                  <div className={`image-container ${imageLoaded ? 'image-loaded' : 'image-loading'}`}>
                    <Image
                      src="https://milliondejene.github.io/lafto-partners/public/images/pro1.png"
                      alt="product-img"
                      width={350}
                      height={500}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <div className="product-item product-txt">
              <span>Recent Achievement</span>
              <h3>Oromia Tourism Commission</h3>
              <p className="next-p">We revitalized the digital presence of Oromia Tourism Commission, enhancing their social media strategy and boosting their online engagement significantly.</p>
              <Link href="">See Project</Link>
            </div>
          </div>
        </div>
        <div className="row">
          {/* company-list */}
        </div>
      </div>
    </section>
  );
}

export default Product;
