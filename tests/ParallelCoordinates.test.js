import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

describe('ParallelCoordinates Vis Component', () => {
  it('renders', () => {
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
    const chartElement = screen.getByRole('figure', { hidden: true });
    expect(chartElement).toBeInTheDocument();
  });
});
