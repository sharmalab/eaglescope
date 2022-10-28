import React from 'react';
import PropTypes from 'prop-types';

function ErrorMsg({ text = 'Error' }) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ color: 'red' }}>{text}</span>
    </div>
  );
}

export default ErrorMsg;

ErrorMsg.propTypes = {
  text: PropTypes.string,
};

ErrorMsg.defaultProps = {
  text: 'Error',
};
