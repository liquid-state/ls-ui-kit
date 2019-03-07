import React, { Component } from 'react';
import { Switch } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">
        <Switch defaultChecked />
      </Example>
    );
  }
}
 
export default Basic;
