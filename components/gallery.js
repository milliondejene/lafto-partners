import Link from 'next/link';

function Gallery() {
  return (
    <section id="gallery">
    <div class="container">
        <div class="row header-text text-center">
            <div class="col-lg-12">
                <h3>GAL<span>L</span>ERY</h3>
            </div>
        </div>
        <div class="row gallery-pa">
            <div class="col-lg-10 m-auto">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-6 col-12 gallery-img">
                        <img src="images/g1.jpg" alt="gallary-img" class="img-fluid"/>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 g-2 col-12 mob-mar-top gallery-img tab-view-hide">
                        <img src="images/g2.jpg" alt="gallary-img" class="img-fluid sp-img2"/>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-12 gallery-img g-mar sm-gallery-top">
                        <img src="images/g3.jpg" alt="gallary-img" class="img-fluid"/>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-12 gallery-img g-mar">
                        <img src="images/g4.jpg" alt="gallary-img" class="img-fluid"/>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 gallery-img g-mar sm-gallery-top2">
                        <img src="images/g5.jpg" alt="gallary-img" class="img-fluid w-100 sp-img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Gallery;
