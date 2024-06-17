import Link from "next/link";

function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <div className="row header-text text-center">
          <div className="col-lg-12">
            <h3>CON<span>T</span>ACT US</h3>
          </div>
        </div>

        <div className="row contact-pa">
          <div className="col-lg-8 f-text2">
            <div className="accordion" id="accordionExample">

              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link zom"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      01. How to get in touch with us?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    You can reach us via email at info@laftopartners.com or call us at +251 123 456 789. Our team is available Monday to Friday from 9 AM to 6 PM.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed zom"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      02. What services do we offer?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Lafto Partners offers a wide range of services including strategic planning, digital marketing, PR services, social media management, branding, and event management.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed zom"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      03. How to start a project with us?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    To start a project with us, simply fill out the contact form on our website or send us an email with your project details. Our team will get back to you promptly to discuss your needs.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mobile-space">
            <div className="row">
              <div className="col-lg-12">
                <form>
                  <div className="input-group contact-input mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text faq-icon">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control box-bg light-v"
                      placeholder="Your Name"
                      aria-label="Your Name"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-12">
                <form>
                  <div className="input-group contact-input mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text faq-icon">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control box-bg light-v"
                      placeholder="Your Email"
                      aria-label="Your Email"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-12">
                <form>
                  <div className="form-group">
                    <textarea
                      className="form-control box-bg"
                      placeholder="Your Message"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="con-btn-main">
                    <input type="submit" value="Send Message" className="con-btn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
