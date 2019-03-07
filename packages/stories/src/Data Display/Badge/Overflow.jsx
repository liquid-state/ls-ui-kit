import React, { Component } from 'react';
import { Badge } from 'antd';
import Example from '../../utils/Example';

class Overflow extends Component {
  render() { 
    return (
      <Example title="Overflow">

        <div>
          <Badge className="badge" count={99}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={100}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={99} overflowCount={10}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={1000} overflowCount={999}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </Example>
    );
  }
}
 
export default Overflow;
