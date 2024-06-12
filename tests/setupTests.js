const fetch = require('cross-fetch');

global.fetch = fetch;


window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated, but still used in some cases
    removeListener: jest.fn(), // Deprecated, but still used in some cases
  }));