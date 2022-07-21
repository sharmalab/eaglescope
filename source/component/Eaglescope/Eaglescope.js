import React, { PureComponent } from "react";
import Spinner from 'react-bootstrap/Spinner'
import VisGridView from "../Layout/VisGridView/VisGridView.js";
import VisFullScreenView from "../Layout/VisFullScreenView/VisFullScreenView.js"
import ESNavbar from "../ESNavbar/ESNavbar.js";
import FilterOperationPanel from '../FilterOperationPanel/FilterOperationPanel.js'
import SearchBar from "../SearchBar.js"
import { debounce, template } from "lodash";
import * as d3 from "d3";
import {
    Responsive,
    WidthProvider,
} from "react-grid-layout";

// import GridLayout from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

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
                broken = val !== filter.values
            }
            if (!broken && operation === 'gt') {
                broken = val <= filter.values
            }
            if (!broken && operation === 'gte') {
                broken = val < filter.values
            }
            if (!broken && operation === 'lt') {
                broken = val >= filter.values
            }
            if (!broken && operation === 'lte') {
                broken = val > filter.values
            }
            if (!broken && operation === 'ne') {
                broken = val === filter.values
            }
            if (!broken && operation === 'in') {
                broken = !filter.values.some(v => val == v)
            }
            if (!broken && operation === 'nin') {
                broken = filter.values.some(v => val == v)
            }
            if (!broken && operation === 'range') {
                broken = filter.values[0] > val || filter.values[1] < val
            }
            // search operates on the whole record instead of val
            if (!broken && operation === 'search'){
                broken = Object.values(record).join("|").indexOf(filter.values[0]) == -1
            }
            if (broken) {
                return false
            }
        }
        return true;
    })
}

export default class Eaglescope extends PureComponent {
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

        this.resizeHandler = this.resizeHandler.bind(this);
        this.debounceResizeHandler = debounce(this.resizeHandler, 500, { "maxWait": 1000 })
        this.fullScreenHandler = this.fullScreenHandler.bind(this)

    }
    fullScreenHandler(id, fullScreened) {
        this.setState({
            isFullScreen: fullScreened,
            fullScreenVis: id
        })

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
        // do filter
        const dataset_afterFilter = filterData(this.state.data, new_filters);
        this.setState({ filterData: [...dataset_afterFilter], filters: [...new_filters] })
        // handle url
        let thisUrl = new URL(window.location);
        let thisParams = new URLSearchParams(thisUrl.search);
        thisParams.set('filterState', JSON.stringify([...new_filters]));
        let newUrl = thisUrl.pathname + "?" + thisParams.toString();
        window.history.replaceState({}, document.title, newUrl);

    }

    removeFiltersHandler(id, isIndex = false) {
        // remove all filter
        if (id === 'ALL') {
            this.setState({ filterData: [], filters: [] });
            // handle url
            let thisUrl = new URL(window.location);
            let thisParams = new URLSearchParams(thisUrl.search);
            thisParams.delete('filterState');
            let newUrl = thisUrl.pathname + "?" + thisParams.toString();
            window.history.replaceState({}, document.title, newUrl);
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
        // handle url
        let thisUrl = new URL(window.location);
        let thisParams = new URLSearchParams(thisUrl.search);
        thisParams.set('filterState', JSON.stringify([...new_filters]));
        let newUrl = thisUrl.pathname + "?" + thisParams.toString();
        window.history.replaceState({}, document.title, newUrl);
    }

    componentDidMount() {
        const {config} = this.props;
        console.log("HERE", config);
        const _CONFIG_ = config;
        if (_CONFIG_.DATA_FORMAT === 'csv') {
            d3.csv(_CONFIG_.DATA_RESOURCE_URL, d => covertRaw(d)).then(data => {
                this.setState({
                    isLoaded: true,
                    data: data,
                    config: _CONFIG_
                });
            })

        } else if (_CONFIG_.DATA_FORMAT === 'json') {

            d3.json(_CONFIG_.DATA_RESOURCE_URL).then(d => {
                console.log('JSON', d);
            })
            fetch(_CONFIG_.DATA_RESOURCE_URL, {
                mode: 'cors',
                credentials: 'same-origin'
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
            }).then(x => x.text()).then(x => {
                let r = x.split("\n")
                let res = []
                for (const e of r) {
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

    }
    resizeHandler() {

        console.log(`resized to: ${this.state.isFullScreen}`, window.innerWidth, 'x', window.innerHeight)
    }

    componentWillUnmount() {
        console.log('index componentWillUnmount')
        window.removeEventListener("resize", this.debounceResizeHandler);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
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
        // handle url state filters only on first load
        let thisUrl = new URL(window.location);
        let thisParams = new URLSearchParams(thisUrl.search);
        let thisFilterState = thisParams.get('filterState');
        try{
          // needs to run after load, but never after setting other filters
          if(filters.length == 0 && thisFilterState && isLoaded){
            this.addFiltersHandler(JSON.parse(thisFilterState))
          }
        } catch (e){
          console.info(e);
        }

        if (filters.length > 0) {
            progressAttrs.now = filterData.length;
            progressAttrs.label = `${filterData.length}/${data.length}`
        }
        if (this.state.hasError) {
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
                <div >
                    <ESNavbar
                        url={config.HOME_URL}
                        title={config.TITLE}
                        max={data.length}
                        now={progressAttrs.now}
                        progressLabel={progressAttrs.label}
                        data={[filterData, data]}
                    />
                    <SearchBar filterAdded={this.addFiltersHandler.bind(this)} filterRemove={this.removeFiltersHandler.bind(this)}/>
                    <FilterOperationPanel filters={filters} filterRemove={this.removeFiltersHandler.bind(this)} />

                    {this.state.isFullScreen ? <VisFullScreenView operation={config.VISUALIZATION_VIEW_CONFIGURATION.find(opt => opt.id == this.state.fullScreenVis)} data={data}
                        filterData={filterData}
                        filters={filters}
                        filterAdded={this.addFiltersHandler.bind(this)}
                        filterRemove={this.removeFiltersHandler.bind(this)}
                        toggleFullScreen={this.fullScreenHandler} /> :

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
