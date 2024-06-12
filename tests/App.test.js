import React from 'react';
import { render, screen } from '@testing-library/react';

const useFetch = jest.fn()

import { ConfigContext } from '../source/contexts/ConfigContext';
import App from '../source/Application';



describe('App', () => {
  beforeEach(() => {
    // Mock the return value of useFetch
    useFetch.mockReturnValue({
      error: null,
      data: { /* Dummy config data */ },
      isPending: false,
      setData: jest.fn(),
    });
  });

  test('renders more than 0 visible items with react-grid-item class', async () => {
    render(
      <ConfigContext.Provider value={{ /* Dummy config data */ }}>
        <App />
      </ConfigContext.Provider>
    );

    // Your test assertions here
  });
});
