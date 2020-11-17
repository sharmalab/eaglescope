import React from "react";
import BaseVisualization from "./BaseVisualization.js";
import {
  View as vegaView,
  parse as vegaParse,
  changeset as ChangeSet
} from "vega";
import { compile as vlCompile } from "vega-lite";

// should only have to worry about rendering
class VegaLitePlot extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.style = { width: '100%', height: '100%' };
    this.self = React.createRef();
  }

  componentWillMount(){

  }

  componentDidUpdate() {
    if (this.state.ready) {
      if (this.vl_view) {
        var d;
        if (this.props.allData) {
          d = this.state.baseData;
        } else {
          d = this.state.filteredData;
        }
        let changeset = ChangeSet()
          .remove(() => true)
          .insert(d);
        this.vl_view.change("source_0", changeset).run();
      } else {
        let spec = JSON.parse(this.props.spec);
        if (this.props.allData) {
          spec.data = { name: "source_0", values: this.state.baseData };
        } else {
          spec.data = { name: "source_0", values: this.state.filteredData };
        }

        // grab and set component's size
        const rect = this.self.current.getBoundingClientRect();
        spec.padding = 10;
        spec.width = rect.width - spec.padding * 2;
        spec.height = rect.height - spec.padding * 2;
        spec.autosize = { type: "fit"};
        // try to guess quant filter setup
        if (
          spec.selection &&
          spec.selection.brush &&
          spec.selection.brush.encodings &&
          spec.selection.brush.encodings.length
        ) {
          var fields = [];
          let candidate_state = {};
          var can_render_filter = true;
          for (var i = 0; i < spec.selection.brush.encodings.length; i++) {
            let new_field =
              spec.encoding[spec.selection.brush.encodings[i]].field;
            if (
              this.state.globalFilter[new_field] &&
              this.state.globalFilter[new_field].less &&
              this.state.globalFilter[new_field].greater
            ) {
              candidate_state[spec.selection.brush.encodings[i]] = [
                this.state.globalFilter[new_field].greater,
                this.state.globalFilter[new_field].less
              ];
            } else {
              can_render_filter = false;
            }
          }
          // set filter state
          if (can_render_filter) {
            spec.selection.brush.init = candidate_state;
          }
        }
        

        
        this.vl_view = new vegaView(vegaParse(vlCompile(spec).spec));
        this.vl_view.initialize(document.querySelector("#" + this.id));
        this.vl_view.hover();
        if (spec.selection && spec.selection.brush) {
          this.vl_view.addDataListener("brush_store", (t, e) => {
            if (e.length > 0 && e[0].fields.length > 0) {
              window.clearTimeout(this.lastEvent);
              this.lastEvent = window.setTimeout(x => {
                var next_filter = {};
                for (var j = 0; j < e[0].fields.length; j++) {
                  let g_val = Math.min(...e[0].values[j]);
                  let l_val = Math.max(...e[0].values[j]);
                  next_filter[e[0].fields[j].field] = {
                    greater: g_val,
                    less: l_val
                  };
                }
                this.filterIn(next_filter);
              }, this.bufferTime);
            }
          });
        }
        this.vl_view.run();
      }
    }
  }
  render() {
    if (this.state.ready) {
      return (
        <div
          id={this.id}
          ref={this.self}

          style={this.style}
        ></div>
      );
    } else {
      return (
        <div
          id={this.id}
          ref={this.self}
          style={this.style}
          className="vis-loading"
        >
          <p>waiting...</p>
        </div>
      );
    }
  }
}

export default VegaLitePlot;
