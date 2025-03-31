import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';

function SelectDropdown(props) {
  console.log('SelectDropdown');
  console.log(props);

  const [selected, setSelected] = useState([]);

  const changedHandler = (event) => {
    const selectedId = parseInt(event.target.value);
    const choosen = event.target.checked;
    if (choosen) {
      setSelected(
        [...selected, selectedId],
      );
    } else {
      setSelected(selected.filter((id) => selectedId !== id));
    }
  };

  return (
    <Row className="p-2">
      <Col className="p-2">
        <Form.Label as={Col} className="settings-label">
          {props.title}
          :
        </Form.Label>
      </Col>
      <Col className="p-2">
        {props.options && props.options.map((opt) => (
          <Form.Check
            className="custom-checkbox"
            key={`${props.name}_${opt.id}`}
            type="checkbox"
            id={opt.id}
            label={opt.value}
            checked={selected.includes(opt.id)}
            onChange={changedHandler}
            value={opt.id}
          />
        ))}
      </Col>
    </Row>
  );
}
export default SelectDropdown;
