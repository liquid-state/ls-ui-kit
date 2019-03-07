import React, { Component } from 'react';
import { Rate } from 'antd';
import Example from '../../utils/Example';

class ReadOnly extends Component {
  render() { 
    return (
      <Example title="Read Only">
        <Rate disabled defaultValue={2} />
      </Example>
    );
  }
}
 
export default ReadOnly;
