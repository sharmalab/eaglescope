var vegaSpecs = {}
vegaSpecs.dotPlotSpec = JSON.stringify({
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "mark": "tick",
  "selection":{
    "brush": {
      "encodings": ['x'],
      "type": "interval"
    }
  },
  "encoding": {
    "x": {"field": "userId", "type": "quantitative"}
  }
})

vegaSpecs.barChartSpec = JSON.stringify({
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "mark": "bar",
    "encoding": {
      "y": {
        "field": "userId",
        "type": "ordinal"
      },
      "x": {
        "aggregate": "sum",
        "field": "id",
        "type": "quantitative"
      }
    }
})

vegaSpecs.histSpec = JSON.stringify({
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "mark": "bar",
  "selection":{
    "brush": {
      "encodings": ['x'],
      "type": "interval"
    }
  },
  "encoding": {
    "x": {
      "bin": true,
      "field": "userId",
      "type": "quantitative"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }
})

vegaSpecs.scatterSpec = JSON.stringify({
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "mark": "bar",
  "selection": {
    "brush": {
      "encodings": ["x","y"],
      "type": "interval"
    }
  },
  "mark": "point",
  "encoding": {
    "x": {"field": "userId", "type": "quantitative"},
    "y": {"field": "id", "type": "quantitative"},
    "color": {"field": "completed", "type": "nominal"},
    "shape": {"field": "completed", "type": "nominal"}
    }
})

export default vegaSpecs
