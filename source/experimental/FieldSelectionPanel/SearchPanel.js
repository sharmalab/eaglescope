import React from 'react';
import PropTypes from 'prop-types';

function SearchPanel(props) {
  const changedHandler = (e) => {
    const text = e.currentTarget.value;
    props.changed(text);
  };
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        onChange={changedHandler}
        onKeyUp={changedHandler}
        value={props.text}
      />
      {props.text && (
        <i
          className="fa fa-times close"
          onClick={() => props.changed('')}
          role="button"
          onFocus
        />
      )}
    </div>
  );
}
export default SearchPanel;

SearchPanel.propTypes = {
  text: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
};
