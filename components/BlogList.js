import { useEffect } from "react";
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="blog">
      <div className="container">
        <div className="row header-text text-center blog-header">
          <div className="col-lg-12">
            <h3>BL<span>O</span>G</h3>
          </div>
        </div>
        <div className="row blog-pa">
          <div className="col-lg-8">
            <Slider {...settings} className="blog-main">
              {data?.posts.nodes.map((post) => (
                <div key={post.id} className="col-lg-6 blog-item">
                  <div>
                    <img
                      src={post.featuredImage?.node?.sourceUrl}
                      alt="blog-img"
                      className="img-fluid w-100"
                    />
                    <div className="blog-item-txt">
                      <h3>{post.title}</h3>
                      <p className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                      <Link href={`/blog/${post.id}`}>
                        Read More
                      </Link>
                    </div>
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
    </section>
  );
}

export default BlogList;
