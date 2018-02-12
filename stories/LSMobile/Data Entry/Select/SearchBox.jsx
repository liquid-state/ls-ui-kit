import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

const Option = Select.Option;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then((d) => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchBox extends Component {
  state = {
    data: [],
    value: ''
  }

  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <section className="example">
        <h3 className="ex-title">Search Box</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Select
              mode="combobox"
              value={this.state.value}
              placeholder={this.props.placeholder}
              style={{width: '100%'}}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              onChange={this.handleChange}
            >
              {options}
            </Select>
          </Col>
        </Row>
      </section>
    );
  }

  handleChange = (value) => {
    this.setState({ value });
    fetch(value, data => this.setState({ data }));
  }
}
 
export default SearchBox;