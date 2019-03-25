import React, { Component } from 'react';
import { Progress } from 'antd';
import Example from '../../utils/Example';

class Dashboard extends Component {
  render() {
    return (
      <Example title="Dashboard">
        <Progress type="dashboard" percent={75} />
      </Example>
    );
  }
}

export default Dashboard;
