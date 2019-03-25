import React, { Component } from 'react';
import { Tooltip } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">

        <Tooltip title="prompt text">
          <span>Tooltip will show when mouse enter.</span>
        </Tooltip>
      </Example>
    );
  }
}
 
export default Basic;
