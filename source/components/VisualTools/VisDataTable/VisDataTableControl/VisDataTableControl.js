import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCheckSquare, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import VisSortableItem from './VisSortableItem/VisSortableItem';

import './VisDataTableControl.css';

function SortableContainer({ children }) {
  return <div>{children}</div>;
}

export default class VisDataTableControl extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.renderPopOver = this.renderPopOver.bind(this);
  }

  onClickHandler() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  renderPopOver(props) {
    return (
      <Popover {...props}>
        <Popover.Header as="div">
          <div className="text-primary" style={{ padding: '0 .5rem' }}>
            <FontAwesomeIcon icon={faArrowsAltV} />
          </div>
          <div className="text-primary">Fields</div>
          <Button
            variant="light text-primary"
            size="sm"
            onClick={this.props.onAllCheck}
            style={{ fontSize: '.85rem' }}
            className="py-0 px-1 border-gray"
          >
            <FontAwesomeIcon icon={faCheckSquare} />
          </Button>
        </Popover.Header>
        <Popover.Body>
          <SortableContainer>
            {this.props.list.map((item, index) => (
              <VisSortableItem
                key={`item-${item.dataKey}`}
                {...item}
                index={index}
                onCheckChanged={this.props.onCheckChanged}
              />
            ))}
          </SortableContainer>
        </Popover.Body>
      </Popover>
    );
  }

  render() {
    const style = { position: 'absolute', right: 0, color: 'var(--gray)' };
    return (
      <OverlayTrigger trigger="click" placement="bottom-end" overlay={this.renderPopOver}>
        <Button
          variant="light"
          style={style}
          className="py-0 px-1 border-gray"
          onClick={this.onClickHandler}
          active={this.state.show}
        >
          <FontAwesomeIcon icon={faCog} />
        </Button>
      </OverlayTrigger>
    );
  }
}

VisDataTableControl.propTypes = {
  onAllCheck: PropTypes.func.isRequired,
  onCheckChanged: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({ dataKey: PropTypes.string.isRequired })).isRequired,
};
