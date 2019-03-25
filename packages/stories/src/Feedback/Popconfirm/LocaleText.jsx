import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import Example from '../../utils/Example';

class LocaleText extends Component {
  render() {
    return (
      <Example title="Locale Text">
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
          <a href="#">Delete</a>
        </Popconfirm>
      </Example>
    );
  }
}

export default LocaleText;
