import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import CopyRight from "../components/copyright";

const Feature = dynamic(() => import("../components/feature"), { ssr: false });
const Banner = dynamic(() => import("../components/banner"), { ssr: false });
const About = dynamic(() => import("../components/about"), { ssr: false });
const Gallery = dynamic(() => import("../components/gallery"), { ssr: false });
const Product = dynamic(() => import("../components/products"), { ssr: false });
const Team = dynamic(() => import("../components/team"), { ssr: false });
const Review = dynamic(() => import("../components/review"), { ssr: false });
const Contact = dynamic(() => import("../components/contact"), { ssr: false });
const Blog = dynamic(() => import("../components/BlogList"), { ssr: false });
const Subscribe = dynamic(() => import("../components/subscribe"), { ssr: false });

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <About />
      <Gallery />
      <Product />
      <Team />
      <Review />
      <Contact />
      <Blog />
      <Subscribe />
      <footer>
        <Footer />
        <CopyRight />
      </footer>
    </>
  );
};

export default Home;
