import React, { Component } from 'react';
import { Switch } from 'antd';
import Example from '../../utils/Example';

class Loading extends Component {
  render() { 
    return (
      <Example title="Loading">

        <div>
          <Switch loading defaultChecked />
          <Switch className="ml20" size="small" loading />
        </div>
      </Example>
    );
  }
}
 
export default Loading;
