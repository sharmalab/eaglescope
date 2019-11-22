// so we can use our visualizations with one import

import BarChart from '../VisualTools/Chart/BarChart';
import PieChart from '../VisualTools/Chart/PieChart';
import Table from '../VisualTools/Table/Table';
import VegaLitePlot from '../VegaLitePlot';
var VisTypeComponents = {}
VisTypeComponents.PIE_CHART = "BarChart";
VisTypeComponents.BAR_CHART = "PieChart";
VisTypeComponents.TABLE = "Table";
VisTypeComponents.VEGA_LITE_PLOT = "VegaLitePlot"

export default VisTypeComponents