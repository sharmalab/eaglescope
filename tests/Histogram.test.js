import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Histogram from '../source/components/VisualTools/Chart/Histogram';

const mockData = [
    { category: 10 },
    { category: 11 },
    { category: 12 },
    { category: 12 },
    { category: 15 },
    { category: 21 },
  ];

const mockFields = {
  x: 'category'
};

const mockLayout = { width: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test Histogram Chart';
const mockId = 'test-histogram-chart';

describe('Histogram Vis Component', () => {
  it('renders', () => {
    render(
      <Histogram
        data={mockData}
        fields={mockFields}
        id={mockId}
        title={mockTitle}
        filterData={mockData}
        filters={mockFilters}
        filterAdded={[]}
        layout={mockLayout}
        binsCount={3}
      />
    );
    const chartElement = screen.getByRole('figure', { hidden: true });
    expect(chartElement).toBeInTheDocument();
  });
});
