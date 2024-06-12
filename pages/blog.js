import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CopyRight from "../components/copyright";


import Subcribe from "../components/subscribe";

export default function Blog() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Header />

      <Subcribe/>
      <footer>
        <Footer />
        <CopyRight />
      </footer>
      
    </>
  );
}
