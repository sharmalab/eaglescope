import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const transformList = (data, f) => {
  const map = new Map();
  data.forEach((d) => {
    const items = d[f];
    if (Array.isArray(items)) {
      items.forEach((i) => {
        if (!map.has(i)) { map.set(i, 0); }
        map.set(i, map.get(i) + 1);
      });
    } else {
      if (!map.has(items)) { map.set(items, 0); }
      map.set(items, map.get(items) + 1);
    }
  });
  return Array.from(map).map((d) => ({ key: d[0], value: d[1] }));
};

const transform = (data, field, isList = false) => {
  if (isList) {
    return transformList(data, field);
  }
  return d3.nest().key((d) => d[field])
    .sortKeys(d3.ascending)
    .rollup((v) => v.length)
    .entries(data);
};

function EnumList(props) {
  const margin = {
    top: 10,
    right: 10,
    bottom: 35,
    left: 35,
  };

  const fields = { x: 'key', y: 'value' };
  const fullData = transform(props.data, props.fields.x, props.fields.isList);
  const self = useRef();
  const scaleRef = useRef();
  const hightRef = useRef();
  const viewerRef = useRef();

  // Draw list of items
  const addList = (selection, data, className = 'og') => {
    selection.selectAll('.list-item')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'list-item')
      .html((d) => `
        <input class="form-check-input" type="checkbox" value="${d.key}" id="${d.key}" onChange={onSelect}>
        <label class="form-check-label" htmlFor="${d.key}">${d.key}</label>
        <span class="badge badge-secondary">${d.value}</span>`
      );
  };

  // Handle checkbox selection
  const onSelect = (e) => {
    const value = e.target.id;
    const filter = props.fields.isList ? {
      id: props.id,
      title: props.title,
      field: props.fields.x,
      operation: 'has',
      values: value,
    } : {
      id: props.id,
      title: props.title,
      field: props.fields.x,
      operation: 'eq',
      values: value,
    };
    props.filterAdded([filter]);
  };

  useEffect(() => {
    setTimeout(() => {
      let data = [];
      if (props.filters.length > 0) {
        data = transform(props.filterData, props.fields.x, props.fields.isList);
      } else {
        data = fullData;
      }
      addList(viewerRef.current, data, 'ft');
    }, 100);
  }, [props.filters, props.filterData, props.layout]);

  return <div id={props.id} ref={self} style={{ width: '100%', height: '100%' }} />;
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.shape({ x: PropTypes.string.isRequired, isList: PropTypes.bool }).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterAdded: PropTypes.func.isRequired,
  layout: PropTypes.shape({
    width: PropTypes.number.isRequired,
    currentCols: PropTypes.number.isRequired,
  }).isRequired,
};

export default BarChart;
