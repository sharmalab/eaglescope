import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import KMCurve from '../source/components/VisualTools/Chart/KMCurve';

const mockData = [
  { collapsed_stage: 'stage_x/NR', time: 1, event: 'event', group: 'group1' },
  { collapsed_stage: 'stage_x/NR', time: 2, event: 'event', group: 'group1' },
  { collapsed_stage: 'stage_x/NR', time: 3, event: 'censor', group: 'group1' },
  { collapsed_stage: 'stage_x/NR', time: 1, event: 'event', group: 'group2' },
  { collapsed_stage: 'stage_x/NR', time: 2, event: 'censor', group: 'group2' },
];

const mockFields = {
    x: 'group',
    time: { field: 'time' },
    event: { field: 'event', eventValue: 'event', censoredValue: 'censor' },
    group: { field: 'group' },
  };

const mockLayout = { width: 500, currentCols: 1 };
const mockFilters = [];
const mockTitle = 'Test KMCurve Chart';
const mockId = 'test-km-curve-chart';

describe('KMCurve Vis Component', () => {
  it('renders', () => {
    render(
      <KMCurve
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
