import React, { createContext, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

export const ConfigContext = createContext();

export default function ConfigContextProvider({ children, configName }) {
  const {
    error: configError,
    data: config,
    isPending: configLoading,
    setData: setConfig,
    fetchData,
  } = useFetch(`${configName}`);

  const [loading, setLoading] = useState(true);

  // If config is set and not in the loading state, mark as complete
  useEffect(() => {
    if (config !== null && !configLoading) {
      setLoading(false);
    }
  }, [config, configLoading]);

  const memoConfig = useMemo(
    () => ({
      configError,
      config,
      loading, // Use loading state based on the logic above
      setConfig,
      fetchData,
    }),
    [config, loading, configError],
  );

  // Render nothing or a loading spinner while loading
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or placeholder
  }

  return <ConfigContext.Provider value={memoConfig}>{children}</ConfigContext.Provider>;
}

ConfigContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
  configName: PropTypes.string.isRequired,
};
