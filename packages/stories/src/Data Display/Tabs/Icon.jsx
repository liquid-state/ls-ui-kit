import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import Example from '../../utils/Example';

const TabPane = Tabs.TabPane;

class IconTabs extends Component {
  render() { 
    return (
      <Example title="Icon">

        <Tabs>
          <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
            Tab 1
          </TabPane>
          <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
            Tab 2
          </TabPane>
        </Tabs>
      </Example>
    );
  }
}
 
export default IconTabs;
