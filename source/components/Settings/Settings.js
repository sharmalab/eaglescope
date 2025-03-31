import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams } from 'react-router-dom';
import { ConfigContext } from '../../contexts/ConfigContext';
import { DataContext } from '../../contexts/DataContext';
import './Settings.css';
import ColumnInput from './containers/ColumnInput';
import RawInput from './containers/RawInput';
import VisSettings from '../VisSettings/VisSettings';
import VisTypeComponents, { VisInputDescription } from '../VisualTools/VisTypeComponents';
import SelectDropdown from '../selectDropdown';

// Create the Basic Auth credentials
const username = 'Nan';
const password = 'MaternalHealth';
const credentials = btoa(`${username}:${password}`); // btoa encodes to Base64

const urlConstraintProp = 'http://localhost:5000/ConstraintProp';
const urlConstraintPropVals = 'http://localhost:5000/ConstraintPropVals?ConstraintPropID=';

const newConfig = {
  method: 'GET',
  // mode: 'no-cors',
  headers: {
    Authorization: `Basic ${credentials}`,
    'Content-Type': 'application/json',
  },
};

function Settings() {
  const { config, setConfig } = useContext(ConfigContext);
  const {
    tables, setTables, variables, setVariables,
  } = useContext(DataContext);
  const [title, setTitle] = useState(config.TITLE);
  const [url, setUrl] = useState(config.DATA_RESOURCE_URL);
  const [format, setFormat] = useState(config.DATA_FORMAT);
  const [color, setColor] = useState(config.THEME_COLOR ? config.THEME_COLOR : '#007bff');
  const [homeUrl, setHomeUrl] = useState(config.HOME_URL);
  const [headerHight, setHeaderHight] = useState(config.HEIGHT_OF_VIS_HEADER);
  const [hideBorder, setHideBorder] = useState(config?.HIDE_BORDER ? 'Hide' : 'Show');
  const [addChart, setAddChart] = useState('PIE_CHART');
  const [newVis, setNewVis] = useState({});
  const [showNewVis, setShowNewVis] = useState(false);

  const [borderRadius, setBorderRadius] = useState(
    config?.BORDER_RADIUS ? config.BORDER_RADIUS : 0,
  );
  const [visMargin, setVisMargin] = useState({
    x: config.MARGIN_OF_GRID_VIEW[0],
    y: config.MARGIN_OF_GRID_VIEW[1],
  });
  const [visSize, setVisSize] = useState({
    x: config.UNIT_OF_GRID_VIEW[0],
    y: config.UNIT_OF_GRID_VIEW[1],
  });

  const [show, setShow] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('skipModal') === 'true') {
      setShow(false);
    }
  }, []);

  const [pending, setPending] = useState(false);

  const [populations, setPopulations] = useState(null);
  const [stats, setStats] = useState(null);
  const [measured, setMeasured] = useState(null);

  // test start
  const [selectedConstraint, setSelectedConstraint] = useState({

  });
  const [selectedConstraintValues, setSelectedConstraintValues] = useState([]);

  // OMOP - SDOH Query START
  const [countType, setCountType] = useState('');
  const [conceptSelection, setConceptSelection] = useState('');
  const [conceptType, setConceptType] = useState('');

  // tables
  const [omopTables, setOmopTables] = useState([]);
  const [sdohTables, setSdohTables] = useState([]);

  const countTypeHandleChange = (e) => {
    setCountType(e.target.value);
  };
  const conceptTypeHandleChange = (e) => {
    setConceptType(e.target.value);
  };
  const conceptSelectionHandleChange = (e) => {
    setConceptSelection(e.target.value);
  };
  // END

  const handleConstraintValChange = (event) => {
    console.log('handleConstraintValChange');
    console.log(event.target);
    const newSelectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedConstraintValues(newSelectedOptions);
  };

  const handleConstraintChange = (event) => {
    console.log('test');

    const { id, value } = event.target;
    console.log(event.target);
    console.log(id, value);
    setSelectedConstraint({ ID: id, CONSTRAINT_PROPERTIES: value });

    // Fetch data from API based on selectedOption1

    fetch(`${urlConstraintPropVals}${id}`, newConfig)
      .then((response) => response.json())
      .then((data) => setVariables(data));
  };

  // test end

  function saveToLocalStore(key, jsonData) {
    try {
      const localKey = `es-${key}`;
      const jsonString = JSON.stringify(jsonData);
      localStorage.setItem(localKey, jsonString);
      console.log(`Data saved under key: ${localKey}`);
    } catch (err) {
      console.error('Error saving data to localStorage:', err);
    }
  }

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
      HIDE_BORDER: hideBorder !== 'Show',
      BORDER_RADIUS: borderRadius,
      DATA_RESOURCE_URL: url,
      DATA_FORMAT: format,
      VISUALIZATION_VIEW_CONFIGURATION:
        url !== prevConfig.DATA_RESOURCE_URL || format !== prevConfig.DATA_FORMAT
          ? []
          : prevConfig.VISUALIZATION_VIEW_CONFIGURATION,
    }));

    setPending(false);
  };

  const APIHandleSubmit = async (e) => {
    console.log(e, 'eee');
    e.preventDefault();
    setPending(true);
    // get name
    console.log('form', e.target);
    const name = document.getElementById('dataSource').value;
    console.log('nameeee', name);

    const pies = []; // later
    const bars = [];
    // also need map
    let varState = {
      RPL_THEME1: { type: 'feature_range', cardinality: 10 },
      RPL_THEME2: { type: 'feature_range', cardinality: 10 },
      RPL_THEME3: { type: 'feature_range', cardinality: 10 },
      RPL_THEME4: { type: 'feature_range', cardinality: 10 },
      SVI_SCORE: { type: 'feature_range', cardinality: 10 },
      STCNTY: { type: 'geo_county', cardinality: 162 },
      VISIT_COUNTS: { type: 'stat_count', cardinality: -1 },
      concept_name: { name: 'feature_category', cardinality: 1000 },
    };
    let new_url = './config/sample_svi.json';
    if (name == 'adi') {
      varState = {
        ADI_NATRANK: { type: 'feature_range', cardinality: 10 },
        ADI_STATERNK: { type: 'feature_range', cardinality: 10 },
        STCNTY: { type: 'geo_county', cardinality: 162 },
        VISIT_COUNTS: { type: 'stat_count', cardinality: -1 },
        concept_name: { name: 'feature_category', cardinality: 1000 },
      };

      new_url = './config/sample_adi.json';
    }

    const categoricals = [];
    let count_key = '';

    for (const [key, value] of Object.entries(varState)) {
      if (value.type === 'feature_range' || value.type === 'feature_category') {
        categoricals.push(key);
      } else if (value.type === 'stat_count') {
        count_key = key;
      }
    }

    console.error(categoricals, count_key, 'meow');

    const charts = categoricals.map((x) => ({
      id: `${count_key}-${x}`,
      title: `${count_key} in ${x}`,
      description: '',
      chartType: 'BAR_CHART',
      fields: {
        x,
        y: count_key,
      },
      method: 'sum',
      size: [2, 1],
      priority: 100,
    }));

    const mapChart = {
      id: 'geo-maps-polygon',
      title: 'Geo Map - polygon',
      description: 'Open Street polygon',
      type: 'geojson',
      format: 'json',
      chartType: 'VIS_SPATIAL_MAP',
      fields: {
        title: 'COUNTY',
        color: count_key,
        label: [...categoricals, count_key],
      },
      size: [2, 2],
      priority: 70,
    };

    const tableChart = {
      id: 'collection_data_table',
      title: 'Data Table',
      description: 'Showing Collection Data',
      chartType: 'VIS_DATA_TABLE',
      groupedField: 'STCNTY',
      method: 'sum',
      fields: [
        ...categoricals.map((categorical) => ({
          dataKey: categorical,
          label: `${categorical}`,
        })),
        {
          dataKey: count_key,
          label: `${count_key}`,
        },
      ],
      size: [4, 2],
      priority: 100,
    };

    const newConfig = {
      TITLE: `${name.toUpperCase()} Auto Dashboard`,
      HOME_URL: homeUrl,
      HEIGHT_OF_VIS_HEADER: headerHight,
      MARGIN_OF_GRID_VIEW: [Number(visMargin.x), Number(visMargin.y)],
      UNIT_OF_GRID_VIEW: [Number(visSize.x), Number(visSize.y)],
      THEME_COLOR: color,
      HIDE_BORDER: hideBorder !== 'Show',
      BORDER_RADIUS: borderRadius,
      DATA_RESOURCE_URL: new_url,
      DATA_FORMAT: format,
      HAS_SETTINGS: 1,
      DRAGGABLE: 1,
      DATA_LOOKUP_URL: './config/Counties_Georgia.geojson',
      VISUALIZATION_VIEW_CONFIGURATION: [...charts, mapChart, tableChart],
    };

    saveToLocalStore('dashboardConfig', newConfig);
    console.log('set config!');

    window.location = '?configurl=local://dashboardConfig&skipModal=true';

    setConfig((prevConfig) => (newConfig));

    setPending(false);
    handleClose();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setNewVis({
      title: '',
      id: '',
      description: '',
      chartType: addChart,
      size: [1, 1],
      fields: {
        x: VisInputDescription[addChart]?.isXArr ? [''] : '',
        y: VisInputDescription[addChart]?.isYArr ? [''] : '',
        z: '',
      },
    });

    setShow(false);
    setShowNewVis(true);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      // Create the Basic Auth credentials
      const username = 'Nan';
      const password = 'MaternalHealth';
      const credentials = btoa(`${username}:${password}`); // btoa encodes to Base64
      const newConfig = {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      };
      try {
        const OMOP_resp = await fetch('http://localhost:5000/get_OMOP_Tables', newConfig);
        if (!OMOP_resp.ok) {
          throw new Error('OMOP_Tables was not ok');
        }
        const OMOPTables = await OMOP_resp.json();

        const SDOH_resp = await fetch('http://localhost:5000/get_SDOH_Tables', newConfig);
        if (!SDOH_resp.ok) {
          throw new Error('SDOH_Tables was not ok');
        }
        const SDOHTables = await SDOH_resp.json();

        console.log('Tables', OMOPTables, SDOHTables);
        setOmopTables(OMOPTables);
        setSdohTables(SDOHTables);
      } catch (err) {
        // setError(err);
      } finally {
        // setLoading(false);
      }
    };
    console.log('~~~~~~~~test~~~~~~~~~~~~');
    fetchInfo();
  }, []);

  return (
    <>
      {showNewVis && <VisSettings chartConfig={newVis} show={showNewVis} setShow={setShowNewVis} />}

      {config.HAS_SETTINGS && (
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
      )}

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{
          // width: '500px',
          width: '100%',

        }}
      >
        <Offcanvas.Header>
          {/* <Offcanvas.Header closeButton> */}
          {/* <Offcanvas.Title id="title">Settings</Offcanvas.Title> */}
          <Offcanvas.Title id="title">OMOP - SDOH Query</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="content-body">
          <Form onSubmit={handleSubmit} className="hidden">
            <Row>
              <Col className="p-0">
                <ColumnInput label="Title" value={title} setValue={setTitle} />
                <ColumnInput label="Data URL" value={url} setValue={setUrl} />
                <ColumnInput label="Data Format" value={format} setValue={setFormat} />
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="settings-label">Borders</Form.Label>
                  <Form.Select value={hideBorder} onChange={(e) => setHideBorder(e.target.value)}>
                    <option>Show</option>
                    <option>Hide</option>
                  </Form.Select>
                </Form.Group>
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
                <ColumnInput
                  label="Border Radius"
                  value={borderRadius}
                  setValue={setBorderRadius}
                  type="number"
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

              <Form.Group className="mb-3">
                <Form.Label className="settings-label">Add New Chart</Form.Label>
                <div style={{ display: 'flex' }}>
                  <Form.Select
                    value={addChart}
                    onChange={(e) => setAddChart(e.target.value)}
                    style={{
                      width: '70%',
                      marginRight: '10px',
                    }}
                  >
                    {Object.keys(VisTypeComponents).map((key) => (
                      <option key={key} value={key}>
                        {VisTypeComponents[key]}
                      </option>
                    ))}
                  </Form.Select>
                  <Button
                    style={{
                      backgroundColor: config.THEME_COLOR ? config.THEME_COLOR : 'rgb(0, 123, 255)',
                      border: 'none',
                    }}
                    onClick={handleAdd}
                  >
                    Add Chart
                  </Button>
                </div>
              </Form.Group>

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

          <Form onSubmit={APIHandleSubmit}>
            <Row>
              <Col className="p-0">
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="settings-label">OMOP Tables</Form.Label>
                  <Form.Select value={hideBorder} onChange={(e) => setHideBorder(e.target.value)}>
                    {omopTables.length > 0 && omopTables.map((t) => <option value={t}>{t}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="p-0">
                <Form.Label as={Col} className="settings-label">
                  Count Type Selection
                </Form.Label>
                <Form.Group as={Col}>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check
                      type="radio"
                      name="count_type"
                      value="unique_person_counts"
                      checked={countType === 'unique_person_counts'}
                      onChange={countTypeHandleChange}
                    />
                    Unique Person Counts
                  </Form.Label>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check
                      type="radio"
                      name="count_type"
                      value="unique_visit_counts"
                      checked={countType === 'unique_visit_counts'}
                      onChange={countTypeHandleChange}
                    />
                    Unique Visit Counts
                  </Form.Label>

                </Form.Group>
              </Col>
              <Row>
                <Form.Label className="settings-label">Concept Code/Name Search</Form.Label>
              </Row>

              <Row className="mb-3">

                <Col>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check
                      type="radio"
                      name="concept_selection"
                      value="Concept_Name"
                      checked={conceptSelection === 'Concept_Name'}
                      onChange={conceptSelectionHandleChange}
                    />
                    Concept Name
                  </Form.Label>
                </Col>
                <Col><Form.Control type="text" size="sm" disabled={conceptSelection !== 'Concept_Name'} /></Col>
              </Row>
              <Row className="mb-3">

                <Col>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check
                      type="radio"
                      name="concept_selection"
                      value="Concept_Code"
                      checked={conceptSelection === 'Concept_Code'}
                      onChange={conceptSelectionHandleChange}
                    />
                    Concept Code
                  </Form.Label>
                </Col>
                <Col><Form.Control type="text" size="sm" disabled={conceptSelection !== 'Concept_Code'} /></Col>
              </Row>
              <Row>
                <Form.Label className="settings-label">Concept Type Selection</Form.Label>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check
                      type="radio"
                      name="concept_type"
                      value="Yes"
                      checked={conceptType === 'Yes'}
                      onChange={conceptTypeHandleChange}
                    />
                    Yes
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check
                      type="radio"
                      name="concept_type"
                      value="No"
                      checked={conceptType === 'No'}
                      onChange={conceptTypeHandleChange}
                    />
                    No
                  </Form.Label>
                </Col>
              </Row>
              {/* <hr/> */}
              <Col className="p-0">
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="settings-label">SDOH Tables</Form.Label>
                  <Form.Select value={hideBorder} onChange={(e) => setHideBorder(e.target.value)}>
                    {sdohTables.length > 0 && sdohTables.map((t) => <option value={t}>{t}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="p-0">
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="settings-label">SDOH SVI/ADI</Form.Label>
                  <Form.Select value={hideBorder} onChange={(e) => setHideBorder(e.target.value)}>
                    <option>table 1</option>
                    <option>table 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Row>
                <Col className="p-0">
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label className="settings-label">Show data for:</Form.Label>
                    <Form.Select id="dataSource" value={hideBorder} onChange={(e) => setHideBorder(e.target.value)}>
                      <option value="svi">SVI</option>
                      <option value="adi">ADI</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
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
                    Submit
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
