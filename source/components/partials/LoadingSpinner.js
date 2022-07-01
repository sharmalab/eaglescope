import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

function LoadingSpinner({ text = 'Loading' }) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner animation="border" role="status" />
      <span style={{ margin: '10px' }}>{text}</span>
    </div>
  );
}

export default LoadingSpinner;

LoadingSpinner.propTypes = {
  text: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  text: 'Loading',
};
