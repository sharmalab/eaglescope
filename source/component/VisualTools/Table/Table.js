import React, { Component } from "react";


export default class Table extends Component {
    constructor(props) {
        //console.log("Table", props);
        super(props);
        this.state = {
            loading:true,
            error:null,
            fields:props.fields?[...props.fields]:null,
            cond:[],
        }
    }

    render() {
        return <div>THis is Table</div>
    }
}
