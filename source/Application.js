import React from 'react';
import Eaglescope from './components/Eaglescope/Eaglescope';
import ConfigContextProvider from './contexts/ConfigContext';
import DataContextProvider from './contexts/DataContext';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

function APP({ overrideConfig, overrideData }) {
  const query = new URLSearchParams(window.location.search);
  const configUrl = query.get('configurl') || './config/wines.json';
  return (
    <ConfigContextProvider configName={configUrl} overrideConfig={overrideConfig}>
      <DataContextProvider overrideData={overrideData}>
        <Eaglescope />
      </DataContextProvider>
    </ConfigContextProvider>
  );
}

export default APP;
