import React, { Component } from 'react';
import { Pagination } from 'antd';
import Example from '../../utils/Example';

class Jumper extends Component {
  render() { 
    return (
      <Example title="Jumper">
        <Pagination showQuickJumper defaultCurrent={2} total={500} />
      </Example>
    );
  }
}
 
export default Jumper;
