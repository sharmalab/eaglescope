import React, { PureComponent } from 'react'
import VisGridItem from "../VisGridView/VisGridItem/VisGridItem.js"
import VisGridItemHeader from "../VisGridView/VisGridItem/VisGridItemHeader/VisGridItemHeader.js";
import VisGridItemContent from "../VisGridView/VisGridItem/VisGridItemContent/VisGridItemContent.js";
import "./VisFullScreenView.css";

class VisFullScreenView extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.navHeight = 84;
        this.filterHeight = 65;

    }
    
    render() {
        const viewHeight = window.innerHeight - this.navHeight - 65;
        console.log(window.innerHeight, viewHeight)
        console.log(this.props)
        return (
           
            <div className="full-screen"  style={{height:viewHeight}}>
                <div className="item react-grid-item border border-primary react-draggable cssTransforms">
                <VisGridItem  {...this.props} />
                </div>
                
            </div>
        )
    }
}


export default VisFullScreenView;
