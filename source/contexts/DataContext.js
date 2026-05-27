import React, {
  createContext, useContext, useEffect, useState, useRef, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { ConfigContext } from './ConfigContext';
import { updateURL, clearURL, initURL } from '../services/URLServices';
import { loadVisConfigs } from '../common/localDataRegistry';

function buildSearchIndex(data) {
  return data.map((r) => Object.values(r).join('|').toLowerCase());
}

function filterData(data, filters, searchIndex) {
  return data.filter((record, rowIdx) => {
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
      if (!broken && operation === 'has') {
        broken = broken || !(val && val.some((v) => filter.values === v));
      }
      if (!broken && operation === 'nhas') {
        broken = broken
          || !(val && Array.isArray(val) && val.some((v) => filter.values.includes(v)));
      }
      if (!broken && operation === 'range') {
        broken = broken || filter.values[0] > val || filter.values[1] < val;
      }
      // search operates on the whole record instead of val
      if (!broken && operation === 'search') {
        const needle = String(filter.values[0]).toLowerCase();
        const haystack = searchIndex ? searchIndex[rowIdx] : Object.values(record).join('|').toLowerCase();
        broken = !haystack.includes(needle);
      }
      if (broken) {
        return false;
      }
    }

    return true;
  });
}

export const DataContext = createContext();

export default function DataContextProvider({ children, overrideData }) {
  const { config, setConfig } = useContext(ConfigContext);

  // On first config load, apply ?localdata= URL param to DATA_RESOURCE_URL + restore vis configs
  const localDataPatched = useRef(false);
  useEffect(() => {
    if (localDataPatched.current || !config) return;
    const localDataKey = new URLSearchParams(window.location.search).get('localdata');
    if (!localDataKey) return;
    localDataPatched.current = true;
    const visConfigs = loadVisConfigs(localDataKey);
    setConfig((prev) => {
      const next = { ...prev, DATA_RESOURCE_URL: `local://${localDataKey}` };
      if (visConfigs?.length > 0) {
        next.VISUALIZATION_VIEW_CONFIGURATION = [
          ...(prev.VISUALIZATION_VIEW_CONFIGURATION || []).filter((v) => !v.id.startsWith('rec-')),
          ...visConfigs,
        ];
      }
      return next;
    });
  }, [config, setConfig]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const filtersRef = useRef();
  const [filters, setFilters] = useState([]);
  let data;
  let dataError;
  if (overrideData) {
    data = overrideData;
  } else {
    const { error, data: fetchedData } = useFetch(config?.DATA_RESOURCE_URL, config?.DATA_FORMAT);
    dataError = error;
    data = fetchedData;
  }

  const searchIndex = useMemo(() => (data ? buildSearchIndex(data) : []), [data]);

  const addFiltersHandler = (toAddFilters) => {
    const oldFilters = filtersRef.current || [];
    const idsToRemove = new Set(toAddFilters.map((nf) => nf.id));
    const newFilters = [
      ...oldFilters.filter((of) => !idsToRemove.has(of.id)),
      ...toAddFilters,
    ];
    const datasetAfterFilter = filterData(data, newFilters, searchIndex);
    setFilteredData(datasetAfterFilter);
    setFilters(newFilters);
    filtersRef.current = newFilters;

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

    const datasetAfterFilter = filterData(data, newFilters, searchIndex);
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
    [filters, loading, dataError, data, filteredData],
  );

  return <DataContext.Provider value={memoData}>{children}</DataContext.Provider>;
}

DataContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
  overrideData: PropTypes.object, // Optional parameter to override configuration data
};

DataContextProvider.defaultProps = {
  overrideData: false,
};
