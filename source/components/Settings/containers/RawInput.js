import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function RawInput(props) {
  const { field } = props;
  return (
    <Col>
      <Form.Group as={Row}>
        <Form.Label column sm={2} className="settings-label">
          {props.label}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type={props.type ? 'number' : props.type}
            placeholder={props.label}
            value={props.value}
            onChange={(e) => props.setValue((prev) => {
              const out = { ...prev };
              out[field] = e.target.value;
              return out;
            })}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}

export default RawInput;

RawInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  field: PropTypes.string.isRequired,
};

RawInput.defaultProps = {
  type: 'text',
};
