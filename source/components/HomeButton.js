import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class HomeButton extends PureComponent {
  constructor(props, ctx) {
    super(props, ctx);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    const query = new URLSearchParams(window.location.search);
    const homeUrl = this.props.url || query.get('homeurl') || '../';
    // Only allow relative paths or same-origin URLs
    const isSafeRedirect = (u) => {
      if (!u || /^(javascript|data):/i.test(u)) return false;
      try {
        return new URL(u, window.location.origin).origin === window.location.origin;
      } catch {
        return u.startsWith('/') || u.startsWith('./') || u.startsWith('../');
      }
    };
    window.location.href = isSafeRedirect(homeUrl) ? homeUrl : '../';
  }

  render() {
    return (
      <Button
        size="lg"
        style={{
          background: 'none',
          border: 'none',
        }}
        id={this.id}
        onClick={() => {
          this.goHome();
        }}
      >
        <FontAwesomeIcon size="1x" icon={faHome} />
      </Button>
    );
  }
}

export default HomeButton;

HomeButton.propTypes = {
  url: PropTypes.string.isRequired,
};
