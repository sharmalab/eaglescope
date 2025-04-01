import React, { useState, useContext, useEffect, useRef } from 'react';
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
// import SelectDropdown from '../selectDropdown';


const jsonData = [
  { "COLUMN_DISPLAY_NM": "Condition Source Concept Id", "COLUMN_NAME": "Concept_Code", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Condition Occurrence", "TABLE_NAME": "condition_occurrence", "TOOLTIP": "Enter one of the following:\n1. ICD10CM code \n2. Comma separated codes to run an 'OR' query\n3. Codes separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Condition Type Concept Id", "COLUMN_NAME": "Concept_Type", "COLUMN_TYPE": "checkbox", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Condition Occurrence", "TABLE_NAME": "condition_occurrence", "TOOLTIP": "Results will be grouped by Condition Type - Primary, Secondary etc." },
  { "COLUMN_DISPLAY_NM": "Condition Name", "COLUMN_NAME": "Concept_Name", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Condition Occurrence", "TABLE_NAME": "condition_occurrence", "TOOLTIP": "Enter one of the following:\n1. Condition name\n2. Comma separated names to run an 'OR' query\n3. Names separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Drug Concept Id", "COLUMN_NAME": "Concept_Code", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Drug Exposure", "TABLE_NAME": "drug_exposure", "TOOLTIP": "Enter one of the following:\n1. RXNORM code \n2. Comma separated codes to run an 'OR' query\n3. Codes separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Drug Type Concept Id", "COLUMN_NAME": "Concept_Type", "COLUMN_TYPE": "checkbox", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Drug Exposure", "TABLE_NAME": "drug_exposure", "TOOLTIP": "Results will be grouped by Drug Type - Prescription dispensed, Physician administered etc." },
  { "COLUMN_DISPLAY_NM": "Route Concept Id", "COLUMN_NAME": "route_concept_id", "COLUMN_TYPE": "dropdown", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Drug Exposure", "TABLE_NAME": "drug_exposure", "TOOLTIP": "Results will be grouped by Route - Oral, Intravenous etc." },
  { "COLUMN_DISPLAY_NM": "Drug Name", "COLUMN_NAME": "Concept_Name", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Drug Exposure", "TABLE_NAME": "drug_exposure", "TOOLTIP": "Enter one of the following:\n1. Drug name\n2. Comma separated names to run an 'OR' query\n3. Names separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Procedure Concept Id", "COLUMN_NAME": "Concept_Code", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Procedure Occurrence", "TABLE_NAME": "procedure_occurrence", "TOOLTIP": "Enter one of the following:\n1. CPT4 code \n2. Comma separated codes to run an 'OR' query\n3. Codes separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Procedure Type Concept Id", "COLUMN_NAME": "Concept_Type", "COLUMN_TYPE": "checkbox", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Procedure Occurrence", "TABLE_NAME": "procedure_occurrence", "TOOLTIP": "Results will be grouped by Procedure Type - Primary Procedure, Secondary Procedure etc." },
  { "COLUMN_DISPLAY_NM": "Procedure Name", "COLUMN_NAME": "Concept_Name", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Procedure Occurrence", "TABLE_NAME": "procedure_occurrence", "TOOLTIP": "Enter one of the following:\n1. Procedure name\n2. Comma separated names to run an 'OR' query\n3. Names separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Measurement Concept Id", "COLUMN_NAME": "Concept_Code", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Measurement", "TABLE_NAME": "measurement", "TOOLTIP": "Enter one of the following:\n1. SNOMED code \n2. Comma separated codes to run an 'OR' query\n3. Codes separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Measurement Type Concept Id", "COLUMN_NAME": "Concept_Type", "COLUMN_TYPE": "checkbox", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Measurement", "TABLE_NAME": "measurement", "TOOLTIP": "Results will be grouped by Measurement Type - Lab Result, Pathology finding etc." },
  { "COLUMN_DISPLAY_NM": "Measurement Lab Name", "COLUMN_NAME": "Concept_Name", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Measurement", "TABLE_NAME": "measurement", "TOOLTIP": "Enter one of the following:\n1. Lab name\n2. Comma separated names to run an 'OR' query\n3. Names separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Measured Value", "COLUMN_NAME": "value_as_number", "COLUMN_TYPE": "checkbox-text", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Measurement", "TABLE_NAME": "measurement", "TOOLTIP": "Enter one of the following:\n1. Single value to find all matching records\n2. Two Comma separated values to find records with values between" },
  { "COLUMN_DISPLAY_NM": "Observation Concept Id", "COLUMN_NAME": "Concept_Code", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Observation", "TABLE_NAME": "observation", "TOOLTIP": "Enter one of the following:\n1. LOINC code \n2. Comma separated codes to run an 'OR' query\n3. Codes separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Observation Type Concept Id", "COLUMN_NAME": "Concept_Type", "COLUMN_TYPE": "checkbox", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Observation", "TABLE_NAME": "observation", "TOOLTIP": "Results will be grouped by Observation Type - Lab observation, Patient reported etc." },
  { "COLUMN_DISPLAY_NM": "Observation Name", "COLUMN_NAME": "Concept_Name", "COLUMN_TYPE": "radio", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Observation", "TABLE_NAME": "observation", "TOOLTIP": "Enter one of the following:\n1. Observation name\n2. Comma separated names to run an 'OR' query\n3. Names separated by spaces for an 'AND' query" },
  { "COLUMN_DISPLAY_NM": "Observed Value", "COLUMN_NAME": "value_as_number", "COLUMN_TYPE": "checkbox-text", "TABLE_CDM": "OMOP", "TABLE_DISPLAY_NM": "Observation", "TABLE_NAME": "observation", "TOOLTIP": "Enter one of the following:\n1. Single value to find all matching records\n2. Two Comma separated values to find records with values between" }
]

const routeData = [
  { "concept_id": 40549429, "Concept_Name": "Ocular route" },
  { "concept_id": 4023156, "Concept_Name": "Otic route" },
  { "concept_id": 4132161, "Concept_Name": "Oral route" },
  { "concept_id": 4132711, "Concept_Name": "Nasogastric route" },
  { "concept_id": 4171047, "Concept_Name": "Intravenous route" },
  { "concept_id": 4225555, "Concept_Name": "Epidural route" },
  { "concept_id": 4263689, "Concept_Name": "Topical route" },
  { "concept_id": 4302612, "Concept_Name": "Intramuscular route" },
  { "concept_id": 4057765, "Concept_Name": "Vaginal route" },
  { "concept_id": 4303795, "Concept_Name": "Orogastric route" },
  { "concept_id": 45956874, "Concept_Name": "Inhalation" },
  { "concept_id": 4290759, "Concept_Name": "Rectal route" },
  { "concept_id": 4156706, "Concept_Name": "Intradermal route" },
  { "concept_id": 4142048, "Concept_Name": "Subcutaneous route" },
  { "concept_id": 4262914, "Concept_Name": "Nasal route" }
];
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

  const formRef = useRef(null);


  const { config, setConfig } = useContext(ConfigContext);
  const {
    setData, tables, setTables, variables, setVariables,
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
  const [selectedOMOPTable, setSelectedOMOPTable] = useState('');

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
      DATA_RESOURCE_URL: '',
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


  // table change
  const omopTablesChangeHandle = (e) => {
    const selectedTable = e.target.value;
    if (selectedTable) {
      generateFormForTable(selectedTable);
    }
    console.log('selectedTable',selectedTable)
    // setSelectedOMOPTable(selectedTable)
  }

  const generateFormForTable = (selectedTable) => {
    //  = document.getElementById("form-container");
    //formContainer.innerHTML = ""; 
    // Clear previous content
    const formContainer = formRef.current;
    formContainer.innerHTML = ""

    const radioColumns = jsonData.filter(item => item.TABLE_NAME === selectedTable && item.COLUMN_TYPE === "radio");
    const checkboxColumns = jsonData.filter(item => item.TABLE_NAME === selectedTable && item.COLUMN_TYPE === "checkbox");
    const checkboxTextColumns = jsonData.filter(item => item.TABLE_NAME === selectedTable && item.COLUMN_TYPE === "checkbox-text");

    // Create a table for radio buttons and text inputs
    if (radioColumns.length > 0) {
      const radioTable = document.createElement("table");
      radioTable.classList.add("table", "table-bordered", "table-striped", "mt-3");

      const tableHeader = document.createElement("thead");
      const headerRow = document.createElement("tr");

      headerRow.innerHTML = `
            <th>Select Option</th>
            <th>Enter Value</th>
        `;
      tableHeader.appendChild(headerRow);
      radioTable.appendChild(tableHeader);

      const tableBody = document.createElement("tbody");

      radioColumns.forEach(column => {
        const row = document.createElement("tr");

        const radioCell = document.createElement("td");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = selectedTable + "-radio-group"; // Group radio buttons
        radioInput.value = column.COLUMN_NAME;
        radioInput.id = column.COLUMN_NAME;

        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", column.COLUMN_NAME);
        radioLabel.textContent = column.COLUMN_DISPLAY_NM;
        radioLabel.setAttribute("title", column.TOOLTIP); // Add tooltip

        radioCell.appendChild(radioInput);
        radioCell.appendChild(document.createTextNode(" ")); // Space for alignment
        radioCell.appendChild(radioLabel);

        const textCell = document.createElement("td");
        const textInput = document.createElement("input");
        textInput.type = "text";
        textInput.name = column.COLUMN_NAME;
        textInput.placeholder = "Enter value";
        textInput.classList.add("form-control");
        textInput.disabled = true; // Initially disabled

        radioInput.addEventListener("change", function () {
          document.querySelectorAll("input[type='text']").forEach(input => input.disabled = true);
          textInput.disabled = false;
        });

        textCell.appendChild(textInput);
        row.appendChild(radioCell);
        row.appendChild(textCell);
        tableBody.appendChild(row);
      });

      radioTable.appendChild(tableBody);
      formContainer.appendChild(radioTable);
    }

    // Create a table for checkboxes
    if (checkboxColumns.length > 0) {
      const checkboxTable = document.createElement("table");
      checkboxTable.classList.add("table", "table-bordered", "table-striped", "mt-3");

      const checkboxTableHeader = document.createElement("thead");
      const checkboxHeaderRow = document.createElement("tr");

      checkboxHeaderRow.innerHTML = `<th>Aggregate Data By</th>`;
      checkboxTableHeader.appendChild(checkboxHeaderRow);
      checkboxTable.appendChild(checkboxTableHeader);

      const checkboxTableBody = document.createElement("tbody");

      checkboxColumns.forEach(column => {
        const row = document.createElement("tr");
        const checkboxCell = document.createElement("td");

        // Creating checkbox and label properly structured inside a div
        const checkboxWrapper = document.createElement("div");
        checkboxWrapper.classList.add("form-check");

        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.id = column.COLUMN_NAME;
        checkboxInput.name = column.COLUMN_NAME;
        checkboxInput.classList.add("form-check-input");

        const checkboxLabel = document.createElement("label");
        checkboxLabel.setAttribute("for", column.COLUMN_NAME);
        checkboxLabel.classList.add("form-check-label", "ms-2"); // Adds left spacing
        checkboxLabel.textContent = column.COLUMN_DISPLAY_NM;
        checkboxLabel.setAttribute("title", column.TOOLTIP); // Add tooltip

        checkboxWrapper.appendChild(checkboxInput);
        checkboxWrapper.appendChild(checkboxLabel);
        checkboxCell.appendChild(checkboxWrapper);
        row.appendChild(checkboxCell);
        checkboxTableBody.appendChild(row);
      });

      checkboxTable.appendChild(checkboxTableBody);
      formContainer.appendChild(checkboxTable);
    }

    if (selectedTable === "drug_exposure") {
      generateRouteCheckboxes(formContainer);
    }


    let checkboxTextTable;
    if (checkboxTextColumns.length > 0) {
      checkboxTextTable = document.createElement("table");
      checkboxTextTable.classList.add("table", "table-bordered", "table-striped", "mt-3");

      const checkboxTextTableHeader = document.createElement("thead");
      const checkboxTextHeaderRow = document.createElement("tr");

      checkboxTextHeaderRow.innerHTML = `<th>Select Filters</th><th>Enter Text</th>`;
      checkboxTextTableHeader.appendChild(checkboxTextHeaderRow);
      checkboxTextTable.appendChild(checkboxTextTableHeader);

      const checkboxTextTableBody = document.createElement("tbody");

      checkboxTextColumns.forEach(column => {
        const row = document.createElement("tr");

        // Create the label cell
        const labelCell = document.createElement("td");
        const label = document.createElement("label");
        label.setAttribute("for", column.COLUMN_NAME);
        label.textContent = column.COLUMN_DISPLAY_NM;
        labelCell.appendChild(label);

        // Create the textarea cell
        const textareaCell = document.createElement("td");
        const textareaInput = document.createElement("textarea");
        textareaInput.name = column.COLUMN_NAME;
        textareaInput.id = column.COLUMN_NAME;
        textareaInput.placeholder = "Enter additional text";
        textareaInput.classList.add("form-control");
        textareaCell.appendChild(textareaInput);

        // Add both label and textarea to the row
        row.appendChild(labelCell);
        row.appendChild(textareaCell);

        // Append the row to the table body
        checkboxTextTableBody.appendChild(row);
      });

      checkboxTextTable.appendChild(checkboxTextTableBody);
      formContainer.appendChild(checkboxTextTable);
    }


    // Create a table for the SDOH Tables dropdown
    const sdohTable = document.createElement("table");
    sdohTable.classList.add("table", "table-bordered", "table-striped", "mt-3");

    const sdohTableHeader = document.createElement("thead");
    const sdohHeaderRow = document.createElement("tr");
    sdohHeaderRow.innerHTML = `<th>Select SDOH Table</th>`;
    sdohTableHeader.appendChild(sdohHeaderRow);
    sdohTable.appendChild(sdohTableHeader);

    const sdohTableBody = document.createElement("tbody");
    const sdohRow = document.createElement("tr");
    const sdohCell = document.createElement("td");

    // Create the dropdown select element
    const sdohSelect = document.createElement("select");
    sdohSelect.id = "Sdoh_TableName";
    sdohSelect.classList.add("form-select");

    // Create a dummy filler option
    const fillerOption = document.createElement("option");
    fillerOption.value = "";  // Empty value for the dummy option
    fillerOption.textContent = "Select SDOH Table Filter";  // Dummy text
    sdohSelect.appendChild(fillerOption);

    // Options for the dropdown
    const sdohOptions = [
      "GEORGIA_ADI_BY_COUNTY_2020",
      "GEORGIA_SVI_BY_COUNTY_2018",
      "GEORGIA_SVI_BY_COUNTY_2022",
      "GEORGIA_ADI_BY_COUNTY_2015",
      "GEORGIA_ADI_BY_COUNTY_2022",
      "GEORGIA_SVI_BY_COUNTY_2016",
      "GEORGIA_SVI_BY_COUNTY_2020"
    ];

    // Populate dropdown options

    sdohOptions.forEach(optionText => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      sdohSelect.appendChild(option);
    });

    sdohCell.appendChild(sdohSelect);
    sdohRow.appendChild(sdohCell);
    sdohTableBody.appendChild(sdohRow);
    sdohTable.appendChild(sdohTableBody);
    formContainer.appendChild(sdohTable);

    // Create a table for the second dropdown (ADI/SVI Filter) initially empty
    const secondDropdownTable = document.createElement("table");
    secondDropdownTable.classList.add("table", "table-bordered", "table-striped", "mt-3");

    const secondDropdownTableHeader = document.createElement("thead");
    const secondDropdownHeaderRow = document.createElement("tr");
    secondDropdownHeaderRow.innerHTML = `<th>Select ADI/SVI Filter</th>`;
    secondDropdownTableHeader.appendChild(secondDropdownHeaderRow);
    secondDropdownTable.appendChild(secondDropdownTableHeader);

    const secondDropdownTableBody = document.createElement("tbody");
    const secondDropdownRow = document.createElement("tr");
    const secondDropdownCell = document.createElement("td");

    // Create the second dropdown select element
    const secondSelect = document.createElement("select");
    secondSelect.id = "sdoh_svi_adi";
    secondSelect.classList.add("form-select");
    secondDropdownCell.appendChild(secondSelect);
    secondDropdownRow.appendChild(secondDropdownCell);
    secondDropdownTableBody.appendChild(secondDropdownRow);
    secondDropdownTable.appendChild(secondDropdownTableBody);

    formContainer.appendChild(secondDropdownTable); // Append the second dropdown table

    // Add an event listener to the first dropdown (Sdoh_TableName)
    sdohSelect.addEventListener("change", function () {
      const selectedValue = sdohSelect.value;
      const secondDropdown = document.getElementById("sdoh_svi_adi");

      // Clear the second dropdown options first
      secondDropdown.innerHTML = "<option value=''>Select ADI/SVI Filter</option>";

      // Conditionally populate the second dropdown based on the selected table
      if (selectedValue.includes("ADI")) {
        const adiOptions = ["ADI_NATRANK", "ADI_STATERNK"];
        adiOptions.forEach(optionText => {
          const option = document.createElement("option");
          option.value = optionText;
          option.textContent = optionText;
          secondDropdown.appendChild(option);
        });
      } else if (selectedValue.includes("SVI")) {
        const sviOptions = ["RPL_THEMES", "RPL_THEME1", "RPL_THEME2", "RPL_THEME3", "RPL_THEME4"];
        sviOptions.forEach(optionText => {
          const option = document.createElement("option");
          option.value = optionText;
          option.textContent = optionText;
          secondDropdown.appendChild(option);
        });
      }
    });

    // Call function to generate Count_Type table
    generateCountTypeTable(formContainer);

    // Trigger change event to populate the second dropdown if there's a pre-selected table
    sdohSelect.dispatchEvent(new Event("change"));


    // Create Submit and Clear buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("mt-3");

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add("btn", "btn-primary", "me-2");
    submitButton.addEventListener("click", APISubmit);


    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.classList.add("btn", "btn-secondary");
    clearButton.addEventListener("click", function () {
      document.querySelectorAll("input[type='radio']").forEach(radio => radio.checked = false);
      document.querySelectorAll("input[type='checkbox']").forEach(checkbox => checkbox.checked = false);
      document.querySelectorAll("input[type='text'], textarea").forEach(input => {
        input.value = "";
        input.disabled = true;
      });
    });

    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(clearButton);
    formContainer.appendChild(buttonContainer);
  }


  const generateCountTypeTable = (formContainer) => {
    // Create a table for Count_Type radio buttons
    const countTypeTable = document.createElement("table");
    countTypeTable.classList.add("table", "table-bordered", "table-striped", "mt-3");

    const countTypeTableHeader = document.createElement("thead");
    const countTypeHeaderRow = document.createElement("tr");

    countTypeHeaderRow.innerHTML = `<th>Select Count Type</th>`;
    countTypeTableHeader.appendChild(countTypeHeaderRow);
    countTypeTable.appendChild(countTypeTableHeader);

    const countTypeTableBody = document.createElement("tbody");

    // Define count types
    const countTypes = [
      { id: "unique_visit_counts", value: "unique_visit_counts", label: "Unique Visit Counts" },
      { id: "unique_person_counts", value: "unique_person_counts", label: "Unique Person Counts" }
    ];

    countTypes.forEach(type => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");

      const radioWrapper = document.createElement("div");
      radioWrapper.classList.add("form-check");

      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.id = type.id;
      radioInput.name = "Count_Type";  // This ensures it reaches the backend as Count_Type
      radioInput.value = type.value;
      radioInput.classList.add("form-check-input");

      const radioLabel = document.createElement("label");
      radioLabel.setAttribute("for", type.id);
      radioLabel.classList.add("form-check-label", "ms-2");
      radioLabel.textContent = type.label;

      radioWrapper.appendChild(radioInput);
      radioWrapper.appendChild(radioLabel);
      cell.appendChild(radioWrapper);
      row.appendChild(cell);
      countTypeTableBody.appendChild(row);
    });

    countTypeTable.appendChild(countTypeTableBody);
    formContainer.appendChild(countTypeTable);
  }

  const generateRouteCheckboxes = (formContainer) => {
    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("mt-3");

    // Add Label as Heading
    const label = document.createElement("label");
    label.textContent = "Filter by Drug Route:";
    label.classList.add("form-label", "fw-bold", "mb-2"); // Bold text and margin bottom
    checkboxContainer.appendChild(label);

    routeData.forEach(item => {
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.classList.add("form-check");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = item.concept_id; // ID as concept_id
      checkbox.name = "drug-route";
      checkbox.value = item.concept_id; // Value as concept_id
      checkbox.classList.add("form-check-input");

      const label = document.createElement("label");
      label.setAttribute("for", item.concept_id);
      label.classList.add("form-check-label");
      label.textContent = item.Concept_Name; // Display name

      checkboxWrapper.appendChild(checkbox);
      checkboxWrapper.appendChild(label);
      checkboxContainer.appendChild(checkboxWrapper);
    });

    formContainer.appendChild(checkboxContainer);
  }

  const APISubmit = () => {

    setPending(true);
    // Get selected values
    const omopTable = document.getElementById('Omop_TableName').value;
    const selectedCountType = document.querySelector('input[name="Count_Type"]:checked').value;
    const sdohTable = document.getElementById('Sdoh_TableName').value;
    const sdohSviAdi = document.getElementById('sdoh_svi_adi').value;

    var conceptCode = "";
    var conceptName = "";
    const selectedRadio = document.querySelector(`input[name='${omopTable}-radio-group']:checked`);
    if (selectedRadio) {
      if (selectedRadio.value === "Concept_Code") {
        conceptCode = document.querySelector(`input[name='${selectedRadio.value}']`).value;
      }
      else {
        conceptName = document.querySelector(`input[name='${selectedRadio.value}']`).value;
      }
    }

    // Get selected Concept_Type (Yes/No)
    const conceptType = document.querySelector('input[name="Concept_Type"]:checked');
    const conceptTypeValue = conceptType ? 'Yes' : '';


    // Collect all checked checkboxes with name 'drug-routes'
    const selectedRoutes = [];
    document.querySelectorAll("input[name='drug-route']:checked").forEach(checkbox => {
      selectedRoutes.push(checkbox.value);
    });
    // Convert selected routes to a comma-separated string
    const routesQueryParam = encodeURIComponent(selectedRoutes.join(","));


    // Get all textarea elements with the name "value_as_number"
    const value = document.getElementById('value_as_number');

    // If you expect only one textarea, get the first one and retrieve its value
    const rangeValue = value ? value.value : null;

    // Construct the API URL with query parameters
    const apiUrl = `http://wolf.cci.emory.edu/es_demo/api/getBins?Sdoh_TableName=${sdohTable}&Omop_TableName=${omopTable}&Concept_Code=${conceptCode}&Concept_Name=${conceptName}&Concept_Type=${conceptTypeValue}&Count_Type=${selectedCountType}&drug-route=${routesQueryParam}&value_as_number=${rangeValue}`;
    // Prepare the request headers (including Authorization header)
    console.log('apiUrl', apiUrl)
    const headers = new Headers();
    headers.append('Authorization', 'Basic TmFuOk1hdGVybmFsSGVhbHRo');
    // Make the API call using fetch
    fetch(apiUrl, {
      method: 'GET', // Use GET as per the curl
      headers: headers
    })
      .then(response => response.json())
      .then(resp_data => {
        // Handle response from API
        console.log('Success:', resp_data);
        const {metadata, data, search_condition} = resp_data


        // set new data into data context
        saveToLocalStore('dashboardData', data);
        console.log('set data!');
        let new_url = "local://dashboardData";

        const categoricals = [];
        let count_key = '';
    
        for (const [key, value] of Object.entries(metadata)) {
          if (value.type === 'feature_range' || value.type === 'feature_category') {
            categoricals.push(key);
          } else if (value.type === 'stat_count') {
            count_key = key;
          }
        }
    
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
            },{
              dataKey: 'COUNTY',
              label: `County Name`,
            },{
              dataKey: 'concept_name',
              label: `concept_name`,
            },
          ],
          size: [4, 2],
          priority: 100,
        };
    
        const newConfig = {
          TITLE: `${omopTable.toUpperCase()} Auto Dashboard`,
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
        setData(data);
        setConfig((prevConfig) => (newConfig));
        
        setPending(false);
        handleClose();
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  }



  // nita end

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
        const OMOP_resp = await fetch('http://wolf.cci.emory.edu/es_demo/api/get_OMOP_Tables', newConfig);
        if (!OMOP_resp.ok) {
          throw new Error('OMOP_Tables was not ok');
        }
        const OMOPTables = await OMOP_resp.json();

        // const SDOH_resp = await fetch('http://localhost:5000/get_SDOH_Tables', newConfig);
        // if (!SDOH_resp.ok) {
        //   throw new Error('SDOH_Tables was not ok');
        // }
        // const SDOHTables = await SDOH_resp.json();

        console.log('Tables', OMOPTables);
        setOmopTables(OMOPTables);
        // setSdohTables(SDOHTables);
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
    <div className="container-fluid">
    <div className="row justify-content-md-center">
      <div className="col">
        <div className="panel">
          <h2>Select OMOP Table</h2>
          <select id="Omop_TableName" name="Omop_TableName" className="form-select mb-4" onChange={omopTablesChangeHandle}>
            <option value="">Select a table...</option>
            {omopTables.length > 0 && omopTables.map((t) => <option value={t}>{t}</option>)}
          </select>

          <div ref={formRef} id="form-container"></div>
          {pending && <div>Loading ... </div>}
        </div>
      </div>
    </div>
  </div>
  )
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

          <Form onSubmit={APIHandleSubmit} className='hidden'>
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
