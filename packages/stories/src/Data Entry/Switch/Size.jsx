import React, { Component } from 'react';
import { Switch } from 'antd';
import Example from '../../utils/Example';

class Size extends Component {
  render() { 
    return (
      <Example title="Two sizes">
        <div>
          <Switch defaultChecked />
          <Switch className="ml20" size="small" defaultChecked />
        </div>
      </Example>
    );
  }
}
 
export default Size;
