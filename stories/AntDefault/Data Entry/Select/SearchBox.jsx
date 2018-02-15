import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';

const Option = Select.Option;

const data = [
  {value: "阿迪达斯", text: "阿迪达斯"},
  {value: "阿迪达斯男鞋", text: "阿迪达斯男鞋"},
  {value: "aj1", text: "aj1"},
  {value: "a字裙 半身裙", text: "a字裙 半身裙"},
  {value: "阿迪达斯官方旗舰店男", text: "阿迪达斯官方旗舰店男"},
  {value: "安踏官方旗舰店 正品", text: "安踏官方旗舰店 正品"},
  {value: "aj", text: "aj"},
  {value: "爱奇艺会员", text: "爱奇艺会员"},
  {value: "阿迪达斯女鞋", text: "阿迪达斯女鞋"},
  {value: "昂贵", text: "昂贵"}
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