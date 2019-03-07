import React, { Component } from 'react';
import { Badge, Icon } from 'antd';
import Example from '../../utils/Example';

class RedBadge extends Component {
  render() { 
    return (
      <Example title="Red Badge">

        <div>
          <Badge dot>
            <Icon type="notification" />
          </Badge>
          <Badge className="ml20" dot>
            <a href="#">Link something</a>
          </Badge>
        </div>
      </Example>
    );
  }
}
 
export default RedBadge;
