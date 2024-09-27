import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ScatterChart from '../source/components/VisualTools/Chart/ScatterChart';

const mockData = [
  { dimension1: 10, dimension2: 20},
  { dimension1: 15, dimension2: 25},
  { dimension1: 20, dimension2: 30},
  { dimension1: 25, dimension2: 35},
  { dimension1: 30, dimension2: 40},
];

const mockFields = {
  x: 'dimension1',
  y: 'dimension2'
};

const mockLayout = { width: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test Scatter Chart';
const mockId = 'test-scatter-chart';

describe('ScatterChart Vis Component', () => {

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

    // this feels pretty bad. improve this test.
    const mockGetContext = jest.fn().mockReturnValue({
      strokeStyle: '',
      clearRect: console.log,
      beginPath: console.log,
      closePath: console.log,
      arc: console.log,
      fill: console.log,
      moveTo: console.log,
      lineTo: console.log,
      stroke: console.log,
    });
  
    Element.prototype.getBoundingClientRect = mockGetBoundingClientRect;
    HTMLCanvasElement.prototype.getContext = mockGetContext;
  });

  afterEach(() => {
    // Restore the original implementation
    jest.restoreAllMocks();
  });

  it('renders', async () => {
    const {container} = render(
      <ScatterChart
        data={mockData}
        fields={mockFields}
        id={mockId}
        title={mockTitle}
        filterData={mockData}
        filters={mockFilters}
        filterAdded={[]}
        layout={mockLayout}
      />
    );

    // Wait for the chart to render, up to 3 seconds
    await waitFor(() => {
      // console.log(container.innerHTML);
      const chartElement = screen.getByRole('figure', { hidden: true });
      expect(chartElement).toBeInTheDocument();
      // console.log(chartElement.innerHTML);
      const tickElements = chartElement.querySelectorAll('.tick');
      const domainElements = chartElement.querySelectorAll('.domain');

      expect(tickElements.length).toBeGreaterThan(0); // axes rendered
      expect(domainElements.length).toBeGreaterThan(0); // body rendered

    }, { timeout: 3000 });
  });
});
