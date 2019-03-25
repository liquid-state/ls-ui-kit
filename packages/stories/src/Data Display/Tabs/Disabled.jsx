import React, { Component } from 'react';
import { Tabs } from 'antd';
import Example from '../../utils/Example';

const TabPane = Tabs.TabPane;

class Disabled extends Component {
  render() { 
    return (
      <Example title="Disabled">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
          <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
        </Tabs>
      </Example>
    );
  }
}
 
export default Disabled;
