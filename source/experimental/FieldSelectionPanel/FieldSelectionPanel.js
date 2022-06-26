import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import Header from './Header/Header';
import SearchPanel from './SearchPanel';
import OperationPanel from './OperationPanel';
import ContentPanel from './Content/ContentPanel';

const findMatches = (wordToMatch, list) => list.filter((item) => {
  const itemName = item.name;
  // here we need to figure out if word matches what was searched
  const regex = new RegExp(wordToMatch, 'gi');
  return itemName.match(regex);
});

class FieldeSlectionPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // for async call
      hasError: null,
      isLoaded: true, //

      /* UI status */
      panelExpanded: true, // Is the entire items panel expanded
      itemsExpanded: false, //
      isShowSearch: false,
      isShowOperation: false,
      /* sort status */

      sort: 'alpha', // none, alpha, num,
      isAscending: true, // asc - true, desc - false
      searchText: '',
      items: props.items.map((elt) => {
        elt.checked = false;
        return elt;
      }),
      /* filter status */
      // selectedChanged: this.props.selectedChanged,
      // name: this.props.name || "",
      // title: this.props.title || "",
      // items: this.props.items || []
    };

    // bind this
    this.togglePanelHandler = this.togglePanelHandler.bind(this);
    this.toggleItemsListHandler = this.toggleItemsListHandler.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleOperation = this.toggleOperation.bind(this);

    this.setSortBy = this.setSortBy.bind(this);
    this.toggleOrder = this.toggleOrder.bind(this);

    this.sort = this.sort.bind(this);
    this.searchChangedHandler = this.searchChangedHandler.bind(this);
    this.selectedChangeHandler = this.selectedChangeHandler.bind(this);
    this.clearSelectedHandler = this.clearSelectedHandler.bind(this);
  }

  setSortBy(value) {
    this.setState({ sort: value });
  }

  togglePanelHandler() {
    this.setState((prevState) => ({ panelExpanded: !prevState.panelExpanded }));
  }

  toggleItemsListHandler() {
    this.setState((prevState) => ({ itemsExpanded: !prevState.itemsExpanded }));
  }

  toggleSearch() {
    this.setState((prevState) => ({ isShowSearch: !prevState.isShowSearch }));
  }

  toggleOperation() {
    this.setState((prevState) => ({ isShowOperation: !prevState.isShowOperation }));
  }

  toggleOrder() {
    this.setState((prevState) => ({ isAscending: !prevState.isAscending }));
  }

  sort(a, b) {
    const v1 = this.state.sort === 'alpha' ? a.name : a.sum;
    const v2 = this.state.sort === 'alpha' ? b.name : b.sum;

    if (v1 > v2) {
      return this.state.isAscending ? 1 : -1;
    }

    if (v1 < v2) {
      return this.state.isAscending ? -1 : 1;
    }

    return 0;
  }

  searchChangedHandler(text) {
    this.setState({ searchText: text });
  }

  selectedChangeHandler(e) {
    const item = e.target;
    this.state.items.find((i) => i.name === item.value).checked = item.checked;
    this.setState((prevState) => ({ items: [...prevState.items] }));
  }

  clearSelectedHandler() {
    this.state.items.forEach((item) => {
      item.checked = false;
    });
    this.setState((prevState) => ({ items: [...prevState.items] }));
  }

  render() {
    //
    const { hasError, isLoaded } = this.state;

    const items = this.state.searchText
      ? findMatches(this.state.searchText, this.state.items.sort(this.sort))
      : this.state.items.sort(this.sort);

    // has a error
    if (hasError) {
      return <div>Something is wrong!!!</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="field-selection-panel">
        <Header
          title={this.props.title}
          expanded={this.state.panelExpanded}
          titleClicked={this.togglePanelHandler}
          searchClicked={this.toggleSearch}
          operationClicked={this.toggleOperation}
          clearClicked={this.clearSelectedHandler}
          items={this.state.items}
        />
        {this.state.isShowOperation && (
          <OperationPanel
            isAscending={this.state.isAscending}
            sortChanged={this.setSortBy}
            orderClicked={this.toggleOrder}
          />
        )}
        {this.state.isShowSearch && (
          <SearchPanel changed={this.searchChangedHandler} text={this.state.searchText} />
        )}
        {this.state.panelExpanded && (
          <ContentPanel
            items={items}
            expanded={this.state.panelExpanded}
            itemsExpanded={this.state.itemsExpanded}
            footerClicked={this.toggleItemsListHandler}
            changed={this.selectedChangeHandler}
          />
        )}
      </div>
    );
  }
}

export default FieldeSlectionPanel;

FieldeSlectionPanel.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
