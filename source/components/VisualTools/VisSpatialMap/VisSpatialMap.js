import React, { PureComponent, createRef } from 'react';
import * as d3 from 'd3';
// import { useMap } from 'react-leaflet/hooks'
// import {
//   AutoSizer, Column, Table, SortDirection,
// } from 'react-virtualized';
// import Draggable from 'react-draggable';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSortDown, faSortUp, faSort } from '@fortawesome/free-solid-svg-icons';
// import arrayMove from 'array-move';
// import PropTypes from 'prop-types';
// import VisDataTableControl from './VisDataTableControl/VisDataTableControl';
import './VisSpatialMap.css';
import { transform } from 'lodash';

export default class VisSpatialMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
      map: null,
    };
    const color_values = props.data.map((d) => d[props.fields.color]);
    color_values.sort((a, b) => a - b);
    this.colors = d3.scaleSequentialQuantile(d3.interpolateYlOrRd).domain(color_values);
    this.mapRef = createRef();
    this.drawpolygon = this.drawpolygon.bind(this);
    this.getColor = this.getColor.bind(this);
    this.style = this.style.bind(this);
  }

  getColor(d) {
    return this.colors(d[this.props.fields.color]);
  }

  style(feature) {
    return {
      fillColor: this.getColor(feature),
      weight: 2,
      opacity: 0.8,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.6,
    };
  }

  drawpolygon(features) {
    // clear
    this.map.eachLayer((layer) => {
      if (layer instanceof L.GeoJSON) {
        this.map.removeLayer(layer);
      }
    });
    //
    L.geoJson(features, {
      style: this.style,
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(`<div class="map_tip"><label>${feature[this.props.fields.title]}</label>
              ${this.props.fields.label.map((l) => `<label>${l}:${feature[l]}</label>`).join('')}`, { sticky: true });
        const {
          id, title, fields, filterAdded,
        } = this.props;
        // mouseover
        layer.on('mouseover', () => {
          layer.setStyle({
            dashArray: '3',
            fillOpacity: 1,
          });
        });
        // mouseout
        layer.on('mouseout', () => {
          layer.setStyle({
            dashArray: '5',
            fillOpacity: 0.6,
          });
        });
        // click to add filter
        layer.on('click', () => {
          console.log(feature);
          const filter = {
            id,
            title,
            field: fields.title,
            operation: 'eq',
            values: feature[fields.title],
          };
          filterAdded([filter]);
        });
      },
    }).addTo(this.map);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    // geojson
    if (this.props.data !== prevProps.data
      || this.props.filterData !== prevProps.filterData
      || this.props.filters !== prevProps.filters) { // rerender
      const { data, filterData, filters } = this.props;
      this.drawpolygon(filters.length > 0 ? filterData : data);
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove(); // Clean up when component unmounts
    }
  }

  componentDidMount() {
    console.log('componentDidMount');

    const fetchData = async () => {
      try {
        if (this.props.url && this.props.format == 'json') {
          const abortCont = new AbortController();
          const config = {
            signal: abortCont.signals,
            mode: 'cors',
            credentials: 'same-origin',
          };
          const response = await fetch(this.props.url, config);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json(); z;
          this.setState({ data, loading: false });
        } else if (this.props.url && this.props.format == 'csv') {
          // const data = await d3.csv(this.props.url);
          d3.csv(this.props.url).then((res) => {
            this.setState({ data: res, loading: false });
          });
        }
      } catch (error) {
        this.setState({ error: error.message, loading: false });
      }
    };

    if (this.props.url) {
      fetchData();
    }

    setTimeout(() => {
      const bbox = [[30.35909162440624, -85.60674924999249], [35.000591132701324, -80.84375612136121]];
      this.map = L.map(this.props.id).fitBounds(bbox);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);
      const { data, filterData, filters } = this.props;
      this.drawpolygon(filters.length > 0 ? filterData : data);

      // const legend = L.control({ position: "bottomright" });
    }, 500);
  }

  createMap() {

  }

  render() {
    // const { fields, sortBy, sortDirection } = this.state;
    // const finalData = this.getSortData();
    // position = [51.505, -0.09]
    return (
      <div id={this.props.id} ref={this.mapRef} style={{ width: '100%', height: '100%' }} />
    );
  }
}

// VisSpatialMap.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   // filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   // fields: PropTypes.arrayOf(PropTypes.shape()).isRequired,
//   filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
// };
