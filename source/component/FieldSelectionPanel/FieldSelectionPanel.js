import React, { PureComponent } from "react";

import Header from "./Header/Header";
import SearchPanel from "./SearchPanel";
import OperationPanel from "./OperationPanel";
import ContentPanel from "./Content/ContentPanel";

/* css */
// props -> title name

class FieldeSlectionPanel extends PureComponent {
  constructor(props) {
    super(props);
    
    // props.items = props.items.map(elt => elt['selected'] = false);
    // set
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

      sort: "alpha", // none, alpha, num,
      isAscending: true, // asc - true, desc - false
      searchText: "",
      items: props.items.map(elt => {
        elt["checked"] = false;
        return elt;
      })
      /*filter status */
      //selectedChanged: this.props.selectedChanged,
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

    this.__sort = this.__sort.bind(this);
    this.searchChangedHandler = this.searchChangedHandler.bind(this);
    this.selectedChangeHandler = this.selectedChangeHandler.bind(this);
    this.clearSelectedHandler = this.clearSelectedHandler.bind(this);
  }

  // state = {
  //     isExpand: true,

  // }

  componentDidMount() {
    // change
    // fetch("https://api.example.com/items")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 items: result.items
    //             });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 error
    //             });
    //         }
    //     )
  }

  togglePanelHandler() {
    this.setState({ panelExpanded: !this.state.panelExpanded });
  }

  toggleItemsListHandler() {
    this.setState({ itemsExpanded: !this.state.itemsExpanded });
  }

  toggleSearch() {
    this.setState({ isShowSearch: !this.state.isShowSearch });
  }

  toggleOperation() {
    this.setState({ isShowOperation: !this.state.isShowOperation });
  }

  // toggleClear() {
  //   this.setState({ searchText: "" });
  // }

  setSortBy(value) {
    this.setState({ sort: value });
  }

  toggleOrder() {
    this.setState({ isAscending: !this.state.isAscending });
  }

  __sort(a, b) {
    const v1 = this.state.sort == "alpha" ? a.name : a.sum;
    const v2 = this.state.sort == "alpha" ? b.name : b.sum;

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
    this.state.items.find(i => i.name == item.value).checked = item.checked;
    this.setState({ items: [...this.state.items] });
  }
  clearSelectedHandler(){
    this.state.items.forEach(item => {
      item.checked = false;
    });
    this.setState({ items: [...this.state.items] });
  }

  findMatches(wordToMatch, list) {
    return list.filter(item => {
      const item_name = item.name;
      // here we need to figure out if word matches what was searched
      const regex = new RegExp(wordToMatch, "gi");
      return item_name.match(regex);
    });
  }

  render() {
    //
    const { hasError, isLoaded } = this.state;

    const items = this.state.searchText
      ? this.findMatches(
          this.state.searchText,
          this.state.items.sort(this.__sort)
        )
      : this.state.items.sort(this.__sort); //.filter();
    // show sub tool panel
    // let searchPanel = null;
    // if (this.state.isShowSearch) searchPanel = <SearchPanel />; //TODO search control

    // let operationPanel = null;
    // if (this.state.isShowOperator) operationPanel = <OperationPanel />; //TODO operator control

    // has a error
    if (hasError) {

      return <div>Something is wrong!!!</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
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
            <SearchPanel
              changed={this.searchChangedHandler}
              text={this.state.searchText}
            />
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
}

export default FieldeSlectionPanel;
