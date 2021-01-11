import React from "react";
import DataManager from "./DataManager.js";
import RestDataSource from "./xfRestDataSource.js";
import VisTypes from "./component/VisTypes.js";
import vegaSpecs from "./vegaSpecs.js";
import ResetButton from "./component/ResetButton.js";
import HomeButton from "./component/HomeButton.js";
import { render } from "react-dom";
import Spinner from 'react-bootstrap/Spinner'
import VisGridView from "./component/Layout/VisGridView/VisGridView.js";
import ProgressBar from 'react-bootstrap/ProgressBar'
import FilterOperationPanel from './component/FilterOperationPanel/FilterOperationPanel.js'
import * as d3 from "d3";
import {
  Responsive,
  WidthProvider,
} from "react-grid-layout";

// import GridLayout from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

//style

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import "./style/main.scss";
import 'react-virtualized/styles.css';
// config for view grid and vis compoments
import _CONFIG_ from "../config/vis-config.json";

// var __DM = null;
function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
function covertRaw(elt){
  for(let key in elt){
    const raw = elt[key];
    if(isNumeric(raw)){
      elt[key] = +raw;
    } else if(raw == 'true'||raw == 'false' ){
      elt[key] = raw=='true' ? true : false;
    }
  }
  return elt;
}

function filterData(data, filters) {
  return data.filter(record => {
    for (let filter of filters) {
      const operation = filter.operation;
      const val = record[filter.field];

      let broken = false
      if (!broken && operation === 'eq') {
        broken = broken || val !== filter.values
      }
      if (!broken && operation === 'gt') {
        broken = broken || val <= filter.values
      }
      if (!broken && operation === 'gte') {
        broken = broken || val < filter.values
      }
      if (!broken && operation === 'lt') {
        broken = broken || val >= filter.values
      }
      if (!broken && operation === 'lte') {
        broken = broken || val > filter.values
      }
      if (!broken && operation === 'ne') {
        broken = broken || val === filter.values
      }
      if (!broken && operation === 'in') {
        broken = broken || !filter.values.some(v => val == v)
      }
      if (!broken && operation === 'nin') {
        broken = broken || filter.values.some(v => val == v)
      }
      if (!broken && operation === 'range') {
        broken = broken || filter.values[0] > val || filter.values[1] < val
      }
      if (broken) {
        return false
      }
    }
    return true;
  })
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      filterData: [],
      filterOperators: "AND", // "OR"
      filters: []
    };

  }
  // {
  //    id:
  //    field:xxx,
  //    operation:, eq,  gt, gte, in, lt, lte, ne, nin,
  //    value: value, value, value, list, value, value, value, list, []
  // }
  addFiltersHandler(filters) {

    const old_filters = [...this.state.filters];


    // remove first
    let new_filters = old_filters.filter(of => filters.some(nf => !(of.id == nf.id)))



    // add
    new_filters = [...new_filters, ...filters]
    //filters.push(filter)

    // do filter
    const dataset_afterFilter = filterData(this.state.data, new_filters);

    this.setState({ filterData: dataset_afterFilter, filters: new_filters })

  }




  removeFiltersHandler(id, isIndex = false) {
    // remove all filter
    if (id === 'ALL') {
      this.setState({ filterData: [], filters: [] });
      return;
    }
    const old_filters = [...this.state.filters];
    console.log('old', old_filters)
    let new_filters = [];
    if (isIndex) {
      new_filters = old_filters.filter((f, idx) => idx != id)
    } else {
      new_filters = old_filters.filter(of => of.id !== id)
    }

    console.log('new', new_filters)
    if (new_filters.length <= 0) {
      this.setState({ filterData: [], filters: [] });
      return;
    }
    const dataset_afterFilter = filterData(this.state.data, new_filters);
    this.setState({ filterData: dataset_afterFilter, filters: new_filters })
  }

  componentDidMount() {
    if (_CONFIG_.DATA_FORMAT === 'csv') {
      d3.csv(_CONFIG_.DATA_RESOURCE_URL,d=>covertRaw(d)).then(data=>{
        console.log('csv')
        this.setState({
          isLoaded: true,
          data: data
        });
      })

    } else if (_CONFIG_.DATA_FORMAT === 'json') {
      fetch(_CONFIG_.DATA_RESOURCE_URL, {
        mode: 'cors'
      }).then(res => res.json()).then(data => {
        console.log('json')
        // TODO need a replace method to replace null, undefined etc.
        data.forEach(d => {// clear up null value
          if (d.disease_type == null) d.disease_type = 'NA'
          if (d.sexlabel == null) d.sexlabel = 'NA'
          if (d.age == null) d.age = 'NA'
          if (d.stagelabel == null) d.stagelabel = 'NA'
        })
        return data;
      })
        .then((data) => {
          this.setState({
            isLoaded: true,
            data: data
          });
        },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log('error', error)
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

  }

  render() {
    const { error, isLoaded, data, filterData, filters } = this.state;
    const progressAttrs = {
      now: data.length,
      label: `${data.length}/${data.length}`
    };

    if (filters.length > 0) {
      progressAttrs.now = filterData.length;
      progressAttrs.label = `${filterData.length}/${data.length}`
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Spinner animation="border" role="status">

        </Spinner>
        <span style={{ margin: '10px' }} >Loading...</span>
      </div>;
    } else {
      return (
        <div>
          <nav className="navbar blue-bar">
            <span className="navbar-brand mb-0 h1 whitetext" >
              TCIA Clinical Data Explorer
          </span>
            <div style={{ width: '450px' }}>
              <ProgressBar
                min={0}
                max={data.length}
                now={progressAttrs.now}
                label={progressAttrs.label} />
            </div>
            {/* <button
            id="gogo"
            className="clear-btn"
            title="Exploration"
            onClick={() => this.removeFiltersHandler('ALL')}
          >
            <span className="fa fa-long-arrow-alt-left">{data.length} </span> Back to Search
            Portal
          </button>
          <ResetButton id="rb1" />
          <VisTypes.Sample id="count1" /> */}
          </nav>
          <FilterOperationPanel filters={filters} filterRemove={this.removeFiltersHandler.bind(this)} />
          <VisGridView
            data={data}
            filterData={filterData}
            filters={filters}
            filterAdded={this.addFiltersHandler.bind(this)}
            filterRemove={this.removeFiltersHandler.bind(this)}
          />
        </div>
      );
    }
  }
}
render(<App />, document.getElementById("root"));
