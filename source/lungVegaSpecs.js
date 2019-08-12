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
    "y": {"field": "Neoplasm_A-1tomic_Subdivision_-1me_", "type": "quantitative"},
    "color": {"field": "Vital_Status", "type": "nominal"},
    "shape": {"field": "GDC_primary_diagnosis", "type": "nominal"}
    }
})


export default vegaSpecs
