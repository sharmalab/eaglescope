import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

// css class
import './VisItemContent.css';

import VisTypeComponents from '../../../../../VisualTools/VisTypeComponents';

const PieChart = React.lazy(() => import('../../../../../VisualTools/Chart/PieChart'));
const BarChart = React.lazy(() => import('../../../../../VisualTools/Chart/BarChart'));
const KMCurve = React.lazy(() => import('../../../../../VisualTools/Chart/KMCurve'));
const EnumList = React.lazy(() => import('../../../../../VisualTools/Chart/EnumList'));
const HorizontalBarChart = React.lazy(() => import('../../../../../VisualTools/Chart/HorizontalBarChart'));
const ScatterChart = React.lazy(() => import('../../../../../VisualTools/Chart/ScatterChart'));
const VisDataTable = React.lazy(() => import('../../../../../VisualTools/VisDataTable/VisDataTable'));
const VisCard = React.lazy(() => import('../../../../../VisualTools/VisGridCard/VisGridCard'));
const Histogram = React.lazy(() => import('../../../../../VisualTools/Chart/Histogram'));
const DensityChart = React.lazy(() => import('../../../../../VisualTools/Chart/DensityChart'));
const ParallelCoordinates = React.lazy(() => import('../../../../../VisualTools/Chart/ParallelCoordinates'));
const Heatmap = React.lazy(() => import('../../../../../VisualTools/Chart/Heatmap'));
const SelectDataTable = React.lazy(() => import('../../../../../VisualTools/VisDataTable/SelectDataTable'));
const TextContainer = React.lazy(() => import('../../../../../VisualTools/Chart/TextContainer'));

function VisItemContent(props) {
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
    case 'EnumList':
      component = <EnumList {...props} />;
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
    case 'SelectDataTable':
      component = <SelectDataTable {...props} />;
      break;
    case 'VisCard':
      component = <VisCard {...props} />;
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
    case 'TextContainer':
      component = <TextContainer {...props} />;
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

export default VisItemContent;

VisItemContent.propTypes = {
  chartType: PropTypes.string.isRequired,
};
