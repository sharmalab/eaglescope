// so we can use our visualizations with one import
import SampleVisualization from './SampleVisualization.js'
import Histogram from './Histogram.js'
import BarChart from './BarChart.js'
import ScatterPlot from './ScatterPlot.js'
import VegaLitePlot from './VegaLitePlot.js'
import PureVegaLitePlot from './PureVegaLitePlot.js'
import DataTable from './DataTable.js'
import SearchBar from './SearchBar.js'
import ImageGrid from './ImageGrid.js'

var VisTypes = {}
VisTypes.Sample = SampleVisualization
VisTypes.Histogram = Histogram
VisTypes.BarChart = BarChart
VisTypes.ScatterPlot = ScatterPlot
VisTypes.VegaLitePlot = VegaLitePlot
VisTypes.PureVegaLitePlot = PureVegaLitePlot
VisTypes.DataTable = DataTable
VisTypes.SearchBar = SearchBar
VisTypes.ImageGrid = ImageGrid

export default VisTypes
