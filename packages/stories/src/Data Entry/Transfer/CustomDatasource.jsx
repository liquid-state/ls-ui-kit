import React, { Component } from 'react';
import { Transfer } from 'antd';

class CustomDatasource extends Component {
  state = {
    mockData: [],
    targetKeys: []
  };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Custom datasource</h3>

        <Transfer
          dataSource={this.state.mockData}
          listStyle={{
            width: 200,
            height: 300,
          }}
          targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          render={this.renderItem}
        />
      </section>
    );
  }

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }

  handleChange = (targetKeys, direction, moveKeys) => {
    this.setState({ targetKeys });
  }

  renderItem = (item) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );

    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    };
  }
}
 
export default CustomDatasource;