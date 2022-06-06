import React, { PureComponent } from 'react'
import {
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    createMasonryCellPositioner,
    Masonry
  } from "react-virtualized";
import ImageMeasurer from "react-virtualized-image-measurer";
import MasonryComponent from './MasonryComponent/MasonryComponent';


export default class VisGridCard extends PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props)
        
        
        // const widthUnit = this.props.config.UNIT_OF_GRID_VIEW[0];

        this.state = {
            widthUnit: this.props.config.UNIT_OF_GRID_VIEW[0],
            width: null,
            height: null,
            columnWidth: 200,
            defaultHeight: 150,
            defaultWidth: 200,            
        }

        this.autoSizer = React.createRef();
        this.onResize = this.onResize.bind(this)
    }

    
    onResize({ height, width }) {
        console.log('v',height, width)
        this.setState({ width: width, height: height})
    }



    render() {
        const { data, filterData, filters, fields } = this.props;
        const __data = filters.length > 0 ? filterData : data;  
        const {defaultHeight, defaultWidth, columnWidth} = this.state;
        // =this.props.config.UNIT_OF_GRID_VIEW[0]
        console.log(__data)
        return (
            <div style={{ width: "100%", height: "100%" }}>
              
                <AutoSizer
                  onResize={this.onResize}
                >
                  {({height, width }) => {

                    return ( <ImageMeasurer
                        items={__data}
                        image={item => item[fields.image]}
                        keyMapper={item=>item[fields.key]}
                        onError={(error, item, src) => {
                            console.error(
                            "Cannot load image",
                            src,
                            "for item",
                            item,
                            "error",
                            error
                            );
                        }}
                        defaultHeight={defaultHeight}
                        defaultWidth={defaultWidth}
                    >
                        {({ itemsWithSizes }) => {
                            return (<MasonryComponent
                                height={height}
                                width={width}
                                itemsWithSizes = {itemsWithSizes}
                                defaultHeight = {defaultHeight}
                                defaultWidth = {defaultWidth}
                                columnWidth = {columnWidth}
                                fields = {fields}
                            />
                        )}}
                    </ImageMeasurer>

                  )}}
                </AutoSizer>
            </div>
        );
    }
}