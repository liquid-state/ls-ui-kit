import React, { Component } from 'react';
import { Pagination } from 'antd';
import Example from '../../utils/Example';

class Text extends Component {
  render() { 
    return (
      <Example title="Prev and next">
        <Pagination total={500} itemRender={this.itemRender} />
      </Example>
    );
  }

  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } else if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
}
 
export default Text;
