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

const VALID_OPERATIONS = new Set([
  'eq', 'gt', 'gte', 'lt', 'lte', 'ne', 'in', 'nin', 'has', 'nhas', 'range', 'search',
]);

const isValidFilter = (f) => (
  f !== null
  && typeof f === 'object'
  && typeof f.field === 'string'
  && !f.field.startsWith('__')
  && typeof f.operation === 'string'
  && VALID_OPERATIONS.has(f.operation)
  && f.values !== undefined
);

const initURL = (addFiltersHandler, removeFiltersHandler) => {
  const thisUrl = new URL(window.location);
  const thisParams = new URLSearchParams(thisUrl.search);
  const thisFilterState = thisParams.get('filterState');
  if (thisFilterState) {
    try {
      const parsed = JSON.parse(thisFilterState);
      if (Array.isArray(parsed) && parsed.every(isValidFilter)) {
        removeFiltersHandler('ALL');
        addFiltersHandler(parsed);
      }
    } catch { /* ignore malformed filterState in URL */ }
  }
};

export { updateURL, clearURL, initURL };
