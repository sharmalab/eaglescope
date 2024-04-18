import React from 'react';
import PropTypes from 'prop-types';

function TextContainer(props) {
  const margin = {
    top: 10,
    right: 10,
    bottom: 35,
    left: 35,
  };

  return <div id={props.id} style={{ width: '100%', height: '100%' }} >
    <h1>{props.title}</h1>
    <p>{props.configProps.description}</p>
  </div>;
}

export default TextContainer;

TextContainer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  layout: PropTypes.shape({
    width: PropTypes.number.isRequired,
    currentCols: PropTypes.number.isRequired,
  }).isRequired,
};
