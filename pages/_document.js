import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/style.css" id="main-css" />
        <link rel="stylesheet" href="/css/responsive.css" id="responsive-css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <body id="light-mode">
      
        <Main />
        <NextScript />
        <script src="/js/jquery-3.3.1.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/slick.min.js"></script>
        <script src="/js/line.min.js"></script>
        <script src="/js/particles.js"></script>
        <script src="/js/app.js"></script>
        <script src="/js/circular.js"></script>
        <script src="/js/custom.js"></script>
 
        
      </body>
    </Html>
  );
}
