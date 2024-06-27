// components/SmoothScroll.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SmoothScroll = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 65,
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('.navbar a, .scroll-down a, .backtotop a');
    links.forEach((link) => link.addEventListener('click', handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleScroll));
    };
  }, [router]);

  return null;
};

export default SmoothScroll;
