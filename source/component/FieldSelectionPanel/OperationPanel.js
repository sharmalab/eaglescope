import React, { Component } from "react";

const OperationPanel = (props) => {
  
  const selection = "alpha";
  // fa-sort-up
  // fa-sort-down

  // fa-sort-alpha-up
  // fa-sort-alpha-down

  // fa-sort-numeric-up
  // fa-sort-numeric-down
  // <i className='fa fa-sort-down'></i>
  const changedHandler = e => {
    props.sortChanged(e.currentTarget.value);
  };

  const _icon = props.isAscending?'fa fa-sort-up':'fa fa-sort-down';
  return (
    <div className="operation">
      <span>Sort By:</span>
      &nbsp;
      <label htmlFor="sortAlphaChecked">
        Alpha
        <input
          id="sortAlphaChecked"
          name="radioGroupCollectionSort"
          type="radio"
          value="alpha"
          defaultChecked={selection === "alpha"}
          onChange={changedHandler}
        />
      </label>
      &nbsp;
      <label htmlFor="sortNumChecked">
        Num
        <input
          id="sortNumChecked"
          name="radioGroupCollectionSort"
          type="radio"
          value="num"
          defaultChecked={selection === "num"}
          onChange={changedHandler}
        />
      </label>
      &nbsp;
      <i className={_icon} onClick={props.orderClicked}/>
    </div>
  );
};
export default OperationPanel;
