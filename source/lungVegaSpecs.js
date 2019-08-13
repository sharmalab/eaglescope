var vegaSpecs = {}
vegaSpecs.HistSpec = JSON.stringify({
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
      "field": "Age",
      "type": "quantitative"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }
})

vegaSpecs.ScatterSpec = JSON.stringify({
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
    "x": {"field": "Age", "type": "quantitative"},
    "y": {"field": "Survival_Time", "type": "quantitative"},
    "shape": {"field": "Vital_Status", "type": "nominal"},
    "color": {"field": "GDC_primary_diagnosis", "type": "nominal"}
    }
})

vegaSpecs.BarSpec = JSON.stringify({
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
      "field": "Collection",
      "type": "nominal"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }
})


export default vegaSpecs
