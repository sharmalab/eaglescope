import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

export const ConfigContext = createContext();

export default function ConfigContextProvider({ children, configName }) {
  const {
    error: configError,
    data: config,
    isPending: configLoading,
    setData: setConfig,
  } = useFetch(`${configName}`);

  const memoConfig = useMemo(
    () => ({
      configError,
      config,
      configLoading,
      setConfig,
    }),
    [config, configLoading, configError],
  );

  return <ConfigContext.Provider value={memoConfig}>{children}</ConfigContext.Provider>;
}

ConfigContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
  configName: PropTypes.string.isRequired,
};
