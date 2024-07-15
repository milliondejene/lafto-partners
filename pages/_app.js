import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../lib/themeContext';
import Script from 'next/script';
import Preloader from '../components/Preloader';
import { Bitter } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';

const bitter = Bitter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadParticlesScript = () => {
      const script = document.createElement('script');
      script.src = '/js/particles.js';
      script.id = 'particles-js';
      script.async = true;
      script.onload = () => {
        // Wait until the particles.js script is fully loaded and initialized
        setLoading(false);
      };
      document.body.appendChild(script);
    };

    const handleRouteChange = () => {
      setLoading(true);
      if (!initialized) {
        setInitialized(true);
        loadParticlesScript();
      } else {
        setLoading(false);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChange);

    handleRouteChange();

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, initialized]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <link rel="icon" href="/favicon.ico" />
        <title>Lafto Partners</title>
        {loading && <Preloader />}
        {!loading && (
          <main className={bitter.className}>
            <Component {...pageProps} />
          </main>
        )}
        <Script src="/js/app.js" strategy="lazyOnload" />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
