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
  console.log(`useFetch: ${url} - ${type} - ${context_url}`)
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

      
      // Create the Basic Auth credentials
      const username = 'Nan'
      const password = 'MaternalHealth'
      const credentials = btoa(`${username}:${password}`); // btoa encodes to Base64

      const urlCounties = `http://localhost:5000/GAcounties`
      const urlTables = `http://localhost:5000/Tables`
      const urlPlaceTypes = `https://${username}:${password}@localhost:5000/PlaceTypes`
      const urlExPlaceTypes = `https://${username}:${password}@localhost:5000/ExPlaceTypes`
      const urlVariables = `http://localhost:5000/Variables`

      const urlConstraintProp = `http://localhost:5000/ConstraintProp`
      const urlConstraintPropVals = `http://localhost:5000/ConstraintPropVals?ConstraintPropID=2`

      const newConfig = {
        method: "GET",
        // mode: 'no-cors',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json'
        }
      }      

      
     


      // var counties  = await fetch(urlCounties, newConfig)
      // console.log('counties')
      // counties = await counties.json();
      // // console.log(counties)
      // console.log(counties)
      // setTables
      
      // get all table name
      // var tables  = await fetch(urlTables, newConfig)
      // tables = await tables.json();
      // console.log('tables')
      // console.log(tables)
      

      // var places  = await fetch(urlPlaceTypes, newConfig)
      // places = await places.json();
      // console.log(places)

      // var explaces  = await fetch(urlExPlaceTypes, newConfig)
      // explaces = await response.json();
      // console.log(explaces)

      // get all variables name
      // var variables  = await fetch(urlVariables, newConfig)
      // variables = await variables.json();
      // console.log('variables')
      // console.log(variables)
      // setVariables(variables)

      // var constraints  = await fetch(urlConstraintProp, newConfig)
      // constraints = await constraints.json();
      // console.log('constraints')
      // console.log(constraints)

      // var constraintVals  = await fetch(urlConstraintPropVals, newConfig)
      // constraintVals = await constraintVals.json();
      // console.log('constraintVals')
      // console.log(constraintVals)
      // setVariables(variables)

      const response  = await fetch(url, config)
      let res = await response.json();
      
      // if (Array.isArray(res)) res = res.map((d) => covertRaw(d))
      let lookup_data = null
      if(context_url) {
        const lookup_response  = await fetch(context_url, config)
        lookup_data = await lookup_response.json();
        // merge data
        res = res.map(item => {
          const feature = lookup_data.find(f => +f.properties.GEOID10 === item.STCNTY);

          return {...item,...feature,'COUNTY':feature.properties.NAMELSAD10}
        })
      }
      
      console.log(res)

      if (!res.error) {
        console.log('res ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`` :')
        console.log(res)
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





    //const rs = await Promise.all([
  
      // fetch(urlCounties, newConfig),
      // fetch(urlTables, newConfig),
      // fetch(urlPlaceTypes, newConfig),
      // fetch(urlExPlaceTypes, newConfig),
      // fetch(urlVariables, newConfig),
    //])//.then(x=>x.json())
    //.then(resp => {
    //    const d = resp[0];
        // const counties = resp[1];
        // const tables = resp[2];
        // const places = resp[3];
        // const exPlaces = resp[4];
        // const variables = resp[5]
      
    //    console.log(d)
        

        // setResp1(response1);
        // setResp2(response2);
    //})

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
    setVariables
  };
};

export default useFetch;
