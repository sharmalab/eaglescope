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


const useFetch = (url, type = 'json', context_url) => {
  console.log(`useFetch: ${url} - ${type} - ${context_url}`);
  const [data, setData] = useState(null);
  const [lookup, setLookup] = useState(null);
  const [tables, setTables] = useState(null);
  const [variables, setVariables] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const abortCont = new AbortController();

  useEffect(() => {
    async function fetchData(url) {
      const config = {
        signal: abortCont.signals,
        mode: 'cors',
        credentials: 'same-origin',
      };

      // Handle "local://" URLs
      if (url && url.startsWith('local://')) {
        const localKey = url.slice(8); // Remove the "local://" prefix
        try {
          const storedData = localStorage.getItem(`es-${localKey}`);
          if (storedData) {
            const parsedData = JSON.parse(storedData);
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
        console.info('ok');
        return () => abortCont.abort();
      }

      // if (!url) return () => abortCont.abort();
      // console.log(`useEffect: ${url} - ${type}`)
      // if (type === 'csv') {
      //   d3.csv(url, (d) => covertRaw(d)).then((res) => {

      //     setData(res);
      //     setIsPending(false);
      //     setError(null);
      //   });

      //   return () => abortCont.abort();
      // }

      const response = await fetch(url, config);
      let res = await response.json();

      // if (Array.isArray(res)) res = res.map((d) => covertRaw(d))
      

      if (!res.error) {
        console.log('res ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`` :', res);
        setData(res);
        // setLookup(lookup_data)
        // setTables(constraints)
        // setVariables(constraintVals)
        setIsPending(false);
        setError(null);
      } else {
        throw Error(res.error);
      }

      setIsPending(false);

      // if (!url) return () => abortCont.abort();
      // console.log(`useEffect: ${url} - ${type}`)
      // if (type === 'csv') {
      //   d3.csv(url, (d) => covertRaw(d)).then((res) => {

      //     setData(res);
      //     setIsPending(false);
      //     setError(null);
      //   });

      //   return () => abortCont.abort();
      // }

      // You can await here
      // const response = await MyAPI.getData(someId);
      // ...
    }

    fetchData(url);

    // const rs = await Promise.all([

    // fetch(urlCounties, newConfig),
    // fetch(urlTables, newConfig),
    // fetch(urlPlaceTypes, newConfig),
    // fetch(urlExPlaceTypes, newConfig),
    // fetch(urlVariables, newConfig),
    // ])//.then(x=>x.json())
    // .then(resp => {
    //    const d = resp[0];
    // const counties = resp[1];
    // const tables = resp[2];
    // const places = resp[3];
    // const exPlaces = resp[4];
    // const variables = resp[5]

    //    console.log(d)

    // setResp1(response1);
    // setResp2(response2);
    // })

    // fetch(url, config)
    //   .then(
    //     (x) => x.json()
    //   )
    //   .then((res) => {
    //     console.log('useFetch:');
    //     console.log(res);

    //   })
    //   .catch((err) => {
    //     if (err.name !== 'AbortError') {
    //       setIsPending(false);
    //       setError(err);
    //     }
    //   });

    return () => abortCont.abort();
  }, [url]);

  return {
    error,
    data,
    lookup,
    tables,
    variables,
    isPending,
    setData,
    setLookup,
    setTables,
    setVariables,
  };
};

export default useFetch;
