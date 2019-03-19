import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import { Row, Col } from 'antd';

const Option = AutoComplete.Option;

function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return (new Array(getRandomInt(5))).join('.').split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query}
      <a
        href={`https://jsonplaceholder.typicode.com/users?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      <span className="global-search-item-count">{item.count}</span>
    </Option>
  );
}


class Uncertain extends Component {
  state = {
    dataSource: []
  };

  handleSearch = (value) => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <section className="example">
        <h3 className="ex-title">Lookup-Patterns - Uncertain Category</h3>


        <Row>
          <Col md={12} lg={6}>
            <div className="global-search-wrapper" style={{width: '100%'}}>
              <AutoComplete
                className="global-search"
                size="large"
                style={{ width: '100%' }}
                dataSource={dataSource.map(renderOption)}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
                optionLabelProp="text"
              >
                <Input
                  suffix={(
                    <Button className="search-btn" size="large" type="primary">
                      <Icon type="search" />
                    </Button>
                  )}
                />
              </AutoComplete>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Uncertain;
