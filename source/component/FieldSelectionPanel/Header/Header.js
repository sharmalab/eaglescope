import React from "react";

import Title from "./Title";
import Tail from "./Tail";

const Head = props => {
  return (
    <div className="header">
      <Title
        title={props.title}
        expanded={props.expanded}
        clicked={props.titleClicked}
      />
      <Tail
        searchClicked={props.searchClicked}
        operationClicked={props.operationClicked}
        clearClicked={props.clearClicked}
        items={props.items}
      />
    </div>
  );
};

export default Head;
