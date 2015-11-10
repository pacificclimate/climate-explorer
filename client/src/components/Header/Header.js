import React, { Component } from 'react';
import classNames from 'classnames';

import ExperimentSelector from '../ExperimentSelector'

import styles from './Header.css';

class Header extends Component {

  render() {
    return (
      <div className={classNames(styles.header)}>
        <div className={styles.left}>
          <a className="" href="https://pacificclimate.org/">
            <img className="" src={require('./logo.png')} width="328" height="38" alt="Pacific Climate Impacts Consortium" />
          </a>
        </div>
        <div className={styles.left}>
          <ExperimentSelector />
        </div>
      </div>
    );
  }
}

export default Header;