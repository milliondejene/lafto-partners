import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CopyRight from "../../components/copyright";
import Link from "next/link";
import Image from "next/image";
import Preloader from "../../components/Preloader";
import Subscribe from "../../components/subscribe";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "relative",
    zIndex: 1,
  };

  const postMetaStyles = {
    fontSize: "1rem",
    marginBottom: "20px",
    textAlign: "left",
    display: "flex",
    justifyContent: "start",
    alignItems: "left",
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedTime = date.toUTCString().match(/\d{2}:\d{2}/)[0];
    return `${formattedDate} at ${formattedTime} GMT`;
  };

  const category = post.categories.nodes.find(
    (cat) => cat.name.toLowerCase() !== "uncategorized"
  );

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
                    width={800}
                    height={400}
                    layout="responsive"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "120px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <h1 className="blogTitleStyles">{post.title}</h1>
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-12 blog-content">
              <div
                className="blog-post"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    width: "60%",
                  }}
                />
              </div>
              <p style={postMetaStyles}>
                <div
                  className="post-meta-container"
                  style={{ marginLeft: "230px" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      style={{
                        color: "#c18b28",
                        fontSize: "24px",
                        marginRight: "8px",
                      }}
                      className="fa fa-user-circle-o"
                      aria-hidden="true"
                    ></i>
                    <span>&mdash; by {post.author.node.name}</span>
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    {formatDate(post.date)}
                  </div>
                </div>

                {category && category.name !== "Uncategorized" && (
                  <span> in {category.name}</span>
                )}
              </p>
            </div>
            <h3
              className="related-post-title"
              style={{
                marginBottom: "10px",
                marginLeft: "10px",
                marginTop: "70px",
              }}
            >
              Related Posts
            </h3>
            <Slider {...settings} className="blog-main">
              {posts.nodes.map((post) => (
                <div
                  key={post.id}
                  className="col-lg-4 col-md-6 col-sm-12 blog-item"
                  style={{ padding: "20px", boxSizing: "border-box" }}
                >
                  <div>
                    <img
                      src={post.featuredImage?.node?.sourceUrl}
                      alt="blog-img"
                      className="img-fluid w-100"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                    <div
                      className="blog-item-txt"
                      style={{
                        position: "relative",
                        paddingLeft: "5px",
                        paddingTop: "20px",
                        paddingRight: "5px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4
                        style={{
                          height: "60px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "wrap",
                          margin: "0 0 10px 0",
                        }}
                      >
                        {post.title}
                      </h4>
                      <p
                        className="excerpt"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        style={{
                          flexGrow: 1,
                          height: "85px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      />
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
      <CopyRight />
    </>
  );
};

export default BlogPost;
