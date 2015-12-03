import React, { PropTypes, Component } from 'react';
import { Nav, NavItem, Row, Col } from 'react-bootstrap';

import GraphOverlay from '../DataGraph/GraphOverlay';

import styles from './GraphController.css';

var GraphController = React.createClass({

  handleSelect: function(selectedKey) {
  },

  render: function () {
    return (
      <div className={styles.container}>
        <Row>
          <Nav bsStyle='tabs' activeKey={1} onSelect={this.handleSelect}>
            <NavItem href="#" eventKey={1} onSelect={this.handleSelect(GraphOverlay)}>Timeslice Plot</NavItem>
            <NavItem href="#" eventKey={2}>Timeseries Plot</NavItem>
          </Nav>
        </Row>
        <Row>
          <GraphOverlay />
        </Row>
      </div>
    )
  }
});

export default GraphController;