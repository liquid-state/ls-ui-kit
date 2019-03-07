import React, { Component } from 'react';
import { Checkbox } from 'antd';
import Example from '../../utils/Example';

class Disabled extends Component {
  render() { 
    return (
      <Example title="Disabled Checkbox">
        <Checkbox defaultChecked={false} disabled>Disabled</Checkbox>
        <Checkbox className="ml20" defaultChecked disabled>Disabled</Checkbox>
      </Example>
    );
  }
}
 
export default Disabled;
