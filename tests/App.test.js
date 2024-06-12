import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import App from '../source/Application';

import testConfig from '../config/wines.json';
import testData from '../config/wines_data.json';



describe('Eaglescope basic tests', () => {
  test('renders title from config', async () => {
    const container = render(
        <App overrideConfig={testConfig} overrideData={testData}/>
    );
    await waitFor(() => {
        const titleElement = screen.getByText('Eaglescope Demo | Wines');
        expect(titleElement).toBeInTheDocument();
      });
  });
  test('renders vis elems', async () => {
    const container = render(
        <App overrideConfig={testConfig} overrideData={testData}/>
    );
    await waitFor(() => {
        const elements = document.getElementsByClassName('vis-grid-item');
        expect(elements.length).toBeGreaterThan(6);
      });
  });
});
