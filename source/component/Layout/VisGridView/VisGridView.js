import React, {Component} from "react";
import { Responsive, WidthProvider, GridItem } from "react-grid-layout";

import GridLayout from "react-grid-layout";
import VisGridItem from "./VisGridItem/VisGridItem";
import { getLayoutConfig } from "../../../common/utils";
// component style
import "./VisGridView.css";

// config for view grid and vis compoments
import _CONFIG_ from "../../../../config/vis-config.json";

// enumeration for 
import VisTypeEnum from "../../VisualTools/VisTypeEnum.json";

// import 
const _config = {
  layout: []
};

class VisGridView extends Component {
  constructor(props) {
    super(props);
    this.self = React.createRef();
    this.state = {
      draggableHandle: ".draggable",
      width: 0, // -> cols
      cols: 0,
      config: {
        layout: [], // calculate layout based on view's width and vis charts.
        grid: [..._CONFIG_.UNIT_OF_GRID_VIEW], // a size of grid [width, height] in pixel
        margins: [..._CONFIG_.MARGIN_OF_GRID_VIEW],
        visConfig: [
          {
            id: "Collection",
            title: "Collection",
            description: "Showing the number of patients in Collection",
            chartType: VisTypeEnum.PIE_CHART,
            fields:{x:"collection"},
            //patientAttribute: false,
            size: [1, 1], // size [width, height]
            priority: 50
          },
          {
            id: "tnm_stage_count",
            title: "TNM Stage Count",
            description: "Showing the number of patients in TNM Stage",
            chartType: VisTypeEnum.BAR_CHART,
            fields:{x:"stagelabel"},
            size: [2, 1], // size [width, height]
            priority: 50        
          },
          {
            id: "gender_pie",
            title: "Gender",
            description: "Showing the number of patients in gender",
            chartType: VisTypeEnum.PIE_CHART,
            fields:{x:"sexlabel"},
            size: [1, 1], // size [width, height]
            priority: 50
          },
          // {
          //   id: "neoplasm_a_pie",
          //   title: "Neoplasm A Subdivision",
          //   description: "Showing the number of patients in gender",
          //   chartType: VisTypeEnum.PIE_CHART,
          //   fields:{x:"Neoplasm_A-1tomic_Subdivision_-1me_"},
          //   size: [1, 1], // size [width, height]
          //   priority: 30
          // },          
          // {
          //   id: "disease_type_count",
          //   title: "Disease Type Count",
          //   description: "Showing the number of patients in disease type",
          //   chartType: VisTypeEnum.BAR_CHART,
          //   fields:{x:"disease_type"},
          //   size: [2, 1], // size [width, height]
          //   priority: 70        
          // },
          {
            id: "disease_type_count",
            title: "Disease Type Count",
            description: "Showing the number of patients in disease type",
            chartType: VisTypeEnum.HORIZONTAL_BAR_CHART,
            fields:{y:"disease_type"},
            size: [2, 2], // size [width, height]
            priority: 10        
          },
          {
            id: "age_age_scatter",
            title: "Age vs Age Time",
            description: "Showing the age and Age in scatter plot",
            chartType: VisTypeEnum.SCATTER_CHART,
            fields:{x:'age',y:'age',z:'age'},
            size: [2, 2], // size [width, height]
            priority: 10
          },
          { 
            id:"clinical_data_table",
            title: "Clinical Data Table",
            description: "Showing Clinical Data",
            chartType: VisTypeEnum.VIS_DATA_TABLE,
            fields:[
              {
                dataKey:'collection',
                label:'Collection',
                width:0.13
              },
              {
                dataKey:'patient_id',
                label:'Patient ID',
                width:0.08
              },
              {
                dataKey:'disease_type',
                label:'Disease',
                width:0.22
              },
              {
                dataKey:'location',
                label:'Location',
                width:0.18
              },
              {
                dataKey:'age',
                label:'Age',
                width:0.05
              },{
                dataKey:'stagelabel',
                label:'Stage',
                width:0.08
              },{
                dataKey:'sexlabel',
                label:'Gender',
                width:0.08
              }],
            size: [4, 2],
            priority: 70
          }
          /*,
          {
            id: "stacked_bar_chart",
            title: "Collections",
            description: "Collections",
            chartType: VisTypeEnum.VEGA_LITE_PLOT,
            spec: "{\"$schema\":\"https://vega.github.io/schema/vega-lite/v3.json\",\"mark\":\"bar\",\"encoding\":{\"x\":{\"aggregate\":\"count\",\"field\":\"Patient_ID\",\"type\":\"quantitative\"},\"y\":{\"field\":\"Collection\",\"type\":\"nominal\"},\"color\":{\"field\":\"GDC_primary_diagnosis\",\"type\":\"nominal\",\"legend\":{\"orient\":\"bottom\"}}},\"config\":{\"countTitle\":\"Number of Patients\", \"fieldTitle\":\"plain\"}}",
            //dataType: ChartMetaDataTypeEnum.GENOMIC,
            //patientAttribute: false,
            size: [2, 2], // size [width, height]
            priority: 190 //
            //renderWhenDataChange: false
          },
          {
            id: "scatter_plot",
            title: "Survival Time VS Age",
            description: "Survival Time VS Agele",
            chartType: VisTypeEnum.VEGA_LITE_PLOT,
            spec: "{\"$schema\":\"https://vega.github.io/schema/vega-lite/v3.json\",\"mark\":\"point\",\"selection\":{\"brush\":{\"encodings\":[\"x\",\"y\"],\"type\":\"interval\"}},\"encoding\":{\"x\":{\"field\":\"Age\",\"type\":\"quantitative\"},\"y\":{\"field\":\"Survival_Time\",\"type\":\"quantitative\"},\"shape\":{\"field\":\"Vital_Status\",\"type\":\"nominal\"},\"color\":{\"field\":\"GDC_primary_diagnosis\",\"type\":\"nominal\"}},\"config\":{\"countTitle\":\"Number of Patients\", \"fieldTitle\":\"plain\"}}",
            //dataType: ChartMetaDataTypeEnum.GENOMIC,
            //patientAttribute: false,
            size: [2, 2], // size [width, height]
            priority: 70 //
            //renderWhenDataChange: false
          },
          {
            id: "h_bar_chart_01",
            title: "TNM Stage VS Patient #",
            description: "TNM Stage VS Patient #",
            chartType: VisTypeEnum.VEGA_LITE_PLOT,
            "spec": "{\"$schema\":\"https://vega.github.io/schema/vega-lite/v3.json\",\"mark\":\"bar\",\"encoding\":{\"y\":{\"field\":\"TNM-Stage\",\"type\":\"ordinal\"},\"x\":{\"aggregate\":\"count\",\"field\":\"Patient_ID\",\"type\":\"quantitative\"}},\"config\":{\"countTitle\":\"Number of Patients\"}}",
            //dataType: ChartMetaDataTypeEnum.GENOMIC,
            //patientAttribute: false,
            size: [2, 2], // size [width, height]
            priority: 50 //
            //renderWhenDataChange: false
          },          
          {
            id: "h_bar_chart_02",
            title: "Modality VS Patients",
            description: "Modality VS Patients",
            chartType: VisTypeEnum.VEGA_LITE_PLOT,
            spec: "{\"$schema\":\"https://vega.github.io/schema/vega-lite/v3.json\",\"mark\":\"bar\",\"encoding\":{\"y\":{\"field\":\"Modality\",\"type\":\"ordinal\"},\"x\":{\"aggregate\":\"count\",\"field\":\"Patient_ID\",\"type\":\"quantitative\"}},\"config\":{\"countTitle\":\"Number of Patients\"}}",
            //dataType: ChartMetaDataTypeEnum.GENOMIC,
            //patientAttribute: false,
            size: [1, 1], // size [width, height]
            priority: 40 //
            //renderWhenDataChange: false
          },
          {
            id: "bar_chart_01",
            title: "Survival Time(Months)",
            description: "Survival Time(Months)",
            chartType: VisTypeEnum.VEGA_LITE_PLOT,
            spec: "{\"$schema\":\"https://vega.github.io/schema/vega-lite/v3.json\",\"mark\":\"bar\",\"selection\":{\"brush\":{\"encodings\":[\"x\"],\"type\":\"interval\"}},\"encoding\":{\"x\":{\"bin\":true,\"field\":\"Survival_Time\",\"type\":\"quantitative\",\"axis\": {\"title\": \"Survival Time (months)\"}},\"y\":{\"aggregate\":\"count\",\"type\":\"quantitative\"},\"color\":{\"condition\":{\"test\":\"datum.y<10\",\"value\":\"red\"}}},\"config\":{\"countTitle\":\"Number of Patients\", \"fieldTitle\":\"plain\"}}",
            //dataType: ChartMetaDataTypeEnum.GENOMIC,
            //patientAttribute: false,
            size: [2, 1], // size [width, height]
            priority: 70 //
            //renderWhenDataChange: false
          },
          {
            id: "bar_chart_02",
            title: "Age(years)",
            description: "Age(years)",
            chartType: VisTypeEnum.VEGA_LITE_PLOT,
            "spec": "{\"$schema\":\"https://vega.github.io/schema/vega-lite/v3.json\",\"mark\":\"bar\",\"selection\":{\"brush\":{\"encodings\":[\"x\"],\"type\":\"interval\"}},\"encoding\":{\"x\":{\"bin\":true,\"field\":\"Age\",\"type\":\"quantitative\",\"axis\": {\"title\": \"Age (years)\"}},\"y\":{\"aggregate\":\"count\",\"type\":\"quantitative\"}},\"config\":{\"countTitle\":\"Number of Patients\", \"fieldTitle\":\"plain\"}}",
            //dataType: ChartMetaDataTypeEnum.GENOMIC,
            //patientAttribute: false,
            size: [2, 1], // size [width, height]
            priority: 70 //
            //renderWhenDataChange: false
          }*/
        ]
      },
      error: null,
      isLoad: false
    };
  }
  /**
   * Calculate & Update state of new dimensions
   */
  updateViewSize() {
    const rect = this.self.current.getBoundingClientRect();
    const cols = parseInt((rect.width - this.state.config.margins[0] ) / (this.state.config.grid[0]+this.state.config.margins[0]));
    if(cols===this.state.cols) return;
    const gridLayoutWidth =
      cols * this.state.config.grid[0] +
      (cols + 1) * this.state.config.margins[0];
    const updatedLayout = getLayoutConfig(this.state.config.visConfig, cols);
    const updatedState = { ...this.state };
    updatedState.cols = cols;
    updatedState.width = gridLayoutWidth;
    updatedState.config.layout = [...updatedLayout.layout];
    // calculate width and height
    this.setState(updatedState);
  }
  componentDidMount() {
    // TODO loading config


    //
    this.updateViewSize();
    // TODO debouce
    window.addEventListener("resize", this.updateViewSize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewSize.bind(this));
  }
  render() {
    if (this.state.config.layout.length > 0) {
      console.log('view',this.props)
      let __vis = this.state.config.layout.map((item, index) => (
        
        <div key={item.i}>
          <VisGridItem 
            {...item}
            operation={this.state.config.visConfig[index]}
            data={this.props.data}
            filterData={this.props.filterData}
            filters={this.props.filters}
            filterAdded = {this.props.filterAdded}
            filterRemove = {this.props.filterRemove}
          />
        </div>
      ));
      // <VisGridItem key={item.i} {...item}> {item.i}></VisGridItem>

      return (
        <div className="vis-grid-view" ref={this.self}>
          <GridLayout
            cols={this.state.cols}
            rowHeight={this.state.config.grid[1]}
            width={this.state.width}
            margin={this.state.config.margins}
            layout= {this.state.config.layout}
            draggableHandle={this.state.draggableHandle}
          >
            {__vis}
          </GridLayout>
        </div>
      );
    } else {
      return (
        <div className="vis-grid-view" ref={this.self}>
          None VIS config
        </div>
      );
    }
  }
}

export default VisGridView;

//   {controls.map(ctrl => (
//     <BuildControl
//         key={ctrl.label}
//         label={ctrl.label}
//         type={ctrl.type}
//         added={()=>props.ingredientAdded(ctrl.type)}
//         removed={()=>props.ingredientRemoved(ctrl.type)}
//         disabled={props.disabled[ctrl.type]}
//     />))}
