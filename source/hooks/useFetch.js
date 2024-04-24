import { useEffect, useState } from 'react';
import * as d3 from 'd3';

function isNumeric(str) {
  if (typeof str !== 'string') return false; // we only process strings!
  return (
    !Number.isNaN(str)
    // use type coercion to parse the _entirety_ of the string
    // (`parseFloat` alone does not do this)...
    && !Number.isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
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

  const abortCont = new AbortController();

  useEffect(() => {
    const config = {
      signal: abortCont.signals,
      mode: 'cors',
      credentials: 'same-origin',
    };

    if (!url) return () => abortCont.abort();

    if (type === 'csv') {
      d3.csv(url, (d) => covertRaw(d)).then((res) => {
        setData(res);
        setIsPending(false);
        setError(null);
      });

      return () => abortCont.abort();
    }
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
  }, [url]);

  return {
    error,
    data,
    isPending,
    setData,
  };
};

export default useFetch;
