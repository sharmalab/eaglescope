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
        broken = broken || val !== filter.values;
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
      if (!broken && operation === 'range') {
        broken = broken || filter.values[0] > val || filter.values[1] < val;
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
  const { error: dataError, data } = useFetch(config?.DATA_RESOURCE_URL, config?.DATA_FORMAT);

  const addFiltersHandler = (toAddFilters) => {
    const oldFilters = [...filtersRef.current];
    // remove first
    let newFilters = oldFilters.filter((of) => toAddFilters.some((nf) => !(of.id === nf.id)));
    // add
    newFilters = [...newFilters, ...toAddFilters];
    // do filter
    const datasetAfterFilter = filterData(data, newFilters);
    setFilteredData(datasetAfterFilter);
    setFilters(newFilters);
    filtersRef.current = newFilters;

    // handle url
    updateURL(newFilters);
  };

  const removeFiltersHandler = (id, isIndex = false) => {
    // remove all filter
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

    const datasetAfterFilter = filterData(data, newFilters);
    setFilteredData(datasetAfterFilter);
    setFilters(newFilters);
    filtersRef.current = newFilters;

    // handle url
    updateURL(newFilters);
  };

  useEffect(() => {
    if (!data) return;
    filtersRef.current = [];
    setFilteredData(data);
    initURL(addFiltersHandler, removeFiltersHandler);
    setLoading(false);
  }, [data]);

  const memoData = useMemo(
    () => ({
      dataError,
      data,
      loading,
      filteredData,
      filters,
      addFiltersHandler,
      removeFiltersHandler,
    }),
    [filters, loading, dataError],
  );

  return <DataContext.Provider value={memoData}>{children}</DataContext.Provider>;
}

DataContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
