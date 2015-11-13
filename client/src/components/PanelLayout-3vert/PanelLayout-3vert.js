import React, { PropTypes, Component } from 'react';

import classNames from 'classnames';

import styles from './PanelLayout-3vert.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lOpen: true,
      rOpen: false
    }
  }
  static propTypes = {
    content: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
    left: PropTypes.node.isRequired
  }

  toggleLeft() {
    this.setState({lOpen: !this.state.lOpen});
    console.log('toggleLeft');
  }

  toggleRight() {
    this.setState({rOpen: !this.state.rOpen});
    console.log('toggleRight');
  }

  render() {
    var lClass = classNames(
      styles.sidebar,
      styles.left,
      !this.state.lOpen && styles.closed
    )

    var rClass = classNames(
      styles.sidebar,
      styles.right,
      !this.state.rOpen && styles.closed
    )

    var contentClass = classNames(
      styles.content,
      !this.state.rOpen && styles.rclosed,
      !this.state.lOpen && styles.lclosed
    )

        // <div className={rClass}>
        //   {this.props.right}
        //   <div className={classNames(styles.dragbar, styles.right)}></div>
        // </div>

    return (
      <div>
        <div className={lClass}>
          {this.props.left}
          <div className={classNames(styles.dragbar, styles.left)}></div>
        </div>

        <div className={contentClass}>
          <button onClick={this.toggleLeft.bind(this)}>Toggle Left</button>
          <button onClick={this.toggleRight.bind(this)}>Toggle Right</button>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default App
