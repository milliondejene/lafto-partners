
import Link from 'next/link';


function Blog() {
  return (
<section id="blog">
    <div class="container">
 
        <div class="row header-text text-center blog-header">
            <div class="col-lg-12">
                <h3>BL<span>O</span>G</h3>
            </div>
        </div>
 
        <div class="row blog-pa">
            <div class="col-lg-8">
                <div class="blog-main">
             
                    <div class="col-lg-6 blog-item">
                        <div class="blog-shadow">
                            <img src="images/blog1.jpg" alt="blog-img" class="img-fluid w-100"/>
                            <div class="blog-item-txt">
                                <h3>Effective Marketing Strategies</h3>
                                <p>Explore the top marketing strategies that can boost your brand's visibility and engagement.</p>
                                <a href="index2#">Read More</a>
                            </div>
                        </div>
                    </div>
            
                    <div class="col-lg-6 blog-item">
                        <div class="blog-shadow">
                            <img src="images/blog4.jpg" alt="blog-img" class="img-fluid w-100"/>
                            <div class="blog-item-txt">
                                <h3>Building a Strong Brand Identity</h3>
                                <p>Learn how to create a memorable brand identity that resonates with your audience.</p>
                                <a href="index2#">Read More</a>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-6 blog-item">
                        <div class="blog-shadow">
                            <img src="images/blog3.jpg" alt="blog-img" class="img-fluid w-100"/>
                            <div class="blog-item-txt">
                                <h3>Success Stories from Our Clients</h3>
                                <p>Discover the success stories of our clients and how we helped them achieve their goals.</p>
                                <a href="index2#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            <div class="col-lg-4 col-md-10 m-md-auto blog-text">
          
                <form>
                    <div class="input-group contact-input mb-3">
                        <input type="text" class="form-control box-bg" placeholder="Search here..." aria-label="Search"/>
                        <button type="submit" class="search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </form>
            
                <div class="tags">
                    <h4>Hash Tags</h4>
                    <a href="index2#">Marketing</a>
                    <a href="index2#">Branding</a>
                    <a href="index2#">Success</a>
                    <div class="tag-pa">
                        <a href="index2#">Strategy</a>
                        <a href="index2#">Digital</a>
                        <a href="index2#">Growth</a>
                    </div>
                    <div class="tag-pa">
                        <a href="index2#">Creative</a>
                        <a href="index2#">Innovation</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}

export default Blog;
