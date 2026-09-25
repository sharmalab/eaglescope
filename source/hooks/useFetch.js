import { useEffect, useState } from 'react';
import * as d3 from 'd3';

function isNumeric(str) {
  return typeof str === 'string' && /^[+-]?(?:\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(str);
}

function isBoolean(str) {
  return str === 'true' || str === 'false';
}

// Infer types per column rather than per cell, so an id column holding values
// like "6E45" or "4E11" alongside "A1B2" stays text instead of turning those
// cells into 6e45 / 400000000000. A column is only converted when every
// non-empty value in it qualifies. Columns listed in stringFields are never
// converted (for id columns where every value happens to look numeric).
function convertColumns(rows, stringFields = []) {
  if (!rows.length) return rows;
  const skip = new Set(stringFields);
  const columns = rows.columns || Object.keys(rows[0]);
  columns.forEach((key) => {
    if (skip.has(key)) return;
    const values = rows.map((r) => r[key]).filter((v) => v !== '' && v != null);
    if (!values.length) return;
    if (values.every(isNumeric)) {
      rows.forEach((r) => {
        if (isNumeric(r[key])) r[key] = +r[key];
      });
    } else if (values.every(isBoolean)) {
      rows.forEach((r) => {
        if (isBoolean(r[key])) r[key] = r[key] === 'true';
      });
    }
  });
  return rows;
}

const useFetch = (url, type = 'json', stringFields = []) => {
  const stringFieldsKey = stringFields.join('\u0000');
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

      if (type === 'csv' && url.endsWith('.csv')) {
        // Cache Storage API is only available in secure contexts (https or
        // localhost); on a plain http origin `caches` is undefined and
        // `caches.open()` throws before any request is made.
        const cacheAvailable = typeof caches !== 'undefined';

        try {
          let cache = null;

          if (cacheAvailable) {
            // v2: typing moved to per-column; ignore entries parsed the old way.
            cache = await caches.open('csv-cache-v2');
            const cachedResponse = await cache.match(url);
            const cachedLastModified = await cache.match(`${url}-last-modified`);

            // If cached data exists, check if it's up to date using ETag or Last-Modified
            if (cachedResponse && cachedLastModified) {
              const lastModified = cachedLastModified.headers.get('Last-Modified');

              // Fetch headers only using the HEAD request
              const headResponse = await fetch(url, { ...config, method: 'HEAD' });
              const newLastModified = headResponse.headers.get('Last-Modified');

              if (lastModified === newLastModified) {
                const cachedData = await cachedResponse.json();
                setData(cachedData);
                setIsPending(false);
                setError(null);
                return;
              }
            }
          }

          // Fetch fresh data if it's not cached, outdated, or caching is unavailable
          const csvData = convertColumns(await d3.csv(url), stringFields);
          setData(csvData);
          setIsPending(false);
          setError(null);

          if (cacheAvailable) {
            // Cache the fresh data along with ETag and Last-Modified headers
            const responseToCache = new Response(JSON.stringify(csvData));
            await cache.put(url, responseToCache);

            // Now use HEAD request to get only the headers
            const headResponse = await fetch(url, { ...config, method: 'HEAD' });
            const etag = headResponse.headers.get('ETag');
            const lastModified = headResponse.headers.get('Last-Modified');

            // Only cache headers if they exist
            if (etag) {
              const etagResponse = new Response(null, { headers: { ETag: etag } });
              await cache.put(`${url}-etag`, etagResponse);
            }
            if (lastModified) {
              const lastModifiedResponse = new Response(null, { headers: { 'Last-Modified': lastModified } });
              await cache.put(`${url}-last-modified`, lastModifiedResponse);
            }
          }

        } catch (err) {
          if (err.name !== 'AbortError') {
            console.error('useFetch (csv) failed:', err);
            setIsPending(false);
            setError(err);
          }
        }

        return () => abortCont.abort();
      } else {

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
              console.error('useFetch (json) failed:', err);
              setIsPending(false);
              setError(err);
            }
          });

        return () => abortCont.abort();
      };
    }

    fetchData();

    return () => abortCont.abort();
    // stringFieldsKey stands in for stringFields so a new array with the same
    // contents doesn't refetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, type, stringFieldsKey]);

  return {
    error,
    data,
    isPending,
    setData,
  };
};

export default useFetch;
