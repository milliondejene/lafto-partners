import Link from "next/link";

function Contact() {
  return (
    <section id="contact">
    <div class="container">

        <div class="row header-text text-center">
            <div class="col-lg-12">
                <h3>CON<span>T</span>ACT US</h3>
            </div>
        </div>

        <div class="row contact-pa">
            <div class="col-lg-8 f-text2">
                <div class="accordion" id="accordionExample">
            
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button
                                    class="btn btn-link zom"
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
                            class="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div class="card-body">
                                You can reach us via email at info@laftopartners.com or call us at +251 123 456 789. Our team is available Monday to Friday from 9 AM to 6 PM.
                            </div>
                        </div>
                    </div>
                 
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button
                                    class="btn btn-link collapsed zom"
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
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                        >
                            <div class="card-body">
                                Lafto Partners offers a wide range of services including strategic planning, digital marketing, PR services, social media management, branding, and event management.
                            </div>
                        </div>
                    </div>
      
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button
                                    class="btn btn-link collapsed zom"
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
                            class="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div class="card-body">
                                To start a project with us, simply fill out the contact form on our website or send us an email with your project details. Our team will get back to you promptly to discuss your needs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="col-lg-4 mobile-space">
                <div class="row">
                    <div class="col-lg-12">
                        <form>
                            <div class="input-group contact-input mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text faq-icon">
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    class="form-control box-bg light-v"
                                    placeholder="Your Name"
                                    aria-label="Your Name"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-12">
                        <form>
                            <div class="input-group contact-input mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text faq-icon">
                                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    class="form-control box-bg light-v"
                                    placeholder="Your Email"
                                    aria-label="Your Email"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-12">
                        <form>
                            <div class="form-group">
                                <textarea
                                    class="form-control box-bg"
                                    placeholder="Your Message"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div class="con-btn-main">
                                <input type="submit" value="Send Message" class="con-btn" />
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
