// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body id="dark-mode">
        <svg id="ckLine" xmlns="http://www.w3.org/2000/svg"></svg>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
