import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  it('renders', () => {
    render(
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
    const chartElement = screen.getByRole('figure', { hidden: true });
    expect(chartElement).toBeInTheDocument();
  });
});
