import { useEffect, useState } from 'react';
import * as d3 from 'd3';

function isNumeric(str) {
  return typeof str === 'string' && /^[+-]?(?:\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(str);
}

function covertRaw(elt) {
  Object.keys(elt).forEach((key) => {
    const raw = elt[key];
    if (isNumeric(raw)) {
      elt[key] = +raw;
    } else if (raw === 'true' || raw === 'false') {
      elt[key] = raw === 'true';
    }
  });
  return elt;
}

const useFetch = (url, type = 'json') => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const config = {
      signal: abortCont.signal,
      mode: 'cors',
      credentials: 'same-origin',
    };

    const fetchData = async () => {
      if (!url) return;


      // Handle "local://" URLs
      if (url.startsWith('local://')) {
        const localKey = url.slice(7); // Remove the "local://" prefix
        try {
          const storedData = localStorage.getItem("es-" + localKey);
          if (storedData) {
            const parsedData = JSON.parse(storedData); // Assuming stored data is JSON
            setData(parsedData);
            setIsPending(false);
            setError(null);
          } else {
            throw new Error(`No data found for key: ${localKey}`);
          }
        } catch (err) {
          setIsPending(false);
          setError(err);
        }
        return () => abortCont.abort();
      }

      if (type === 'csv' && url.endsWith('.csv')) {
        try {
          const cache = await caches.open('csv-cache');
          const cachedResponse = await cache.match(url);
          const cachedLastModified = await cache.match(`${url}-last-modified`);

          // If cached data exists, check if it's up to date using Last-Modified
          if (cachedResponse && cachedLastModified) {
            const lastModified = cachedLastModified.headers.get('Last-Modified');

            // Fetch headers only using the HEAD request
            const headResponse = await fetch(url, { ...config, method: 'HEAD' });
            const newLastModified = headResponse.headers.get('Last-Modified');

            // Compare if the Last-Modified is different
            console.log('cache', lastModified, newLastModified);
            if (lastModified === newLastModified) {
              const cachedData = await cachedResponse.json();
              setData(cachedData);
              setIsPending(false);
              setError(null);
              return;
            }
          }
          console.log('cache fail', cachedLastModified);

          // Fetch fresh data if it's not cached or is outdated
          const csvData = await d3.csv(url, covertRaw);
          setData(csvData);
          setIsPending(false);
          setError(null);

          // Cache the fresh data along with the Last-Modified header
          const responseToCache = new Response(JSON.stringify(csvData));
          await cache.put(url, responseToCache);

          // Now use HEAD request to get only the headers
          const headResponse = await fetch(url, { ...config, method: 'HEAD' });
          const lastModified = headResponse.headers.get('Last-Modified');
          if (lastModified) {
            const lastModifiedResponse = new Response(null, { headers: { 'Last-Modified': lastModified } });
            await cache.put(`${url}-last-modified`, lastModifiedResponse);
          }
        } catch (err) {
          if (err.name !== 'AbortError') {
            setIsPending(false);
            setError(err);
          }
        }

        return () => abortCont.abort();
      }

      // For non-CSV data (JSON or other types)
      fetch(url, config)
        .then((x) => x.json())
        .then((res) => {
          if (!res.error) {
            setData(res);
            setIsPending(false);
            setError(null);
          } else {
            throw Error(res.error);
          }
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            setIsPending(false);
            setError(err);
          }
        });

      return () => abortCont.abort();
    };

    fetchData();

    return () => abortCont.abort();
  }, [url, type]);

  return {
    error,
    data,
    isPending,
    setData,
  };
};

export default useFetch;
