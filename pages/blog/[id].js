import Slider from "react-slick";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
//
import Header from "../../components/header";
import Footer from "../../components/footer";
import CopyRight from "../../components/copyright";
import Link from "next/link";
import Image from "next/image";
import Preloader from "../../components/Preloader";
import Subscribe from "../../components/subscribe";
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// helpers
import { formatDate } from "../../lib/utils";

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

  const { post } = data;

  // const blogHeadingStyles = {
  //   fontSize: "2.5rem",
  //   lineHeight: "1.2",
  //   padding: "20px",
  // };

  // const blog-title-styles = {
  //   width: "auto",
  //   marginBottom: "10px",
  //   alignItems: "center",
  //   display: "flex",
  //   justifyContent: "center",
  //   fontSize: "2rem",
  //   fontWeight: "bold",
  //   lineHeight: "1.2",
  //   padding: "20px",
  //   backgroundColor: "rgba(255, 255, 255, 0.7)",
  //   position: "relative",
  //   zIndex: 1,
  // };

  // const postMetaStyles = {
  //   fontSize: "1rem",
  //   marginBottom: "20px",
  //   textAlign: "left",
  //   display: "flex",
  //   justifyContent: "start",
  //   alignItems: "left",
  // };
  const category = post.category;
  const formattedDate = formatDate(post.date);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
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

  return (
    <>
      <Header />
      <section id="blog">
        <div
          className="container"
          style={{
            width: "100vw",
            display:'flex',
            justifyContent:'center',
            marginTop:"40px"
          }}
        >
          <div className="row blog-pa blog-parent-container">
            <div className="blog-header-image-container">
              {post.featuredImage?.node?.sourceUrl && (
                <div className="blog-top-section" style={{ height: "auto" }}>
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt="Featured Image"
                    className="featured-image"
                    width={400}
                    height={400}
                    layout="responsive"
                  />
                </div>
              )}
            </div>
            <h1 className="blog-title-styles" style={{marginTop:"20px"}}>{post.title}</h1>
            <a
        style={{
          marginLeft: "20px",
          marginBottom:"20px",
          justifyContent: "start",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit"
        }}
      >
        <span>
          {formattedDate} &mdash; by {post.author.node.name}
          {category && category.name !== "Uncategorized" && (
            <span> in {category.name}</span>
          )}
        </span>
      </a>

      <div
        className="blog-post"
        style={{
          width: "100%",
          margin: "20px 0",
        }}
      >

        <div
          className="main-post-content-container"
          style={{
            padding: "20px",
            marginBottom:"20px",
            marginTop:"20px",
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
              {data?.posts.nodes.map((post) => (
                <div
                  key={post.id}
                  className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8"
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
