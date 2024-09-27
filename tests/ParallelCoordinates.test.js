import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ParallelCoordinates from '../source/components/VisualTools/Chart/ParallelCoordinates';

const mockData = [
  { dimension1: 10, dimension2: 20, dimension3: 30 },
  { dimension1: 15, dimension2: 25, dimension3: 35 },
  { dimension1: 20, dimension2: 30, dimension3: 40 },
  { dimension1: 25, dimension2: 35, dimension3: 45 },
  { dimension1: 30, dimension2: 40, dimension3: 50 },
];

const mockFields = {
  y: ['dimension1', 'dimension2', 'dimension3'],
};

const mockLayout = { width: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test Parallel Coordinates Chart';
const mockId = 'test-parallel-coords-chart';

describe('ParallelCoordinates Vis Component',  () => {

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
    render(
      <ParallelCoordinates
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
    await waitFor(() => {
      const chartElement = screen.getByRole('figure', { hidden: true });
      expect(chartElement).toBeInTheDocument();
      // console.log(chartElement.innerHTML)
      const canvasElements = chartElement.querySelectorAll('canvas');
      expect(canvasElements.length).toBeGreaterThan(0); // body rendered
    }), { timeout: 3000 };
  });
});
