import React, { PropTypes, Component } from 'react';

import classNames from 'classnames';

import styles from './Index.css';

class App extends Component {

  static propTypes = {
    content: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
    left: PropTypes.node.isRequired
  }

  toggleLeft() {

  }

  toggleRight() {

  }

  render() {
    return (
      <div>
        <div className={classNames(styles.sidebar, styles.left)}>
          {this.props.left}
        </div>
        <div className={classNames(styles.sidebar, styles.right)}>
          {this.props.right}
        </div>
        <div className={styles.content}>
          {this.props.content}
        </div>
      </div>
    )
  }
}
console.log(styles)
export default App