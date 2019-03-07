import React, { Component } from 'react';
import { Alert } from 'antd';
import Example from '../../utils/Example';

class Banner extends Component {
  render() { 
    return (
      <Example title="Banner">
        <Alert message="Warning text" banner />
        <br />
        <Alert message="Very long warning text warning text text text text text text text" banner closable />
        <br />
        <Alert showIcon={false} message="Warning text without icon" banner />
        <br />
        <Alert type="error" message="Error text" banner />
      </Example>
    );
  }
}
 
export default Banner;
