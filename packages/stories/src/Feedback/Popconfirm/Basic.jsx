import React, { Component } from 'react';
import { Popconfirm, message } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">
        <Popconfirm title="Are you sure delete this task?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
          <a href="#">Delete</a>
        </Popconfirm>
      </Example>
    );
  }

  confirm(e) {
    message.success('Click on Yes');
  }

  cancel(e) {
    message.error('Click on No');
  }
}
 
export default Basic;
