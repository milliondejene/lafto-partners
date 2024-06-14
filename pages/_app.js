// pages/_app.js
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { useEffect } from 'react';
import { ThemeProvider } from '../lib/themeContext';
import '../styles/globals.css'; // Global styles

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const loadScript = (src, id, callback) => {
      if (!document.getElementById(id)) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.onload = callback;
        document.body.appendChild(script);
      }
    };

    const scripts = [
      { src: '/js/jquery-3.3.1.min.js', id: 'jquery' },
      { src: '/js/bootstrap.min.js', id: 'bootstrap' },
      { src: '/js/slick.min.js', id: 'slick' },
      { src: '/js/line.min.js', id: 'line' },
      { src: '/js/particles.js', id: 'particles' },
      { src: '/js/app.js', id: 'app' },
      { src: '/js/circular.js', id: 'circular' },
      { src: '/js/custom.js', id: 'custom' },
    ];

    scripts.forEach(({ src, id }) => loadScript(src, id));

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
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
