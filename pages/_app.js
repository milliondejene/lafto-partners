// pages/_app.js
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../lib/themeContext';
import Script from 'next/script';
import Preloader from '../components/Preloader';
import '../styles/globals.css'; // Global styles

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scriptsToLoad = [
      '/js/jquery-3.3.1.min.js',
      '/js/bootstrap.min.js',
      '/js/slick.min.js',
      '/js/line.min.js',
      '/js/particles.js',
      '/js/app.js',
      '/js/circular.js',
      '/js/custom.js'
    ];

    const loadScriptsOnRouteChange = () => {
      scriptsToLoad.forEach(src => {
        const scriptId = src.split('/').pop();
        if (!document.getElementById(scriptId)) {
          const script = document.createElement('script');
          script.src = src;
          script.id = scriptId;
          script.async = true;
          document.body.appendChild(script);
        }
      });
    };

    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
      loadScriptsOnRouteChange();
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Initial script load and initial preloader delay
    loadScriptsOnRouteChange();
    const initialLoadTimer = setTimeout(() => setLoading(false), 2000);

    // Cleanup function
    return () => {
      clearTimeout(initialLoadTimer);
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      scriptsToLoad.forEach(src => {
        const scriptId = src.split('/').pop();
        const script = document.getElementById(scriptId);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        {loading && <Preloader />}
        <Script src="/js/jquery-3.3.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/slick.min.js" strategy="lazyOnload" />
        <Script src="/js/line.min.js" strategy="lazyOnload" />
        <Script src="/js/particles.js" strategy="lazyOnload" />
        <Script src="/js/app.js" strategy="lazyOnload" />
        <Script src="/js/circular.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
