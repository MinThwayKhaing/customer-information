import { useState, useEffect, useMemo } from 'react';
import { Page } from '../types';

// A simple hook for hash-based routing.
// It parses the page, userId, and key from the hash path (e.g., #/user/some-id/location?key=abc123).
export const useHashRouter = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const { page, params } = useMemo(() => {
    // Remove the hash symbol
    const path = hash.slice(1); // e.g., /user/123/info?key=abc
    const [rawPath, queryString] = path.split('?');
    const parts = rawPath.split('/').filter(Boolean);

    let currentPage: Page = 'location'; // Default page
    let userId = 'default-user';        // Default userId
    let key = '';                       // Default key (empty)

    if (parts[0] === 'user' && parts.length > 1) {
      userId = parts[1];
if (parts.length > 2 && (parts[2] === 'location' || parts[2] === 'info' || parts[2] === 'install')) {
  currentPage = parts[2] as Page;
}

    }

    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      key = searchParams.get('key') || '';
    }

    return {
      page: currentPage,
      params: { userId, key },
    };
  }, [hash]);

  // Redirect to default route if invalid
  useEffect(() => {
    const path = hash.slice(1);
    const parts = path.split('/').filter(Boolean);

    if (parts.length === 0 || parts[0] !== 'user') {
      const searchParams = new URLSearchParams(window.location.search);
      const userId = searchParams.get('userId') || 'default-user';
      window.location.hash = `#/user/${userId}/location`;
    }
  }, [hash]);

  return { page, params };
};
