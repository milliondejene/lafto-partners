import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CopyRight from "../../components/copyright";
import Subscribe from "../../components/subscribe";
import Link from "next/link";

const GET_BLOG_POST = gql`
  query GetBlogPost($id: ID!) {
    post(id: $id) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
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

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_BLOG_POST, {
    variables: { id },
  });

  // UseEffect to initialize scripts or plugins
  useEffect(() => {
    if (!loading && !error && data) {
      console.log(data); // Log data to check image URLs

      // Initialize scripts or plugins here (e.g., sliders)
      $(".blog-main").slick({
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
      });
    }
  }, [loading, error, data]);


  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Destructure data once loading is complete
  const { post, posts } = data;

  // Styles for components
  const blogHeadingStyles = {
    fontSize: "2.5rem",
    lineHeight: "1.2",
    padding: "20px",

    "@media (maxWidth: 768px)": {
      fontSize: "2rem",
      padding: "10px",
    },
  };
  const blogTitleStyles = {
    width: "80vw",
    marginBottom: "30px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
    padding: "20px",
    "@media (maxWidth: 768px)": {
      fontSize: "2rem",
      padding: "10px",
    },
  };

  return (
    <>
      <Header />
      <section id="blog">
        <div className="container">
          <div className="row header-text text-center blog-header">
            <div className="col-lg-12">
              <h3 style={blogHeadingStyles}>
                BL<span>O</span>G
              </h3>
            </div>
          </div>
          <div className="row blog-pa">
            <div className="col-lg-8 blog-content">
              <h1 style={blogTitleStyles}>{post.title}</h1>
              {post.featuredImage?.node?.sourceUrl && (
                <div className="blog-top-section">
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt="Featured Image"
                    className="featured-image"
                  />
                </div>
              )}
              <div className="blog-post">
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              <div className="blog-main">
                {posts.nodes.map((post) => (
                  <div key={post.id} className="col-lg-6 blog-item">
                    <div className="blog-shadow">
                      <img
                        src={post.featuredImage?.node?.sourceUrl}
                        alt="blog-img"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <div className="blog-item-txt">
                        <h3>{post.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
      <Subscribe />
      <footer>
        <Footer />
        <CopyRight />
      </footer>
    </>
  );
};

export default BlogPost;
