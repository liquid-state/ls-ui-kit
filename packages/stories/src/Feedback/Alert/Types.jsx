import React, { Component } from 'react';
import { Alert } from 'antd';
import Example from '../../utils/Example';

class Types extends Component {
  render() {
    return (
      <Example title="More Types">
        <Alert className="mb20" message="Success Text" type="success" />
        <Alert className="mb20" message="Info Text" type="info" />
        <Alert className="mb20" message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </Example>
    );
  }
}

export default Types;
