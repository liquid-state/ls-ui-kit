import React, { Component } from 'react';
import { Alert } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">
        <Alert message="Success Text" type="success" />
      </Example>
    );
  }
}
 
export default Basic;
