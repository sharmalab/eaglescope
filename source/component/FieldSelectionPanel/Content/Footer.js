import React from "react";

const Footer = props => {
  if (props.num <= 4) return null;
  //else {
    const _text = props.expanded ? `Less...` : `${props.num-4} More...`;
    return (
      <div className="content-footer">
        <a onClick={props.clicked}>{_text}</a>
      </div>
    );
  //}
};
export default Footer;
