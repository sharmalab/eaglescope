import React, { Component } from "react";

const SearchPanel = props => {
    const changedHandler= (e)=>{
        const text = e.currentTarget.value;
        props.changed(text);
    }
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        onChange={changedHandler}
        onKeyUp={changedHandler}
        value= {props.text}
      />
      {props.text&&<i className="fa fa-times close" onClick={()=>props.changed('')} />}
    </div>
  );
};
export default SearchPanel;
