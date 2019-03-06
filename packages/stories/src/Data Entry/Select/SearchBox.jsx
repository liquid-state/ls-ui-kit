import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';

const Option = Select.Option;

const data = [
  {value: "adidas", text: "Adidas"},
  {value: "apple", text: "Apple"},
  {value: "aj1", text: "aj1"},
  {value: "microsoft", text: "Microsoft"},
  {value: "uber", text: "Uber"},
  {value: "kfc", text: "KFC"},
  {value: "aj", text: "aj"},
  {value: "google", text: "Google"},
  {value: "yahoo", text: "Yahoo"},
  {value: "zebra", text: "Zebra"}
];

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    callback(data);
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
