import { useState, useEffect } from 'react';

const UseMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia(query);
    if (mediaWatcher.matches !== matches) {
      setMatches(mediaWatcher.matches);
    }
    //watch for updates
    const updateMatches = () => {
      setMatches(mediaWatcher.matches);
    };
    mediaWatcher.addEventListener('change', updateMatches);
    // clean up
    return () => {
      mediaWatcher.removeEventListener('change', updateMatches);
    };
  }, [matches, query]);
  return matches;
};

export default UseMediaQuery;