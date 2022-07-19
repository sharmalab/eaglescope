import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

// css class
import './VisGridItemContent.css';

import VisTypeComponents from '../../../../VisualTools/VisTypeComponents';

const PieChart = React.lazy(() => import('../../../../VisualTools/Chart/PieChart'));
const BarChart = React.lazy(() => import('../../../../VisualTools/Chart/BarChart'));
const KMCurve = React.lazy(() => import('../../../../VisualTools/Chart/KMCurve'));
const HorizontalBarChart = React.lazy(() => import('../../../../VisualTools/Chart/HorizontalBarChart'));
const ScatterChart = React.lazy(() => import('../../../../VisualTools/Chart/ScatterChart'));
const VisDataTable = React.lazy(() => import('../../../../VisualTools/VisDataTable/VisDataTable'));
const VisGridCard = React.lazy(() => import('../../../../VisualTools/VisGridCard/VisGridCard'));
const Histogram = React.lazy(() => import('../../../../VisualTools/Chart/Histogram'));
const DensityChart = React.lazy(() => import('../../../../VisualTools/Chart/DensityChart'));
const ParallelCoordinates = React.lazy(() => import('../../../../VisualTools/Chart/ParallelCoordinates'));
const Heatmap = React.lazy(() => import('../../../../VisualTools/Chart/Heatmap'));

function VisGridItemContent(props) {
  const TagName = VisTypeComponents[props.chartType];
  let component;
  switch (TagName) {
    case 'PieChart':
      component = <PieChart {...props} />;
      break;
    case 'ScatterChart':
      component = <ScatterChart {...props} />;
      break;
    case 'BarChart':
      component = <BarChart {...props} />;
      break;
    case 'KMCurve':
      component = <KMCurve {...props} />;
      break;
    case 'HorizontalBarChart':
      component = <HorizontalBarChart {...props} />;
      break;
    case 'VisDataTable':
      component = <VisDataTable {...props} />;
      break;
    case 'VisGridCard':
      component = <VisGridCard {...props} />;
      break;
    case 'Histogram':
      component = <Histogram {...props} />;
      break;
    case 'DensityChart':
      component = <DensityChart {...props} />;
      break;
    case 'ParallelCoordinates':
      component = <ParallelCoordinates {...props} />;
      break;
    case 'Heatmap':
      component = <Heatmap {...props} />;
      break;
    default:
      component = (
        <div>
          I&apos;m Sorry. There Is No
          {TagName}
          {' '}
          Component...
        </div>
      );
  }

  return (
    <div className="vis-grid-item-content">
      <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
    </div>
  );
}

export default VisGridItemContent;

VisGridItemContent.propTypes = {
  chartType: PropTypes.string.isRequired,
};
