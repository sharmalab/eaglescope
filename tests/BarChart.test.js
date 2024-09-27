import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

beforeAll(() => {
  // Mock getComputedTextLength for tspan
  SVGElement.prototype.getComputedTextLength = jest.fn(() => 50);
});

const mockLayout = { width: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test Bar Chart';
const mockId = 'test-bar-chart';

describe('BarChart Vis Component', () => {
  it('renders with bars', async () => {
    const {container} = render(
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

    // Wait for the chart to render, up to 3 seconds
    await waitFor(() => {
      // console.log(container.innerHTML);
      const chartElement = screen.getByRole('figure', { hidden: true });
      expect(chartElement).toBeInTheDocument();
      // console.log(chartElement.innerHTML);
      const graphicsElements = chartElement.querySelectorAll('[role="graphics-symbol"]');
      expect(graphicsElements).toHaveLength(3);

    }, { timeout: 3000 });
  });
});
