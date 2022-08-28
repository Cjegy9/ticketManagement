// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('App', className)} >
        <div className="App-header">
          home
        </div>
      </div>
    );
  }
}

export default App;