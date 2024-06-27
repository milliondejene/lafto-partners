import Link from 'next/link'; // Import for potential navigation

function Subscribe() {
  return (
    <section id="subscribe" className="subscribe">  {/* Added className */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="sub-main">
              <div className="row">
                <div className="col-lg-8 col-md-3">
                  <h3>Stay Connected With Us</h3>
                </div>
                <div className="col-lg-4 col-md-5 subscripe-btn">
                  {/* Use Link component for navigation (optional) */}
                  {/* <Link href="/subscribe"> */}
                  <a href="" data-toggle="modal" data-target="#exampleModal2">Subscribe Us</a>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
