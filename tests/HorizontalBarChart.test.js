import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HorizontalBarChart from '../source/components/VisualTools/Chart/HorizontalBarChart';

const mockData = [
    { category: 'A' },
    { category: 'B' },
    { category: 'A' },
    { category: 'C' },
    { category: 'B' },
    { category: 'A' },
  ];

const mockFields = {
  x: 'category',
  isList: false,
};

const mockLayout = { width: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test Horiz Bar Chart';
const mockId = 'test-horiz-bar-chart';

describe('HorizontalBarChart Vis Component', () => {
  it('renders', () => {
    render(
      <HorizontalBarChart
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
