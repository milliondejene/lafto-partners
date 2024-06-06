import "../styles/globals.css"; // import global styles here
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Include jQuery and Bootstrap JavaScript here
    const loadScript = (src, async = true) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = async;
      document.body.appendChild(script);
      return script;
    };

    const scripts = [
      "js/jquery-3.3.1.min.js",
      "js/bootstrap.min.js",
      "js/slick.min.js",
      "js/line.min.js",
      "js/particles.js",
      "js/app.js",
      "js/circular.js",
      "js/custom.js",
    ];

    const scriptElements = scripts.map(src => loadScript(src));

    // Cleanup function
    return () => {
      // Remove the appended scripts
      scriptElements.forEach(script => {
        document.body.removeChild(script);
      });
    };
  }, []);

  useEffect(() => {
    // Execute custom script after the SVG element is loaded
    const customScriptContent = `
      "use strict";
      $('#ckLine').ready(function() {
        $('#ckLine').ckLine({
          strokeColor: "#1d1d1d",
          strokeWidth: 1,
          leftRight: true,
          easing: 'swing',
          interval: 80,
        });
      });
    `;
    const customScript = document.createElement("script");
    customScript.type = "text/javascript";
    customScript.innerHTML = customScriptContent;
    document.body.appendChild(customScript);

    // Cleanup function to remove the custom script
    return () => {
      document.body.removeChild(customScript);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Lafto Partners</title>
        {/* Font Awesome icons link */}
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        {/* Main style file */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
