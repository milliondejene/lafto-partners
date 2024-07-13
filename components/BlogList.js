import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    posts(first: 5) {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

function BlogList() {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div id="blog" className="container" style={{ height: "90%" }}>
      <div className="row header-text text-center blog-header">
        <div className="col-lg-12">
          <h3>
            BL<span>O</span>G
          </h3>
        </div>
      </div>
      <div className="row blog-pa blog-list" style={{ display: "flex", flexDirection: "row" }}>
        <div className="col-lg-8 blog-list-slick h-auto">
          <Slider {...settings} className="blog-main">
            {data?.posts.nodes.map((post) => (
              <div key={post.id} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8" style={{ height: "100%" }}>
                <div style={{ height: "200px" }}>
                  <div className={`image-container ${imageLoaded ? 'image-loaded' : 'image-loading'}`}>
                    <img
                      src={post.featuredImage?.node?.sourceUrl}
                      alt="blog-img"
                      className="img-fluid w-100"
                      style={{ height: "100%" }}
                      onLoad={handleImageLoad}
                    />
                  </div>
                </div>
                <div style={{ height: "50%" }} className="blog-item-txt">
                  <h3>{post.title}</h3>
                  <p className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="col-lg-4 col-md-10 m-md-auto blog-text">
          <form>
            <div className="input-group contact-input mb-3">
              <input
                type="text"
                className="form-control box-bg"
                placeholder="Search here..."
                aria-label="Search"
              />
              <button type="submit" className="search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </form>
          <div className="tags">
            <h4>Hash Tags</h4>
            <a href="#">Marketing</a>
            <a href="#">Branding</a>
            <a href="#">Success</a>
            <div className="tag-pa">
              <a href="#">Strategy</a>
              <a href="#">Digital</a>
              <a href="#">Growth</a>
            </div>
            <div className="tag-pa">
              <a href="#">Creative</a>
              <a href="#">Innovation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
