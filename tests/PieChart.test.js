import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PieChart from '../source/components/VisualTools/Chart/PieChart';

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
const mockTitle = 'Test Pie Chart';
const mockId = 'test-pie-chart';

describe('PieChart Vis Component', () => {
  it('renders', async () => {
    const {container} = render(
      <PieChart
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
      const graphicsElements = chartElement.querySelectorAll('path');
      expect(graphicsElements).toHaveLength(3);

    }, { timeout: 3000 });
  });
});
