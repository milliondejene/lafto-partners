import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CopyRight from "../components/copyright";
import Feature from "../components/feature";
import Banner from "../components/banner";
import About from "../components/about";
import Gallery from "../components/gallery";
import Product from "../components/products";
import Team from "../components/team";
import Review from "../components/review";
import Contact from "../components/contact";
import Blog from "../components/BlogList";
import Subcribe from "../components/subscribe";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize scripts or plugins here (if needed)
    // Example: $(".some-element").slick({ settings });
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
      <Subcribe />
      <footer>
        <Footer />
        <CopyRight />
      </footer>
    </>
  );
};

export default Home;
