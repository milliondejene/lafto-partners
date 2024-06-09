import { useEffect } from 'react';
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
    };

    const scripts = [
      { src: '/js/jquery-3.3.1.min.js', id: 'jquery' },
      { src: '/js/bootstrap.min.js', id: 'bootstrap' },
      { src: '/js/slick.min.js' },
      { src: '/js/line.min.js' },
      { src: '/js/particles.js', id: 'particles' },
      { src: '/js/app.js', id: 'app' },
      { src: '/js/circular.js', id: 'circular' },
      { src: '/js/custom.js', id: 'custom' },
    ];

    scripts.forEach(({ src, id }) => loadScript(src, id));

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

    // Load custom script after jQuery is loaded
    document.getElementById('jquery').onload = loadCustomScript;

    // Cleanup function
    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
