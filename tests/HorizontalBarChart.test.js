import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HorizontalBarChart from '../source/components/VisualTools/Chart/HorizontalBarChart';

const mockData = [
    { category: 'A', total: 1 },
    { category: 'B', total: 1  },
    { category: 'A', total: 1  },
    { category: 'C', total: 1  },
    { category: 'B', total: 1  },
    { category: 'A', total: 1  },
  ];

const mockFields = {
  y: 'category',
  x: 'total',
  isList: false,
};

const mockLayout = { width: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test Horiz Bar Chart';
const mockId = 'test-horiz-bar-chart';

describe('HorizontalBarChart Vis Component', () => {
  it('renders', async () => {
    const {container} = render(
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
    // Wait for the chart to render, up to 3 seconds
    await waitFor(() => {
      // console.log(container.innerHTML);
      const chartElement = screen.getByRole('figure', { hidden: true });
      expect(chartElement).toBeInTheDocument();
      // console.log(chartElement.innerHTML);
      const labelElements = chartElement.querySelectorAll('.label');
      const barElements = chartElement.querySelectorAll('.og');
      const barFElements = chartElement.querySelectorAll('.ft');
      expect(labelElements).toHaveLength(3);
      expect(barElements).toHaveLength(3);
      expect(barFElements).toHaveLength(3);

    }, { timeout: 3000 });
  });
});
