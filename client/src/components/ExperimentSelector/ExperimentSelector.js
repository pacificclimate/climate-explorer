import React, { Component } from 'react';
import urljoin from 'url-join';

import styles from './ExperimentSelector.css'

class ExperimentSelector extends Component {

  componentDidMount() {
    $.ajax({
      url: urljoin(CE_BACKEND_URL, 'models'),
      crossDomain: true
    }).done(function(data) {
      console.log(data);
    })
  }

  render() {
    return (
      <div className={styles.selector}>
        SELECT EXPERIMENTS
      </div>
    );
  }
}

export default ExperimentSelector;