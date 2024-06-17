import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CopyRight from "../../components/copyright";
import Link from "next/link";
import Image from "next/image";
import Preloader from "../../components/Preloader"; // Import Preloader
import Subscribe from "../../components/subscribe";

const GET_BLOG_POST = gql`
  query GetBlogPost($id: ID!) {
    post(id: $id) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
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

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === "/") {
        window.location.href = "/";
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (!loading && !error && data) {
      // Initialize scripts or plugins here (e.g., sliders)
      if (typeof window !== "undefined" && window.$) {
        window.$(".blog-main").slick({
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
    }
  }, [loading, error, data]);

  if (loading) return <Preloader />;
  if (error) return <p>Error: {error.message}</p>;

  const { post, posts } = data;

  const blogHeadingStyles = {
    fontSize: "2.5rem",
    lineHeight: "1.2",
    padding: "20px",
  };

  const blogTitleStyles = {
    width: "auto",
    marginBottom: "10px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: "1.2",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Add background color to ensure readability
    position: "relative", // Ensure the title is positioned correctly
    zIndex: 1, // Ensure the title is above other elements
  };

  const postMetaStyles = {
    fontSize: "1rem",
    marginBottom: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Helper function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const category = post.categories.nodes.find(
    (cat) => cat.name.toLowerCase() !== "uncategorized"
  );

  return (
    <>
      <Header />
      <section id="blog">
        <div className="container">
          <div className="row header-text text-center blog-header">
            <div className="col-lg-12">
              {/* <h3 style={blogHeadingStyles}>
                BL<span>O</span>G
              </h3> */}
            </div>
          </div>
          <div className="row blog-pa">
            <div className="title-image-container">
              {post.featuredImage?.node?.sourceUrl && (
                <div className="blog-top-section">
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt="Featured Image"
                    className="featured-image"
                    width={800} // Adjust accordingly
                    height={400} // Adjust accordingly
                    layout="responsive"
                  />
                  <div style={{ position: "absolute", top: "120px", width: "100%", textAlign: "center" }}>
                    <h1 style={blogTitleStyles}>{post.title}</h1>
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-8 blog-content">
              <p style={postMetaStyles}>
                {formatDate(post.date)} <span>&mdash; by {post.author.node.name}</span>
                {category && category.name !== "Uncategorized" && (
                  <span> in {category.name}</span>
                )}
              </p>
              <div className="blog-post">
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              <div className="blog-main">
                {posts.nodes.map((post) => (
                  <div key={post.id} className="blog-item">
                    <div className="blog-shadow">
                      <Image
                        src={
                          post.featuredImage?.node?.sourceUrl ||
                          "/default-image.jpg"
                        }
                        alt="blog-img"
                        width={400} // Adjust accordingly
                        height={210} // Adjust accordingly
                        layout="responsive"
                        objectFit="cover"
                      />
                      <div className="blog-item-txt">
                        <h3>{post.title}</h3>
                        <p
                          className="excerpt"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-10 blog-text">
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
        <Subscribe />
      </section>
      <Footer />
      <CopyRight />
    </>
  );
};

export default BlogPost;
