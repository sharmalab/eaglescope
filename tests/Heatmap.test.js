import React from 'react';
import { render } from '@testing-library/react';
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

test('renders without crashing', () => {
  render(
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
  expect(document.getElementById(mockId)).toBeInTheDocument();
});
