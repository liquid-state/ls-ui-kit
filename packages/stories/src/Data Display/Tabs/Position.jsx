import React, { Component } from 'react';
import { Tabs, Select } from 'antd';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

class Position extends Component {
  state = {
    tabPosition: 'top',
  };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Position</h3>

        <div>
          <div style={{ marginBottom: 16 }}>
            Tab position：
            <Select
              value={this.state.tabPosition}
              onChange={this.changeTabPosition}
              dropdownMatchSelectWidth={false}
            >
              <Option value="top">top</Option>
              <Option value="bottom">bottom</Option>
              <Option value="left">left</Option>
              <Option value="right">right</Option>
            </Select>
          </div>
          <Tabs tabPosition={this.state.tabPosition}>
            <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
          </Tabs>
        </div>
      </section>
    );
  }

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  }
}
 
export default Position;