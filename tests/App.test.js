import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import App from '../source/Application';

import testConfig from '../config/wines.json';
import testData from '../config/wines_data.json';



describe('App', () => {
  test('renders more than 0 visible items with react-grid-item class', async () => {
    const container = render(
        <App overrideConfig={testConfig} overrideData={testData}/>
    );

    await waitFor(() => {
        const items = container.getAllByClassName('react-grid-item');
        expect(items.length).toBeGreaterThan(0);
      });
  });
});
