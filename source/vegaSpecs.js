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

vegaSpecs.parallelCoordSpec = JSON.stringify({
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "width": 600,
  "height": 300,
  "transform": [
    {"window": [{"op": "count", "as": "index"}]},
    {"fold": ["id", "userId"]},
    {
      "joinaggregate": [
        {"op": "min", "field": "value", "as": "min"},
        {"op": "max", "field": "value", "as": "max"}
      ],
      "groupby": ["key"]
    },
    {
      "calculate": "(datum.value - datum.min) / (datum.max-datum.min)",
      "as": "norm_val"
    },
    {
      "calculate": "(datum.min + datum.max) / 2",
      "as": "mid"
    }
  ],
  "layer": [{
    "mark": {"type": "rule", "color": "#ccc", "tooltip": null},
    "encoding": {
      "detail": {"aggregate": "count", "type": "quantitative"},
      "x": {"type": "nominal", "field": "key"}
    }
  }, {
    "mark": "line",
    "encoding": {
      "color": {"type": "nominal", "field": "completed"},
      "detail": {"type": "nominal", "field": "index"},
      "opacity": {"value": 0.3},
      "x": {"type": "nominal", "field": "key"},
      "y": {"type": "quantitative", "field": "norm_val", "axis": null},
      "tooltip": [{
        "field": "id"
      }, {
        "field": "userId"
      }]
    }
  },{
    "encoding": {
      "x": {"type": "nominal", "field": "key"},
      "y": {"value": 0}
    },
    "layer": [{
      "mark": {"type": "text", "style": "label"},
      "encoding": {
        "text": {"aggregate": "max", "field": "max", "type": "quantitative"}
      }
    }, {
      "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"}
    }]
  },{

    "encoding": {
      "x": {"type": "nominal", "field": "key"},
      "y": {"value": 150}
    },
    "layer": [{
      "mark": {"type": "text", "style": "label"},
      "encoding": {
        "text": {"aggregate": "min", "field": "mid", "type": "quantitative"}
      }
    }, {
      "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"}
    }]
  },{
    "encoding": {
      "x": {"type": "nominal", "field": "key"},
      "y": {"value": 300}
    },
    "layer": [{
      "mark": {"type": "text", "style": "label"},
      "encoding": {
        "text": {"aggregate": "min", "field": "min", "type": "quantitative"}
      }
    }, {
      "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"}
    }]
  }],
  "config": {
    "axisX": {"domain": false, "labelAngle": 0, "tickColor": "#ccc", "title": null},
    "view": {"stroke": null},
    "style": {
      "label": {"baseline": "middle", "align": "right", "dx": -5, "tooltip": null},
      "tick": {"orient": "horizontal", "tooltip": null}
    }
  }
})

export default vegaSpecs
