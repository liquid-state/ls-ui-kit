import React, { Component } from 'react';
import { Transfer, Button } from 'antd';

class Advanced extends Component {
  state = {
    mockData: [],
    targetKeys: []
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Advanced</h3>

        <Transfer
          dataSource={this.state.mockData}
          showSearch
          listStyle={{
            width: 200,
            height: 300,
          }}
          operations={['to right', 'to left']}
          targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          render={item => `${item.title}-${item.description}`}
          footer={this.renderFooter}
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

  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }

  renderFooter = () => {
    return (
      <Button
        size="small"
        style={{ float: 'right', margin: 5 }}
        onClick={this.getMock}
      >
        reload
      </Button>
    );
  }
}
 
export default Advanced;