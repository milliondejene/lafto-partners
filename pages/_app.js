// pages/_app.js
import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '../lib/themeContext';
import '../styles/globals.css'; // Global styles

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const loadScript = (src, id, callback) => {
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.async = true;
      script.onload = callback;
      document.body.appendChild(script);
      return script;
    };

    const scripts = [
      { src: "js/jquery-3.3.1.min.js" },
      { src: "js/bootstrap.min.js"},
      { src: "js/slick.min.js"},
      { src: "js/line.min.js"},
      { src: "js/particles.js"},
      { src: "js/app.js"},
      { src: "js/circular.js", id: "circular" },
      { src: "js/custom.js"},
    ];

    const scriptElements = scripts.map(({ src, id }) => loadScript(src, id, () => {
      if (id === 'jquery') {
        loadCustomScript();
      }
    }));

    const loadCustomScript = () => {
      const customScriptContent = `
        "use strict";
        $(document).ready(function() {
          $('#ckLine').ckLine({
            strokeColor: "#1d1d1d",
            strokeWidth: 1,
            leftRight: true,
            easing: 'swing',
            interval: 80,
          });
        });
      `;
      const customScript = document.createElement('script');
      customScript.type = 'text/javascript';
      customScript.innerHTML = customScriptContent;
      document.body.appendChild(customScript);
    };

    // Cleanup function
    return () => {
      scriptElements.forEach(script => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Lafto Partners</title>
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/style.css" id="main-css" />
        <link rel="stylesheet" href="/css/responsive.css" id="responsive-css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
