import React, { Component } from 'react';
import { Badge } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">

        <div>
          <Badge className="badge" count={5}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </Example>
    );
  }
}
 
export default Basic;
