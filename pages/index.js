import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CopyRight from "../components/copyright";
import Feature from "../components/feature";
import Banner from "../components/banner";
import About from "../components/about";
import Gallery from "../components/gallery";
import Product from "../components/products"
import Team from '../components/team';
import Pricing from "../components/pricing";
import Review from "../components/review";
import Contact from "../components/contact";
import Blog from "../components/blog";
import Subcribe from "../components/subscribe";

export default function Home() {
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
      <About/>
      <Gallery/>
      <Product/>
      <Team/>
      <Pricing/>
      <Review/>
      <Contact/>
      
      <Blog/>
      <Subcribe/>
      <footer>
        <Footer />
        <CopyRight />
      </footer>
      
    </>
  );
}
