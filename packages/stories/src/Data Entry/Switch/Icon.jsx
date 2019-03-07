import React, { Component } from 'react';
import { Switch, Icon } from 'antd';
import Example from '../../utils/Example';

class IconSwitch extends Component {
  render() { 
    return (
      <Example title="Text & icon">
        <div>
          <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
          <Switch className="ml20" checkedChildren="1" unCheckedChildren="0" />
          <Switch className="ml20" checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked />
        </div>
      </Example>
    );
  }
}
 
export default IconSwitch;
