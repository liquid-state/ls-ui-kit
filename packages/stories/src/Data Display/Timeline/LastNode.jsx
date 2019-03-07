import React, { Component } from 'react';
import { Timeline } from 'antd';
import Example from '../../utils/Example';

class LastNode extends Component {
  render() { 
    return (
      <Example title="Last Node">

        <Timeline pending="Recording...">
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
      </Example>
    );
  }
}
 
export default LastNode;
