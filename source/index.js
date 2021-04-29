import React, { PureComponent } from "react";
import HomeButton from "./component/HomeButton.js";
import { render } from "react-dom";
import Spinner from 'react-bootstrap/Spinner'
import VisGridView from "./component/Layout/VisGridView/VisGridView.js";
import VisFullScreenView from "./component/Layout/VisFullScreenView/VisFullScreenView.js"
import ProgressBar from 'react-bootstrap/ProgressBar'
import FilterOperationPanel from './component/FilterOperationPanel/FilterOperationPanel.js'
import { debounce, template } from "lodash";
import * as d3 from "d3";
import "./component/VisualTools/Chart/style.css"
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
// import _CONFIG_ from "../config/vis-config.json";

// get confing on request
let title = "PRISM - Eaglescope";
function getConfig(){
  const query = new URLSearchParams(window.location.search);
  const templateName = query.get("template")

  let config_url = "../config/collection-vis-config.json"
  if(templateName=='collection'){
    config_url = "../config/collection-vis-config.json"
    title = "PRISM Collection Explorer"
  }else if(templateName=='clinical'){
    config_url = "../config/clinical-vis-config.json"
    title = "PRISM Clinical Explorer"
  }else {
    config_url = query.get("configurl") || "../config/vis-config.json"
    title = query.get("title") || "Eaglescope"
  }
  //let config_url = query.get("template") || "../config/collection-vis-config.json"
  console.log(config_url)
  return fetch(config_url, {mode: 'cors', credentials:'include'}).then(x=>x.json())
}


// var __DM = null;
function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
function covertRaw(elt) {
  for (let key in elt) {
    const raw = elt[key];
    if (isNumeric(raw)) {
      elt[key] = +raw;
      elt[key.trim()] = +raw;
    } else if (raw == 'true' || raw == 'false') {
      elt[key] = raw == 'true' ? true : false;
      elt[key.trim()] = raw == 'true' ? true : false;
    } else {
      elt[key.trim()] = raw.trim()
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

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      filterData: [],
      filterOperators: "AND", // "OR"
      filters: [],
      isFullScreen: false,
      fullScreenVis: null,
      config: null


    };
    this.view = React.createRef();
    this.resizeHandler = this.resizeHandler.bind(this);
    this.debounceResizeHandler = debounce(this.resizeHandler, 500, { "maxWait": 1000 })
    this.fullScreenHandler = this.fullScreenHandler.bind(this)

  }
  fullScreenHandler(id, fullScreened){
    console.log(id, fullScreened)
    this.setState({
      isFullScreen: fullScreened,
      fullScreenVis: id
    })
    //console.log(this.state)
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

    this.setState({ filterData: [...dataset_afterFilter], filters: [...new_filters] })

  }




  removeFiltersHandler(id, isIndex = false) {
    // remove all filter
    if (id === 'ALL') {
      this.setState({ filterData: [], filters: [] });
      return;
    }
    const old_filters = [...this.state.filters];
    let new_filters = [];
    if (isIndex) {
      new_filters = old_filters.filter((f, idx) => idx != id)
    } else {
      new_filters = old_filters.filter(of => of.id !== id)
    }
    if (new_filters.length <= 0) {
      this.setState({ filterData: [], filters: [] });
      return;
    }
    const dataset_afterFilter = filterData(this.state.data, new_filters);
    this.setState({ filterData: [...dataset_afterFilter], filters: [...new_filters] })
  }

  componentDidMount() {
    getConfig().then(_CONFIG_=>{
          if (_CONFIG_.DATA_FORMAT === 'csv') {
            d3.csv(_CONFIG_.DATA_RESOURCE_URL, d => covertRaw(d)).then(data => {
              this.setState({
                isLoaded: true,
                data: data,
                config: _CONFIG_
              });
            })

          } else if (_CONFIG_.DATA_FORMAT === 'json') {
            fetch(_CONFIG_.DATA_RESOURCE_URL, {
              mode: 'cors',
              credentials: 'include'
            }).then(res => res.json()).then(data => {
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
                  data: data,
                  config: _CONFIG_
                });
              },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  console.log('error', error)
                  this.setState({
                    isLoaded: true,
                    error: error
                  });
                }
              )
          } else if (_CONFIG_.DATA_FORMAT === 'ndjson') {
            fetch(_CONFIG_.DATA_RESOURCE_URL, {
              mode: 'cors',
              credentials: 'include'
            }).then(x=>x.text()).then(x=>{
              let r = x.split("\n")
              let res = []
              for (const e of r){
                res.push(JSON.parse(e))
              }
              return res
            }).then((data) => {
                this.setState({
                  isLoaded: true,
                  data: data,
                  config: _CONFIG_
                });
              }
            )
          }


          if (this.state.isFullScreen) {
            // debounce();
            this.resizeHandler();
          }


          // TODO debouce
          window.addEventListener("resize", this.debounceResizeHandler);
    }).catch(error=> {
      console.error(error)
      this.setState({
        isLoaded: true,
        error: error
      });
    })

  }
  resizeHandler() {

    console.log(`resized to: ${this.state.isFullScreen}`, window.innerWidth, 'x', window.innerHeight)
  }

  componentWillUnmount() {
    console.log('index componentWillUnmount')
    window.removeEventListener("resize", this.debounceResizeHandler);
  }

  static getDerivedStateFromError(error) {
    return {hasError: true, error: error};
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { error, isLoaded, data, filterData, filters, config } = this.state;
    const progressAttrs = {
      now: data.length,
      label: `${data.length}/${data.length}`
    };

    if (filters.length > 0) {
      progressAttrs.now = filterData.length;
      progressAttrs.label = `${filterData.length}/${data.length}`
    }
    if (this.state.hasError){
      return <div> ERROR </div>;
    }
    else if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Spinner animation="border" role="status">

        </Spinner>
        <span style={{ margin: '10px' }} >Loading...</span>
      </div>;
    } else {
      return (
        <div ref={this.view}>
          <nav className="navbar blue-bar pl-0">
            <div>
              <HomeButton url={config.HOME_URL}/>
              <span className="navbar-brand px-2 mb-0 h1 whitetext" >{title}</span>
            </div>
            <ProgressBar style={{ width: '30rem' }} className="border border-light bg-light"
              min={0}
              variant="success"
              max={data.length}
              now={progressAttrs.now}
              label={progressAttrs.label} />
          </nav>
          <FilterOperationPanel filters={filters} filterRemove={this.removeFiltersHandler.bind(this)} />
          {this.state.isFullScreen?<VisFullScreenView operation={config.VISUALIZATION_VIEW_CONFIGURATION.find(opt=>opt.id==this.state.fullScreenVis)}             data={data}
            filterData={filterData}
            filters={filters}
            filterAdded={this.addFiltersHandler.bind(this)}
            filterRemove={this.removeFiltersHandler.bind(this)}
            toggleFullScreen={this.fullScreenHandler}/>:
          <VisGridView
            data={data}
            filterData={filterData}
            filters={filters}
            filterAdded={this.addFiltersHandler.bind(this)}
            filterRemove={this.removeFiltersHandler.bind(this)}
            fullVisScreenHandler={this.fullScreenHandler}
            config={config}
          />}
        </div>
      );
    }
  }
}
render(<App />, document.getElementById("root"));
