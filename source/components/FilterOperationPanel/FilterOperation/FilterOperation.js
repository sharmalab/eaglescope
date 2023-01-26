import React, { PureComponent } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import './FilterOperation.css';

const createOperationText = (field, opr, values) => {
  // values = values==-1?'N/A':values;
  switch (
    opr // eq,  gt, gte, in, lt, lte, ne, nin
  ) {
    case 'eq':
      return (
        <div>
          <span className="field">{field}</span>
          <span className="opr"> = </span>
          <span className="value">{values}</span>
        </div>
      );
    case 'gt':
      return (
        <div>
          <span className="field">{field}</span>
          <span className="opr">
            {' '}
            {'>'}
            {' '}
          </span>
          <span className="value">{values}</span>
        </div>
      );
    case 'gte':
      return (
        <div>
          <span className="field">{field}</span>
          <span className="opr"> ≥ </span>
          <span className="value">{values}</span>
        </div>
      );
    case 'lt':
      return (
        <div>
          <span className="field">{field}</span>
          <span className="opr"> &lt; </span>
          <span className="value">{values}</span>
        </div>
      );
    case 'lte':
      return (
        <div>
          <span className="field">{field}</span>
          <span className="opr"> ≤ </span>
          <span className="value">{values}</span>
        </div>
      );
    case 'ne':
      return (
        <div>
          <span className="field">{field}</span>
          <span className="opr"> ≠ </span>
          <span className="value">{values}</span>
        </div>
      );
    case 'in':
      return (
        <div>
          <span className="field">{field}</span>
          <span className="opr"> Is In </span>
          <span className="value">
            [
            {values.join(', ').toLocaleString()}
            {' '}
            ]
          </span>
        </div>
      );
    case 'nin':
      return (
        <div>
          <span className="field">{field}</span>
          <span className="opr"> Is Not In </span>
          <span className="value">
            [
            {values.join(', ').toLocaleString()}
            {' '}
            ]
          </span>
        </div>
      );
    case 'range':
      return (
        <div>
          <span className="value">{values[0]}</span>
          <span className="opr"> ≤ </span>
          <span className="field">{field}</span>
          <span className="opr"> ≤ </span>
          <span className="value">{values[1]}</span>
        </div>
      );
    case 'search':
      return (
        <div>
          <span className="opr"> Search </span>
          <span className="value">{values[0]}</span>
        </div>
      );
    default:
      return (
        <div className="error">
          Can&apos;t Find The
          {' '}
          <span className="warning">{opr}</span>
          {' '}
          Filter Operation
        </div>
      );
  }
};

export default class FilterOperation extends PureComponent {
  render() {
    const {
      index, title = '', operation, field, values,
    } = this.props;

    return (
      <Badge
        bg="info"
        style={{ display: 'inline-flex', textAlign: 'center', alignItems: 'center' }}
      >
        <span className="title">{title}</span>
        <span className="separator">&nbsp;|&nbsp;</span>
        {createOperationText(field, operation, values)}
        <Button
          variant="info"
          size="sm"
          onClick={() => {
            this.props.filterRemove(index, true);
          }}
          style={{ padding: '0 .3rem' }}
        >
          <FontAwesomeIcon icon="times" size="sm" />
        </Button>
      </Badge>
    );
  }
}

FilterOperation.propTypes = {
  filterRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string,
  operation: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  values: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]).isRequired,
};

FilterOperation.defaultProps = {
  title: '',
};
