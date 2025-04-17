import React, {
  createContext, useContext, useEffect, useState, useRef, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { ConfigContext } from './ConfigContext';
import { updateURL, clearURL, initURL } from '../services/URLServices';

function filterData(data, filters) {
  return data.filter((record) => {
    for (let i = 0; i < filters.length; i++) {
      const filter = filters[i];
      const { operation } = filter;
      const val = record[filter.field];

      let broken = false;
      if (!broken && operation === 'eq') {
        broken = broken || val != filter.values;
      }
      if (!broken && operation === 'gt') {
        broken = broken || val <= filter.values;
      }
      if (!broken && operation === 'gte') {
        broken = broken || val < filter.values;
      }
      if (!broken && operation === 'lt') {
        broken = broken || val >= filter.values;
      }
      if (!broken && operation === 'lte') {
        broken = broken || val > filter.values;
      }
      if (!broken && operation === 'ne') {
        broken = broken || val === filter.values;
      }
      if (!broken && operation === 'in') {
        broken = broken || !filter.values.some((v) => val === v);
      }
      if (!broken && operation === 'nin') {
        broken = broken || filter.values.some((v) => val === v);
      }
      if (!broken && operation === 'has') {
        broken = broken || !(val && val.some((v) => filter.values === v));
      }
      if (!broken && operation === 'nhas') { // TODO test
        broken = broken || !(val && val.find((v) => filter.values === v));
      }
      if (!broken && operation === 'range') {
        broken = broken || filter.values[0] > val || filter.values[1] < val;
      }
      if (!broken && operation === 'search') {
        broken = broken || Object.values(record).join('|').indexOf(filter.values[0]) === -1;
      }
      if (broken) {
        return false;
      }
    }

    return true;
  });
}

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const { config } = useContext(ConfigContext);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const filtersRef = useRef();
  const [filters, setFilters] = useState([]);

  // Fetch data based on config values
  const {
    error: dataError, data: rawData, tables, lookup, variables,
  } = useFetch(config?.DATA_RESOURCE_URL, config?.DATA_FORMAT, config?.DATA_LOOKUP_URL);

  const [finalData, setFinalData] = useState(null);

  // Filter handler to add filters and update filteredData
  const addFiltersHandler = (toAddFilters) => {
    const oldFilters = [...filtersRef.current];
    let newFilters = oldFilters.filter((of) => toAddFilters.every((nf) => !(of.id === nf.id)));
    newFilters = [...newFilters, ...toAddFilters];
    const datasetAfterFilter = filterData(finalData, newFilters);
    setFilteredData(datasetAfterFilter);
    setFilters(newFilters);
    filtersRef.current = newFilters;
    updateURL(newFilters);
  };

  // Filter handler to remove filters
  const removeFiltersHandler = (id, isIndex = false) => {
    if (id === 'ALL') {
      setFilters([]);
      filtersRef.current = [];
      setFilteredData([]);
      clearURL();
      return;
    }
    const oldFilters = [...filtersRef.current];
    let newFilters = [];
    if (isIndex) {
      newFilters = oldFilters.filter((f, idx) => idx !== id);
    } else {
      newFilters = oldFilters.filter((of) => of.id !== id);
    }
    if (newFilters.length <= 0) {
      setFilters([]);
      filtersRef.current = [];
      setFilteredData([]);
      clearURL();
      return;
    }

    const datasetAfterFilter = filterData(finalData, newFilters);
    setFilteredData(datasetAfterFilter);
    setFilters(newFilters);
    filtersRef.current = newFilters;
    updateURL(newFilters);
  };

  // Merge lookup data if config.CONTEXT_URL is set
  const fetchAndMergeData = async () => {
    let res = rawData;
    if (config?.DATA_FIELD && res && res[config?.DATA_FIELD]) {
      res = res[config?.DATA_FIELD]; // Use the data field if it's set in the config
    }

    if (config?.DATA_LOOKUP_URL) {
      try {
        const lookup_response = await fetch(config.DATA_LOOKUP_URL, config);
        const lookup_data = await lookup_response.json();

        // Merge the lookup data into the main dataset
        res = res.map((item) => {
          const feature = lookup_data.find((f) => +f.properties.GEOID10 === item.STCNTY);
          return { ...item, ...feature, COUNTY: feature?.properties?.NAMELSAD10 };
        });
      } catch (error) {
        console.error('Error fetching lookup data:', error);
      }
    }

    return res;
  };

  useEffect(() => {
    const loadData = async () => {
      if (!rawData) return;

      // Fetch and process the data, then set it to state
      const processedData = await fetchAndMergeData();
      filtersRef.current = [];
      setFinalData(processedData); // Set the final merged data
      setFilteredData(processedData); // Set the filtered data initially
      initURL(addFiltersHandler, removeFiltersHandler);
      setLoading(false);
    };

    loadData();
  }, [rawData, lookup, tables, config]);

  const memoData = useMemo(
    () => ({
      dataError,
      data: finalData,
      // data: null,
      lookup,
      tables,
      variables,
      loading,
      filteredData,
      //filteredData: null,
      filters,
      addFiltersHandler,
      removeFiltersHandler,
    }),
    [filters, loading, dataError, finalData, tables, lookup, variables, filteredData],
  );

  // Conditional rendering: display loading state until data is ready
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other placeholder
  }

  return <DataContext.Provider value={memoData}>{children}</DataContext.Provider>;
}

DataContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
