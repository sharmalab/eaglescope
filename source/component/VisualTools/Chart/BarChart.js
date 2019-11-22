import React, { Component } from 'react'

export default class BarChart extends Component {
    constructor(props) {
        // console.log("BarChart", props);
        super(props);
        this.state = {
            loading:true,
            error:null,
            fields:props.fields?[...props.fields]:null,
            cond:[],
        }
    }

    render() {
        return <div>THis is Bar CHART</div>
    }
}
