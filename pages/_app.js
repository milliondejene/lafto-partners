import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../lib/themeContext';
import Script from 'next/script';
import Preloader from '../components/Preloader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadScripts = [
'/js/particles.js',
    ];

    const handleRouteChange = () => {
      setLoading(true);
      loadScripts.forEach(src => {
        const scriptId = src.split('/').pop();
        if (!document.getElementById(scriptId)) {
          const script = document.createElement('script');
          script.src = src;
          script.id = scriptId;
          script.async = true;
          document.body.appendChild(script);
        }
      });
      setTimeout(() => setLoading(false), 3000);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChange);

    handleRouteChange();

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        {loading && <Preloader />}
        <Script src="/js/particles.js" strategy="lazyOnload" />
        <Script src="/js/app.js" strategy="lazyOnload" />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
