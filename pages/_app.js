import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../lib/themeContext';
import '../styles/globals.css'; // Global styles

function loadScript(src, id, callback) {
  if (!document.getElementById(id)) {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.async = true;
    script.onload = callback;
    document.body.appendChild(script);
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
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

    const loadAllScripts = () => {
      scripts.forEach(({ src, id }) => loadScript(src, id));
    };

    // Load scripts on initial mount
    loadAllScripts();

    // Load scripts on route change complete
    const handleRouteChange = () => {
      loadAllScripts();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup function
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
