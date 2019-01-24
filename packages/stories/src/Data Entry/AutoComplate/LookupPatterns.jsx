import React, { Component } from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import { Row, Col } from 'antd';

class Pattern extends Component {
  state = {}
  render() {
    const Option = AutoComplete.Option;
    const OptGroup = AutoComplete.OptGroup;
    const dataSource = [
      {
        title: 'Cats',
        children: [
          { title: 'Persian', count: 10000, },
          { title: 'White Russian', count: 10600, },
          { title: 'Ragdoll', count: 10700, },
        ],
      },
      {
        title: 'Dogs',
        children: [
          {
            title: 'German Shapherd',
            count: 60100,
          },
          {
            title: 'Goldren Retriever',
            count: 30010,
          }
        ],
      },
      {
        title: 'Fish',
        children: [
          {
            title: 'Goldfish',
            count: 100000,
          }
        ],
      }
    ];
    const options = dataSource.map(group => (
      <OptGroup
        key={group.title}
        label={this.renderTitle(group.title)}
      >
        {group.children.map(opt => (
          <Option key={opt.title} value={opt.title}>
            {opt.title}
            <span className="certain-search-item-count">{opt.count}</span>
          </Option>
        ))}
      </OptGroup>
    )).concat([
      <Option disabled key="all" className="show-all">
        <a
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Results
        </a>
      </Option>,
    ]);

    return (
      <section className="example">
        <h3 className="ex-title">Lookup-Patterns - Certain Category</h3>
        <Row>
          <Col md={12} lg={6}>
            <AutoComplete
                className="certain-category-search"
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width: '100%' }}
                size="large"
                style={{ width: '100%' }}
                dataSource={options}
                placeholder="input here"
                optionLabelProp="value"
              >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
              </AutoComplete>
            </Col>
          </Row>
      </section>
    );
  }

  renderTitle(title) {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >更多
        </a>
      </span>
    );
  }
}
 
export default Pattern;
