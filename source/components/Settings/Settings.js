import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ConfigContext } from '../../contexts/ConfigContext';
import './Settings.css';
import ColumnInput from './containers/ColumnInput';
import RawInput from './containers/RawInput';

function Settings() {
  const { config, setConfig } = useContext(ConfigContext);

  const [title, setTitle] = useState(config.TITLE);
  const [url, setUrl] = useState(config.DATA_RESOURCE_URL);
  const [format, setFormat] = useState(config.DATA_FORMAT);
  const [color, setColor] = useState(config.THEME_COLOR ? config.THEME_COLOR : '#007bff');
  const [homeUrl, setHomeUrl] = useState(config.HOME_URL);
  const [headerHight, setHeaderHight] = useState(config.HEIGHT_OF_VIS_HEADER);
  const [visMargin, setVisMargin] = useState({
    x: config.MARGIN_OF_GRID_VIEW[0],
    y: config.MARGIN_OF_GRID_VIEW[1],
  });
  const [visSize, setVisSize] = useState({
    x: config.UNIT_OF_GRID_VIEW[0],
    y: config.UNIT_OF_GRID_VIEW[1],
  });

  const [show, setShow] = useState(false);
  const [pending, setPending] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setPending(true);

    setConfig((prevConfig) => ({
      ...prevConfig,
      TITLE: title,
      HOME_URL: homeUrl,
      HEIGHT_OF_VIS_HEADER: headerHight,
      MARGIN_OF_GRID_VIEW: [Number(visMargin.x), Number(visMargin.y)],
      UNIT_OF_GRID_VIEW: [Number(visSize.x), Number(visSize.y)],
      THEME_COLOR: color,
    }));

    setPending(false);
  };
  return (
    <>
      <Button
        size="lg"
        style={{
          background: 'none',
          border: 'none',
        }}
        onClick={handleShow}
      >
        <span>
          <FontAwesomeIcon size="1x" icon="fa-solid fa-bars" />
        </span>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{
          width: '500px',
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="title">Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col className="p-0">
                <ColumnInput label="Title" value={title} setValue={setTitle} />
                <ColumnInput label="Data URL" value={url} setValue={setUrl} disabled />
                <ColumnInput label="Data Format" value={format} setValue={setFormat} disabled />
              </Col>

              <Col className="p-0">
                <ColumnInput label="Theme Color" value={color} setValue={setColor} type="color" />
                <ColumnInput label="Home URL" value={homeUrl} setValue={setHomeUrl} />
                <ColumnInput
                  label="Hight of Chart Header"
                  value={headerHight}
                  setValue={setHeaderHight}
                  type="number"
                  disabled
                />
              </Col>

              <Row>
                <Form.Label as={Col} className="settings-label">
                  Margin of Grid
                </Form.Label>
              </Row>

              <Row className="mb-3">
                <RawInput label="X" value={visMargin.x} setValue={setVisMargin} field="x" />
                <RawInput label="Y" value={visMargin.y} setValue={setVisMargin} field="y" />
              </Row>

              <Row>
                <Form.Label className="settings-label">Unit of Grid View</Form.Label>
              </Row>

              <Row className="mb-3">
                <RawInput label="X" value={visSize.x} setValue={setVisSize} field="x" />
                <RawInput label="Y" value={visSize.y} setValue={setVisSize} field="y" />
              </Row>

              <Row>
                <Col sm={5}>
                  <Button
                    style={{
                      width: '100%',
                      backgroundColor: config.THEME_COLOR ? config.THEME_COLOR : 'rgb(0, 123, 255)',
                      border: 'none',
                    }}
                    type="submit"
                    disabled={pending}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Row>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Settings;
