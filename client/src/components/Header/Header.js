import React, { Component } from 'react';

import styles from './Header.css';

class Header extends Component {

  render() {
    return (
      <div className={styles.header}>
        <div className="">
          <a className="" href="https://pacificclimate.org/">
            <img className="" src={require('./logo.png')} width="328" height="38" alt="Pacific Climate Impacts Consortium" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;