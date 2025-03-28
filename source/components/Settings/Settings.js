import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ConfigContext } from '../../contexts/ConfigContext';
import { DataContext } from '../../contexts/DataContext';
import './Settings.css';
import ColumnInput from './containers/ColumnInput';
import RawInput from './containers/RawInput';
import VisSettings from '../VisSettings/VisSettings';
import VisTypeComponents, { VisInputDescription } from '../VisualTools/VisTypeComponents';
import SelectDropdown from '../selectDropdown';

// Create the Basic Auth credentials
const username = 'Nan'
const password = 'MaternalHealth'
const credentials = btoa(`${username}:${password}`); // btoa encodes to Base64

const urlConstraintProp = `http://localhost:5000/ConstraintProp`
const urlConstraintPropVals = `http://localhost:5000/ConstraintPropVals?ConstraintPropID=`

const newConfig = {
  method: "GET",
  // mode: 'no-cors',
  headers: {
    'Authorization': `Basic ${credentials}`,
    'Content-Type': 'application/json'
  }
}



function Settings() {
  const { config, setConfig } = useContext(ConfigContext);
  const { tables, setTables, variables, setVariables } = useContext(DataContext);
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
  const [pending, setPending] = useState(false);

  const [populations, setPopulations] = useState(null)
  const [stats, setStats] = useState(null)
  const [measured, setMeasured] = useState(null)

  // test start
  const [selectedConstraint, setSelectedConstraint] = useState({

  })
  const [selectedConstraintValues, setSelectedConstraintValues] = useState([])

  // OMOP - SDOH Query START
  const [countType, setCountType] = useState('');
  const [conceptSelection, setConceptSelection] = useState('');
  const [conceptType, setConceptType] = useState('');

  // tables
  const [omopTables, setOmopTables] = useState([]);
  const [sdohTables, setSdohTables] = useState([]);

  const countTypeHandleChange = (e) => {
    setCountType(e.target.value);
  }
  const conceptTypeHandleChange = (e) => {
    setConceptType(e.target.value);
  }
  const conceptSelectionHandleChange = (e) => {
    setConceptSelection(e.target.value);
  }
  // END

  const handleConstraintValChange = (event) => {
    console.log('handleConstraintValChange')
    console.log(event.target)
    const newSelectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedConstraintValues(newSelectedOptions);
  };


  const handleConstraintChange = (event) => {
    console.log('test')

    const { id, value } = event.target;
    console.log(event.target)
    console.log(id, value)
    setSelectedConstraint({ "ID": id, "CONSTRAINT_PROPERTIES": value })


    // Fetch data from API based on selectedOption1

    fetch(`${urlConstraintPropVals}${id}`, newConfig)
      .then(response => response.json())
      .then(data => setVariables(data));
  };


  // test end




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

  const APIHandleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  }

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

    const fetchData = async () => {
      // Create the Basic Auth credentials
      const username = 'Nan'
      const password = 'MaternalHealth'
      const credentials = btoa(`${username}:${password}`); // btoa encodes to Base64
      const newConfig = {
        method: "GET",
        // mode: 'no-cors',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json'
        }
      }
      try {
        const OMOP_resp = await fetch("http://localhost:5000/get_OMOP_Tables", newConfig);
        if (!OMOP_resp.ok) {
          throw new Error("OMOP_Tables was not ok");
        }
        var OMOPTables = await OMOP_resp.json();

        const SDOH_resp = await fetch("http://localhost:5000/get_SDOH_Tables", newConfig);
        if (!SDOH_resp.ok) {
          throw new Error("SDOH_Tables was not ok");
        }
        var SDOHTables = await SDOH_resp.json();

        console.log('Tables', OMOPTables, SDOHTables)
        setOmopTables(OMOPTables)
        setSdohTables(SDOHTables)
      } catch (err) {
        // setError(err);
      } finally {
        // setLoading(false);
      }
    };
    console.log('~~~~~~~~test~~~~~~~~~~~~')
    fetchData();
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
          width: '100%'
          
        }}
      >
        <Offcanvas.Header>
        {/* <Offcanvas.Header closeButton> */}
          {/* <Offcanvas.Title id="title">Settings</Offcanvas.Title> */}
          <Offcanvas.Title id="title">OMOP - SDOH Query</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='content-body'>
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

          <Form onSubmit={APIHandleSubmit} >
            <Row>
              <Col className="p-0">
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="settings-label" >OMOP Tables</Form.Label>
                  <Form.Select value={hideBorder} onChange={(e) => setHideBorder(e.target.value)}>
                    {omopTables.length > 0 && omopTables.map((t)=><option value={t}>{t}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="p-0">
                <Form.Label as={Col} className="settings-label">
                  Count Type Selection
                </Form.Label>
                <Form.Group as={Col}>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check type="radio" name="count_type"
                      value="unique_person_counts"
                      checked={countType === 'unique_person_counts'}
                      onChange={countTypeHandleChange} />
                    Unique Person Counts
                  </Form.Label>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check type="radio" name="count_type"
                      value="unique_visit_counts"
                      checked={countType === 'unique_visit_counts'}
                      onChange={countTypeHandleChange} />
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
                    <Form.Check type="radio" name="concept_selection"
                      value="Concept_Name"
                      checked={conceptSelection === 'Concept_Name'}
                      onChange={conceptSelectionHandleChange} />
                    Concept Name
                  </Form.Label>
                </Col>
                <Col><Form.Control type="text" size="sm" disabled={conceptSelection!=='Concept_Name'}/></Col>
              </Row>
              <Row className="mb-3">

                <Col>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check type="radio" name="concept_selection"
                      value="Concept_Code"
                      checked={conceptSelection === 'Concept_Code'}
                      onChange={conceptSelectionHandleChange} />
                    Concept Code</Form.Label>
                </Col>
                <Col><Form.Control type="text" size="sm" disabled={conceptSelection!=='Concept_Code'}/></Col>
              </Row>
              <Row>
                <Form.Label className="settings-label">Concept Type Selection</Form.Label>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check type="radio" name="concept_type" value="Yes"
                      checked={conceptType === 'Yes'}
                      onChange={conceptTypeHandleChange} />
                    Yes
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Label as="label" className="radio-label">
                    <Form.Check type="radio" name="concept_type" value="No"
                      checked={conceptType === 'No'}
                      onChange={conceptTypeHandleChange} />
                    No
                  </Form.Label>
                </Col>
              </Row>
              {/* <hr/> */}
              <Col className="p-0">
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="settings-label" >SDOH Tables</Form.Label>
                  <Form.Select value={hideBorder} onChange={(e) => setHideBorder(e.target.value)}>
                    {sdohTables.length > 0 && sdohTables.map((t)=><option value={t}>{t}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="p-0">
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="settings-label" >SDOH SVI/ADI</Form.Label>
                  <Form.Select value={hideBorder} onChange={(e) => setHideBorder(e.target.value)}>
                    <option>table 1</option>
                    <option>table 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
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
