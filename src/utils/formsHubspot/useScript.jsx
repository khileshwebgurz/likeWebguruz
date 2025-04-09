import { useEffect, useState } from 'react';

const useScript = (src) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;

    // Set script.onload to true after script has fully loaded
    script.onload = () => {
      setIsLoaded(true);
    };

    // Append script to document body
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return isLoaded;
};

export default useScript;
