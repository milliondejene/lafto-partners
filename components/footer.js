import Link from 'next/link';
import Image from 'next/image';
function Footer() {
  return (
<footer id="footer">
    <div className="container">
        <div className="row">

            <div className="col-lg-4 col-sm-11">
                <div className="footer-logo">
                    <Link href="/#banner">
                        <div className="f-logo">
                            <Image
                                src="https://milliondejene.github.io/lafto-partners/public/images/logo2.png"
                                alt="Lafto Partners Logo"
                                width={60}
                                height={80}
                            />
                        </div>
                    </Link>
                    <p>Lafto Partners is dedicated to delivering top-notch marketing and consulting services, driving success for our clients through innovative solutions.</p>
                    <div className="footer-social">
                        <Link href="https://www.facebook.com/LaftoPartners/">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                  
                       
                        <Link href="https://www.linkedin.com/company/lafto-partners/">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-1"></div>
 
            <div className="col-lg-2 col-sm-4">
                <div className="links">
                    <h3>Top Offers</h3>
                    <ul>
                        <li><Link href="#"><div>Our Services</div></Link></li>
                        <li><Link href="#"><div>Pricing Plans</div></Link></li>
                        <li><Link href="#"><div>Client Testimonials</div></Link></li>
                        <li><Link href="#"><div>Case Studies</div></Link></li>
                        <li><Link href="#"><div>Privacy Policy</div></Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-2 col-sm-4">
                <div className="links">
                    <h3>Information</h3>
                    <ul>
                        <li><Link href="#"><div>About Us</div></Link></li>
                        <li><Link href="#"><div>Recent Blogs</div></Link></li>
                        <li><Link href="#"><div>Contact Us</div></Link></li>
                        <li><Link href="#"><div>Terms and Conditions</div></Link></li>
                        <li><Link href="#"><div>Site Map</div></Link></li>
                    </ul>
                </div>
            </div>
        
            <div className="col-lg-2 col-sm-4">
                <div className="links">
                    <h3>Help Desk</h3>
                    <ul>
                        <li><Link href="#"><div>FAQs</div></Link></li>
                        <li><Link href="#"><div>Support</div></Link></li>
                        <li><Link href="#"><div>Payment Methods</div></Link></li>
                        <li><Link href="#"><div>Visiting Hours</div></Link></li>
                        <li><Link href="#"><div>Service Categories</div></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

  );
}

export default Footer;
