import React from 'react';
import Eaglescope from './components/Eaglescope/Eaglescope';
import ConfigContextProvider from './contexts/ConfigContext';
import DataContextProvider from './contexts/DataContext';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'; // <-- JS File

// style

function APP() {
  const query = new URLSearchParams(window.location.search);
  const configUrl = query.get('configurl') || './config/collection-vis-config.json';

  //
  return (
    <ConfigContextProvider configName={configUrl}>
      <DataContextProvider>
        <Eaglescope />
      </DataContextProvider>
    </ConfigContextProvider>
  );
}

export default APP;
