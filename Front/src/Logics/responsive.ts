import { useState, useEffect } from 'react';

export default (query: string, serverSideValue = false): boolean => {
  if (typeof window === 'undefined') {
    return serverSideValue;
  }

  const media = window.matchMedia(query);
  const [matches, setMatches] = useState(serverSideValue);

  useEffect(() => {
    setMatches(media.matches);

    const handler = () => {
      setMatches(media.matches);
    };

    media.addListener(handler);

    return () => {
      media.removeListener(handler);
    };

  }, []);

  return matches;
};
