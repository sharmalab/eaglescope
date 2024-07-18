import React from 'react';
import { render } from '@testing-library/react';
import DensityChart from '../source/components/VisualTools/Chart/DensityChart';

const mockData = [
  { x: 10, y: 20 },
  { x: 15, y: 25 },
  { x: 20, y: 30 },
];

const mockFields = { x: 'x', y: 'y' };
const mockLayout = { width: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test Density Chart';
const mockFilterAdded = [];
const mockId = 'test-density-chart';

describe('DensityChart Component', () => {
  it('renders', () => {
    render(
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
    expect(document.getElementById(mockId)).toBeInTheDocument();
  });
});
