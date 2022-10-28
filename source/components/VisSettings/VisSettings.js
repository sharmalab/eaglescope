import React, { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ConfigContext } from '../../contexts/ConfigContext';
import VisTypeComponents, { VisInputDescription } from '../VisualTools/VisTypeComponents';
import './VisSettings.css';
import VisFields from './containers/VisFields';

function VisSettings({
  chartConfig, show, setShow, setHover,
}) {
  const { config, setConfig } = useContext(ConfigContext);
  // const chartConfig = config.VISUALIZATION_VIEW_CONFIGURATION.find((f) => f.id === id);
  const inputDesc = VisInputDescription[chartConfig.chartType];

  const [title, setTitle] = useState(chartConfig.title);
  const [chartId, seChartId] = useState(chartConfig.id);
  const [description, setDescription] = useState(chartConfig.description);
  const [visSize, setVisSize] = useState({
    x: chartConfig.size[0],
    y: chartConfig.size[1],
  });
  const [xFields, setXFields] = useState(
    inputDesc?.isXArr ? chartConfig.fields.x : [chartConfig.fields.x],
  );
  const [yFields, setYFields] = useState(
    inputDesc?.isYArr ? chartConfig.fields.y : [chartConfig.fields.y],
  );
  const [zFields, setZFields] = useState([chartConfig.fields?.z]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldCharts = config.VISUALIZATION_VIEW_CONFIGURATION;
    // remove first
    let newCharts = oldCharts.filter((oc) => oc.id !== chartConfig.id);

    // Update chart config
    chartConfig.id = chartId;
    chartConfig.title = title;
    chartConfig.description = description;
    chartConfig.size[0] = Number(visSize.x);
    chartConfig.size[1] = Number(visSize.y);

    if (inputDesc?.isXArr) {
      chartConfig.fields.x = xFields;
    } else if (inputDesc?.hasX) {
      chartConfig.fields.x = xFields[0];
    }

    if (inputDesc?.isYArr) {
      chartConfig.fields.y = yFields;
    } else if (inputDesc?.hasY) {
      chartConfig.fields.y = yFields[0];
    }

    if (inputDesc?.hasZ) {
      chartConfig.fields.z = zFields[0];
    }

    // add
    newCharts = [...newCharts, chartConfig];

    setConfig((prevConfig) => ({
      ...prevConfig,
      VISUALIZATION_VIEW_CONFIGURATION: newCharts,
    }));

    // setShow(false);
  };

  const handleDelete = () => {
    const oldCharts = config.VISUALIZATION_VIEW_CONFIGURATION;
    const newCharts = oldCharts.filter((oc) => oc.id !== chartConfig.id);
    setConfig((prevConfig) => ({
      ...prevConfig,
      VISUALIZATION_VIEW_CONFIGURATION: newCharts,
    }));
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    if (setHover) setHover(false);
  };
  return (
    <>
      <Button
        style={{
          background: 'none',
          border: 'none',
        }}
        onClick={handleShow}
      >
        <FontAwesomeIcon icon="info-circle" />
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
          <Offcanvas.Title id="title">Chart Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={handleSubmit}>
            <p>
              <span className="visSettings-label">Chart Type:</span>
              {` ${VisTypeComponents[chartConfig.chartType]}`}
            </p>
            <div className="visSettings-row">
              <label>
                <span className="visSettings-label">Title</span>
                <input
                  className="visSettings-input"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <label>
                <span className="visSettings-label">Id</span>
                <input
                  className="visSettings-input"
                  type="text"
                  value={chartId}
                  onChange={(e) => seChartId(e.target.value)}
                />
              </label>
            </div>

            <label>
              <div
                style={{
                  display: 'block',
                }}
                className="visSettings-label"
              >
                Description
              </div>
              <textarea
                name="paragraph_text"
                cols="54"
                className="visSettings-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              <span className="visSettings-label">Size</span>
              <div
                style={{
                  width: '50%',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <span>X: </span>
                <input
                  style={{
                    width: '100%',
                  }}
                  className="visSettings-input"
                  type="number"
                  value={visSize.x}
                  onChange={(e) => setVisSize((prev) => ({ ...prev, x: e.target.value }))}
                />
                <span>Y: </span>
                <input
                  style={{
                    width: '100%',
                  }}
                  className="visSettings-input"
                  type="number"
                  value={visSize.y}
                  onChange={(e) => setVisSize((prev) => ({ ...prev, y: e.target.value }))}
                />
              </div>
            </label>
            <span className="visSettings-label">Fields</span>
            <div style={{ display: 'flex' }}>
              {inputDesc?.hasX && (
                <VisFields
                  title="X"
                  fields={xFields}
                  setFields={setXFields}
                  isArr={inputDesc?.isXArr}
                />
              )}
              {inputDesc?.hasY && (
                <VisFields
                  title="Y"
                  fields={yFields}
                  setFields={setYFields}
                  isArr={inputDesc?.isYArr}
                />
              )}
            </div>
            {inputDesc?.hasZ && (
              <VisFields title="Z" fields={zFields} setFields={setZFields} isArr={false} />
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <input
                type="submit"
                value="Save"
                style={{
                  marginTop: '10px',
                  width: '48%',
                  backgroundColor: config.THEME_COLOR ? config.THEME_COLOR : 'rgb(0, 123, 255)',
                  border: 'none',
                  color: '#fff',
                  padding: '0.375rem 0.75rem',
                }}
              />
              <Button
                onClick={handleDelete}
                variant="danger"
                style={{
                  marginTop: '10px',
                  width: '48%',
                  border: 'none',
                  color: '#fff',
                  padding: '0.375rem 0.75rem',
                }}
              >
                Delete Chart
              </Button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default VisSettings;

VisSettings.propTypes = {
  chartConfig: PropTypes.shape().isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  setHover: PropTypes.func,
};

VisSettings.defaultProps = {
  setHover: null,
};
