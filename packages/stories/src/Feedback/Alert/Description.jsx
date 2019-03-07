import React, { Component } from 'react';
import { Alert } from 'antd';
import Example from '../../utils/Example';

class Description extends Component {
  render() { 
    return (
      <Example title="Description">
        <Alert
          className="mb20"
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
        />
        <Alert
          className="mb20"
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
        />
        <Alert
          className="mb20"
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
        />
      </Example>
    );
  }
}
 
export default Description;
