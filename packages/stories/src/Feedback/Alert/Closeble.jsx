import React, { Component } from 'react';
import { Alert } from 'antd';
import Example from '../../utils/Example';

class Closeble extends Component {
  render() { 
    return (
      <Example title="Closeble">
        <Alert
          className="mb20"
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
          closable
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable
        />
      </Example>
    );
  }
}
 
export default Closeble;
