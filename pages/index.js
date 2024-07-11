import { useEffect, useState, Suspense, memo } from "react";
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

const FooterMemo = memo(Footer);
const CopyRightMemo = memo(CopyRight);

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="main-container">
      <Header />
      <Suspense fallback={<div>Loading Banner...</div>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div>Loading Feature...</div>}>
        <Feature />
      </Suspense>
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading Gallery...</div>}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div>Loading Product...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading Team...</div>}>
        <Team />
      </Suspense>
      <Suspense fallback={<div>Loading Review...</div>}>
        <Review />
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Loading Blog...</div>}>
        <Blog />
      </Suspense>
      <Suspense fallback={<div>Loading Subscribe...</div>}>
        <Subscribe />
      </Suspense>
      <footer>
        <FooterMemo />
        <CopyRightMemo />
      </footer>
    </div>
  );
};

export default Home;
