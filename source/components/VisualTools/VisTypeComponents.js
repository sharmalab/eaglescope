// so we can use our visualizations with one import

// import BarChart from '../VisualTools/Chart/BarChart';
// import PieChart from '../VisualTools/Chart/PieChart';
// import ScatterChart from '../VisualTools/Chart/ScatterChart';
// import Table from '../VisualTools/Table/Table';
// import VegaLitePlot from '../VegaLitePlot';

const VisTypeComponents = {};
VisTypeComponents.PIE_CHART = 'PieChart';
VisTypeComponents.BAR_CHART = 'BarChart';
VisTypeComponents.ENUM_LIST = 'EnumList';
VisTypeComponents.HORIZONTAL_BAR_CHART = 'HorizontalBarChart';
VisTypeComponents.SCATTER_CHART = 'ScatterChart';
VisTypeComponents.KM_CURVE = 'KMCurve';
VisTypeComponents.VIS_DATA_TABLE = 'VisDataTable';
VisTypeComponents.VIS_GRID_CARD = 'VisGridCard';
VisTypeComponents.VEGA_LITE_PLOT = 'VegaLitePlot';
VisTypeComponents.HISTOGRAM = 'Histogram';
VisTypeComponents.DENSITY_2D = 'DensityChart';
VisTypeComponents.PARALLEL_COORDINATES = 'ParallelCoordinates';
VisTypeComponents.HEATMAP = 'Heatmap';

const SpecialVis = ['VIS_DATA_TABLE', 'VIS_GRID_CARD', 'VEGA_LITE_PLOT', 'KM_CURVE'];

const VisInputDescription = {
  PIE_CHART: {
    hasX: true,
    hasY: false,
    isXArr: false,
    isYArr: false,
  },
  BAR_CHART: {
    hasX: true,
    hasY: false,
    isXArr: false,
    isYArr: false,
  },
  ENUM_LIST: {
    hasX: true,
    hasY: false,
    isXArr: false,
    isYArr: false,
  },
  HORIZONTAL_BAR_CHART: {
    hasX: false,
    hasY: true,
    isXArr: false,
    isYArr: false,
  },
  SCATTER_CHART: {
    hasX: true,
    hasY: true,
    isXArr: false,
    isYArr: false,
  },
  HISTOGRAM: {
    hasX: true,
    hasY: false,
    isXArr: false,
    isYArr: false,
  },
  DENSITY_2D: {
    hasX: true,
    hasY: true,
    isXArr: false,
    isYArr: false,
  },
  PARALLEL_COORDINATES: {
    hasX: false,
    hasY: true,
    isXArr: false,
    isYArr: true,
  },
  HEATMAP: {
    hasX: true,
    hasY: true,
    hasZ: true,
    isXArr: false,
    isYArr: false,
  },
};

export default VisTypeComponents;
export { VisInputDescription, SpecialVis };
