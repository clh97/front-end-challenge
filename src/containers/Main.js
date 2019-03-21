import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    error: undefined
  }

  render() {
    const { error } = this.state;

    if(error) {
      return (
        <div>
          error handler
        </div>
      )
    }

    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}
