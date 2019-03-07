import React, { Component } from 'react';
import { Pagination } from 'antd';
import Example from '../../utils/Example';

class Changer extends Component {
  render() {
    return (
      <Example title="Change pagination">
        <Pagination showSizeChanger defaultCurrent={3} total={500} />
      </Example>
    );
  }
}
 
export default Changer;
