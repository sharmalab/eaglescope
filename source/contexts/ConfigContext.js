import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

export const ConfigContext = createContext();

export default function ConfigContextProvider({ children, configName, overrideConfig }) {
  let configData;

  if (overrideConfig) {
    // If overrideConfig is provided, use it directly
    configData = {
      error: false,
      data: overrideConfig,
      isPending: false,
      setData: console.error,
    };
  } else {
    // Otherwise, fetch the data using useFetch
    const {
      error: configError,
      data: config,
      isPending: configLoading,
      setData: setConfig,
    } = useFetch(`${configName}`);

    configData = {
      error: configError,
      data: config,
      isPending: configLoading,
      setData: setConfig,
    };
  }

  const memoConfig = useMemo(
    () => ({
      configError: configData.error,
      config: configData.data,
      configLoading: configData.isPending,
      setConfig: configData.setData,
    }),
    [configData],
  );

  return <ConfigContext.Provider value={memoConfig}>{children}</ConfigContext.Provider>;
}

ConfigContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  configName: PropTypes.string.isRequired,
  overrideConfig: PropTypes.object, // Optional parameter to override configuration data
};

ConfigContextProvider.defaultProps = {
  overrideConfig: false,
};
