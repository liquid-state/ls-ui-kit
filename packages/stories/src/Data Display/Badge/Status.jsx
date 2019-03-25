import React, { Component } from 'react';
import { Badge } from 'antd';
import Example from '../../utils/Example';

class Status extends Component {
  render() { 
    return (
      <Example title="Status">

        <div>
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="default" />
          <Badge status="processing" />
          <Badge status="warning" />
          <br />
          <Badge status="success" text="Success" />
          <br />
          <Badge status="error" text="Error" />
          <br />
          <Badge status="default" text="Default" />
          <br />
          <Badge status="processing" text="Processing" />
          <br />
          <Badge status="warning" text="Warning" />
        </div>
      </Example>
    );
  }
}
 
export default Status;
