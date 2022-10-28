import React from 'react';
import Form from 'react-bootstrap/Form';
import BaseVisualization from './BaseVisualization';

class SearchBar extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.state.searchQuery = '';
    this.search = this.search.bind(this);
  }

  search(e) {
    this.setState((prevState) => {
      prevState.searchQuery = e.target.value;
    });
    this.props.filterAdded([
      {
        id: this.id,
        field: '_SEARCH',
        operation: 'search',
        values: [e.target.value],
      },
    ]);
  }

  render() {
    return (
      <Form.Control
        placeholder="Search"
        id={this.id}
        onChange={(e) => {
          this.search(e);
        }}
      />
    );
  }
}

export default SearchBar;
