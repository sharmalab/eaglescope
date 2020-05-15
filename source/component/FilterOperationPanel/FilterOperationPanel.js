import React, { Component } from 'react'
import FilterOperation from './FilterOperation/FilterOperation.js'
import Button from 'react-bootstrap/Button'
import './FilterOperationPanel.css'

export default class FilterOperationPanel extends Component {

    
    render() {
        const {filters} = this.props
        if(filters.length <= 0) return null;
        return (
            <div className='filterOperationPanel'>
                {filters.map((filter, idx)=> <FilterOperation key={idx} index={idx} {...filter} filterRemove={this.props.filterRemove}/>)}
                {<Button variant="danger" size='sm' onClick={()=>this.props.filterRemove('ALL')} ><span style={{fontWeight:'bold', fontSize:'.75rem'}}>Clear All Filters</span></Button>}
            </div>
        )
    }
}



