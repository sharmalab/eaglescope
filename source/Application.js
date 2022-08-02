import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Eaglescope from './components/Eaglescope/Eaglescope';
import ConfigContextProvider from './contexts/ConfigContext';
import DataContextProvider from './contexts/DataContext';
import LoadingSpinner from './components/partials/LoadingSpinner';
import ErrorMsg from './components/partials/ErrorMsg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'; // <-- JS File

// style

function APP() {
  const { error, data: paths, isPending } = useFetch('../config/router.json');

  if (error) {
    return <ErrorMsg text="Error While Loading Paths" />;
  }
  // loading
  if (isPending) {
    return <LoadingSpinner text="Loading Paths ..." />;
  }
  //
  return (
    <Router>
      <Switch>
        {paths
          && paths.map((item) => (
            <Route
              key={item.path}
              path={[`/${item.path}`]}
              exact
              render={(routeProps) => (
                <ConfigContextProvider configName={item.config}>
                  <DataContextProvider>
                    <Eaglescope {...routeProps} />
                  </DataContextProvider>
                </ConfigContextProvider>
              )}
            />
          ))}
      </Switch>
    </Router>
  );
}

export default APP;
