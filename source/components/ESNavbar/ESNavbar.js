import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import DownloadButton from '../DownloadButton';
import HomeButton from '../HomeButton';
import Settings from '../Settings/Settings';

function ESNavbar(props) {
  const {
    url, title, max, now, progressLabel, data, color,
  } = props;

  return (
    <Navbar
      style={{
        backgroundColor: color || '#007bff',
      }}
      variant="dark"
      expand="md"
    >
      {url ? <HomeButton url={url} /> : null}
      <DownloadButton data={data} title={title} />
      <Navbar.Brand href={url || '#'}>{title || 'Eaglescope'}</Navbar.Brand>
      <Nav className="mr-auto" />
      <Form inline="true">
        <ProgressBar
          style={{ width: '30rem' }}
          className="border border-light bg-light"
          min={0}
          variant="success"
          max={max}
          now={now}
          label={progressLabel}
        />
      </Form>

      <Settings />
    </Navbar>
  );
}

export default ESNavbar;

ESNavbar.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  now: PropTypes.number.isRequired,
  progressLabel: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  color: PropTypes.string,
};

ESNavbar.defaultProps = {
  color: '#007bff',
};
