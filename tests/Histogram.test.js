import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
  it('renders', async () => {
    const {container} = render(
      <Histogram
        data={mockData}
        fields={mockFields}
        id={mockId}
        title={mockTitle}
        filterData={mockData}
        filters={mockFilters}
        filterAdded={[]}
        layout={mockLayout}
        binsCount={5}
      />
    );
    await waitFor(() => {
      const chartElement = screen.getByRole('figure', { hidden: true });
      expect(chartElement).toBeInTheDocument();
      // console.log(chartElement.innerHTML);
      const barElements = chartElement.querySelectorAll('.bar'); // bars
      const barFElements = chartElement.querySelectorAll('.bar-f'); // filtered bars
      expect(barElements).toHaveLength(5);
      expect(barFElements).toHaveLength(5);

    }, { timeout: 3000 });
  });
});
