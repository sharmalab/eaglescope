import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Heatmap from '../source/components/VisualTools/Chart/Heatmap';
import '@testing-library/jest-dom';

const mockData = [
  { x: 'A', y: '1', z: 10 },
  { x: 'B', y: '1', z: 20 },
  { x: 'A', y: '2', z: 30 },
];

const mockFields = {
  x: 'x',
  y: 'y',
  z: 'z',
};

const mockFilters = [];
const mockFilterAdded = [];
const mockTitle = 'Test Heatmap Chart';
const mockId = 'test-heatmap-chart';
const mockLayout = {
  width: 500,
  currentCols: 2,
};

describe('Heatmap Vis Component', () => {
  test('renders box contents', async() => {
    const {container} = render(
      <Heatmap
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
      // console.log(chartElement.innerHTML);
      expect(chartElement).toBeInTheDocument();
      // nonsense test for now
      const rectElements = chartElement.querySelectorAll('rect');
      expect(rectElements).toHaveLength(4); // comparison boxes
    }, { timeout: 3000 });
  });
});