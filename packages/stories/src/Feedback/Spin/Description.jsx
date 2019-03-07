import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
import Example from '../../utils/Example';

class Description extends Component {
  render() {
    return (
      <Example title="Customized description">
        <Spin tip="Loading...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </Example>
    );
  }
}
 
export default Description;
