import React, { Component } from "react";
import { View as vegaView, parse as vegaParse } from "vega";
import { Handler } from "vega-tooltip";
import { accessPathWithDatum } from "vega-lite/build/src/util";

export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.self = React.createRef();
    this.state = {
      loading: true,
      error: null,
      fields: this.props.fields ? [...this.props.fields] : null,
      cond: []
    };

    this.vega_view = null;
  }
  componentDidMount() {
    const rect = this.self.current.getBoundingClientRect();
    spec.width = rect.width - spec.padding * 2;
    spec.height = rect.height - spec.padding * 2;
    var handler = new Handler();
    this.vega_view = new vegaView(vegaParse(spec), {
      renderer: "canvas", // renderer (canvas or svg)
      container: "#" + this.props.id, // parent DOM container
      hover: true // enable hover processing
    })
      .addEventListener("click", (event, item) => {
        if (item) {
          item.datum.selected = true;
        }
      })
      .tooltip(handler.call);
    this.vega_view.run();
  }
  //.addDataListener('brush_store',(name, value)=>{
  //  console.log('brush_store',name, value);
  // })

  render() {
    //console.log(vegaView);
    //this.vegaTooltipHandler = new vegaTooltip.Handler();

    //.tooltip(vegaTooltipHandler.call)
    // this.vega_view.initialize(document.getElementById(this.props.id))
    // this.vega_view.hover();
    // this.vega_view.run();
    //this.vega_view.runAsync();

    return (
      <div
        id={this.props.id}
        ref={this.self}
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  }
}

const spec = {
  $schema: "https://vega.github.io/schema/vega/v5.json",
  autosize: "fit",
  padding: 5,
  data: [
    {
      name: "table",
      values: [
        {
          id: 1,
          name: "name1",
          type: "a",
          count: 6
        },
        {
          id: 2,
          name: "name2",
          type: "a",
          count: 10
        },
        {
          id: 3,
          name: "name3",
          type: "d",
          count: 2
        },
        {
          id: 4,
          name: "name4",
          type: "b",
          count: 8
        },
        {
          id: 5,
          name: "name5",
          type: "c",
          count: 3
        },
        {
          id: 6,
          name: "name6",
          type: "c",
          count: 7
        }
      ],
      transform: [
        {
          type: "aggregate",
          groupby: ["type"]
        },
        {
          type: "pie",
          field: "count",
          startAngle: 0,
          endAngle: 6.29,
          sort: true
        },
        {
          type: "formula",
          expr: true,
          as: "selected"
        }
      ]
    }
  ],
  scales: [
    {
      name: "color",
      type: "ordinal",
      domain: { data: "table", field: "type" },
      range: { scheme: "category20" }
    }
  ],

  marks: [
    {
      type: "arc",
      from: { data: "table" },
      encode: {
        enter: {
          fill: { scale: "color", field: "type" },
          x: { signal: "width / 2" },
          y: { signal: "height / 2" },
          tooltip: {
            signal: "{Name:datum.type,Total:datum.count}"
          }
        },
        update: {
          fill: [
            {
              test: "datum.selected && datum.selected == true",
              scale: "color",
              field: "type"
            },
            { value: "grey" }
          ],
          fillOpacity: { value: 1 },
          startAngle: { field: "startAngle" },
          endAngle: { field: "endAngle" },
          padAngle: 0,
          outerRadius: { signal: "(height / 2) - 5" }
        },
        hover: {
          fillOpacity: { value: 0.8 },
          outerRadius: { signal: "(height / 2)" }
        },
        click: {
          outerRadius: { signal: "height" }
        }
      }
    }
  ]
};
