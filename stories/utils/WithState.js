import React from 'react';

export default class WithState extends React.Component {
  static displayName = 'WithState';

  state = this.props.initial || {};

  render() {
    return this.props.children(this.state, this.setState.bind(this));
  }
}
