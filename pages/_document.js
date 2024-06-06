import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body id="dark-mode">
        <svg id="ckLine" xmlns="http://www.w3.org/2000/svg"></svg>
        <Main />
        <NextScript />

        {/* Including scripts */}
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/line.min.js"></script>
        <script src="js/particles.js"></script>
        <script src="js/app.js"></script>
        <script src="js/circular.js"></script>
        <script src="js/custom.js"></script>
        <script src="js/slick.min.js"></script>

   
      </body>
    </Html>
  );
}
