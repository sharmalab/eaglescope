import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DensityChart from '../source/components/VisualTools/Chart/DensityChart';

const mockData = [
  { x: 10, y: 20 },
  { x: 15, y: 25 },
  { x: 20, y: 30 },
];

const mockFields = { x: 'x', y: 'y' };
const mockLayout = { width: 500, height: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test Density Chart';
const mockFilterAdded = [];
const mockId = 'test-density-chart';

describe('DensityChart Component', () => {

  beforeEach(() => {
    // Mocking the getBoundingClientRect method, which otherwise breaks these tests
    const mockGetBoundingClientRect = jest.fn(() => ({
      width: 500,
      height: 300,
      top: 0,
      right: 500,
      bottom: 300,
      left: 0,
    }));

    // Setting the mock on the HTMLDivElement prototype
    Element.prototype.getBoundingClientRect = mockGetBoundingClientRect;
  });

  afterEach(() => {
    // Restore the original implementation
    jest.restoreAllMocks();
  });

  it('renders the chart, contents, axes', async () => {
    const {container} = render(
      <DensityChart
        data={mockData}
        fields={mockFields}
        id={mockId}
        title={mockTitle}
        filterData={mockData}
        filters={mockFilters}
        filterAdded={mockFilterAdded}
        layout={mockLayout}
      />
    );

    await waitFor(() => {
      const chartElement = screen.getByRole('figure', { hidden: true });
      expect(chartElement).toBeInTheDocument();
      // console.log(chartElement.innerHTML)
      const tickElements = chartElement.querySelectorAll('.tick');
      const domainElements = chartElement.querySelectorAll('.domain');

      expect(tickElements.length).toBeGreaterThan(0); // axes rendered
      expect(domainElements.length).toBeGreaterThan(0); // body rendered
    }), { timeout: 3000 };
  });
});
