import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import FilterOperation from './FilterOperation/FilterOperation';
import './FilterOperationPanel.css';

export default class FilterOperationPanel extends PureComponent {
  render() {
    const { filters } = this.props;
    if (filters.length <= 0) return null;
    return (
      <div className="filterOperationPanel">
        {filters.map((filter, idx) => (
          <FilterOperation
            key={filter.id}
            index={idx}
            {...filter}
            filterRemove={this.props.filterRemove}
          />
        ))}
        <Button variant="danger" size="sm" onClick={() => this.props.filterRemove('ALL')}>
          <span style={{ fontWeight: 'bold', fontSize: '.75rem' }}>Clear All Filters</span>
        </Button>
      </div>
    );
  }
}

FilterOperationPanel.propTypes = {
  filterRemove: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
