import React, { useState, useEffect, useContext } from 'react';
import VisGridView from '../Layout/VisGridView/VisGridView';
import VisFullScreenView from '../Layout/VisFullScreenView/VisFullScreenView';
import ESNavbar from '../ESNavbar/ESNavbar';
import FilterOperationPanel from '../FilterOperationPanel/FilterOperationPanel';
import { ConfigContext } from '../../contexts/ConfigContext';
import { DataContext } from '../../contexts/DataContext';
import LoadingSpinner from '../partials/LoadingSpinner';
import ErrorMsg from '../partials/ErrorMsg';
import SearchBar from '../SearchBar';

function Eaglescope() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenVis, setFullScreenVis] = useState(null);
  const { config, configLoading, configError } = useContext(ConfigContext);
  const {
    data,
    loading,
    filteredData,
    filters,
    removeFiltersHandler,
    addFiltersHandler,
    dataError,
  } = useContext(DataContext);

  const fullScreenHandler = (id, fullScreened) => {
    setFullScreenVis(id);
    setIsFullScreen(fullScreened);
  };

  const [progressAttrs, setProgressAttrs] = useState({
    now: 0,
    label: '',
  });

  // handle progress bar
  useEffect(() => {
    if (!data) return;
    if (filters.length > 0) {
      setProgressAttrs({
        now: filteredData.length,
        label: `${filteredData.length}/${data.length}, ${Math.floor((filteredData.length / data.length) * 100)}%`,
      });
    } else {
      setProgressAttrs({
        now: data.length,
        label: `${data.length}/${data.length}, ${Math.floor((data.length / data.length) * 100)}%`,
      });
    }
  }, [filters, filteredData]);

  if (configError) {
    return <ErrorMsg text="Error While Loading Config File" />;
  }

  if (dataError) {
    return <ErrorMsg text="Error While Loading Data File" />;
  }

  if (loading || configLoading) {
    return <LoadingSpinner text="Loading Data ..." />;
  }

  return (
    <div>
      <ESNavbar
        url={config.HOME_URL}
        title={config.TITLE}
        max={data.length}
        now={progressAttrs.now}
        progressLabel={progressAttrs.label}
        data={[filteredData, data]}
        color={config.THEME_COLOR}
      />
      <SearchBar filterAdded={addFiltersHandler} filterRemove={removeFiltersHandler} />
      <FilterOperationPanel filters={filters} filterRemove={removeFiltersHandler} />

      {isFullScreen ? (
        <VisFullScreenView
          operation={config.VISUALIZATION_VIEW_CONFIGURATION.find(
            (opt) => opt.id === fullScreenVis,
          )}
          toggleFullScreen={fullScreenHandler}
          fullScreened={isFullScreen}
        />
      ) : (
        <VisGridView fullVisScreenHandler={fullScreenHandler} fullScreened={isFullScreen} />
      )}
    </div>
  );
}

export default Eaglescope;
