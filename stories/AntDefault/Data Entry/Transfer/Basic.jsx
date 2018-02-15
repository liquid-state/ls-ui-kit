import React, { Component } from 'react';
import { Transfer } from 'antd';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const targetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);

class Basic extends Component {
  state = {
    targetKeys,
    selectedKeys: [],
  };

  render() {
    const state = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={state.targetKeys}
          selectedKeys={state.selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          render={item => item.title}
        />

      </section>
    );
  }

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });
  }

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
  }
}
 
export default Basic;