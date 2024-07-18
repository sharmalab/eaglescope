import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BarChart from '../source/components/VisualTools/Chart/BarChart';

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
const mockTitle = 'Test Bar Chart';
const mockId = 'test-bar-chart';

describe('BarChart Vis Component', () => {
  it('renders', () => {
    render(
      <BarChart
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
