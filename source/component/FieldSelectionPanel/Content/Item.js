import React, { Component } from "react";

const Item = props => {
//   const _id = `${props.name}`;
  return (
    <div className="term">
      <a className="term-head">
        <input type="checkbox" value={props.name} id={props.name} onChange={props.changed} checked={props.checked}/>
        <label htmlFor={props.name}>{props.name}</label>
      </a>
      <a className="term-tail">{props.sum}</a>
    </div>
  );
};

export default Item;
