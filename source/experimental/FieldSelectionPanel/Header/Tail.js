import React from 'react';

function Tail(props) {
  const result = props.items.filter((item) => item.checked == true);
  return (
    <div className="tail">
      {props.operationClicked && <i className="fa fa-ellipsis-h" onClick={props.operationClicked} />}
      {props.searchClicked && <i className="fa fa-search" onClick={props.searchClicked} />}
      {result.length > 0 && props.clearClicked && <i className="fa fa-undo" onClick={props.clearClicked} />}
    </div>
  );
}

export default Tail;
