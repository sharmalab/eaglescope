import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function ColumnInput(props) {
  return (
    <Form.Group as={Col} className="mb-3">
      <Form.Label className="settings-label">{props.label}</Form.Label>
      <Form.Control
        type={props.type ? props.type : 'text'}
        placeholder={props.label}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        disabled={props.disabled ? props.disabled : false}
      />
    </Form.Group>
  );
}

export default ColumnInput;

ColumnInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
};

ColumnInput.defaultProps = {
  type: 'text',
};
