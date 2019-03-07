import React, { Component } from 'react';
import { Alert } from 'antd';
import Example from '../../utils/Example';

class Custom extends Component {
  render() {
    return (
      <Example title="Customized Close Text">
        <Alert message="Info Text" type="info" closeText="Close Now" />
      </Example>
    );
  }
}

export default Custom;
