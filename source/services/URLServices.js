const updateURL = (newFilters) => {
  const thisUrl = new URL(window.location);
  const thisParams = new URLSearchParams(thisUrl.search);
  thisParams.set('filterState', JSON.stringify([...newFilters]));
  const newUrl = `${thisUrl.pathname}?${thisParams.toString()}`;
  window.history.replaceState({}, document.title, newUrl);
};

const clearURL = () => {
  const thisUrl = new URL(window.location);
  const thisParams = new URLSearchParams(thisUrl.search);
  thisParams.delete('filterState');
  const newUrl = `${thisUrl.pathname}?${thisParams.toString()}`;
  window.history.replaceState({}, document.title, newUrl);
};

const initURL = (addFiltersHandler, removeFiltersHandler) => {
  const thisUrl = new URL(window.location);
  const thisParams = new URLSearchParams(thisUrl.search);
  const thisFilterState = thisParams.get('filterState');
  if (thisFilterState) {
    removeFiltersHandler('ALL');
    addFiltersHandler(JSON.parse(thisFilterState));
  }
};

export { updateURL, clearURL, initURL };
