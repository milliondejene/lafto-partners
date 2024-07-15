import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" id="main-css" />
        <link rel="stylesheet" href="/css/responsive.css" id="responsive-css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="description" content="Creating value through bespoke Ethiopian stories" />
          <meta name="keywords" content="Lafto Partners, Ethiopian stories, bespoke stories" />
          <meta name="author" content="Lafto Partners" />
          <meta property="og:title" content="Lafto Partners" />
          <meta property="og:description" content="Creating value through bespoke Ethiopian stories" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lafto.partners/" />
          <meta property="og:image" content="https://milliondejene.github.io/lafto-partners/public/images/banner.png" /> {/* Replace with your actual Open Graph image URL */}
      
      </Head>
      <body id="light-mode">
      
        <Main />
        <NextScript />
     
      </body>
    </Html>
  );
}
