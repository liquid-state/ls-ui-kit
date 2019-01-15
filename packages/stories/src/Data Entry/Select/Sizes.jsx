import React, { Component } from 'react';
import { Select, Radio, Row, Col } from 'antd';

const Option = Select.Option;

const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class Sizes extends Component {
  state = {
    size: 'default'
  };

  render() {
    const { size } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Sizes</h3>

        <Row>
          <Col sm={16} lg={7} className="mb20">
            <Radio.Group value={size} onChange={this.handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={16} lg={7}>
            <Select
              className="mb20"
              size={size}
              defaultValue="a1"
              style={{ width: '100%' }}
            >
              {children}
            </Select>
          </Col>
        </Row>

        <Row>
          <Col sm={16} lg={7}>
            <Select
              className="mb20"
              mode="combobox"
              size={size}
              defaultValue="a1"
              style={{ width: '100%' }}
            >
              {children}
            </Select>
          </Col>
        </Row>

        <Row>
          <Col sm={16} lg={7}>
            <Select
              className="mb20"
              mode="multiple"
              size={size}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              style={{ width: '100%' }}
            >
              {children}
            </Select>
          </Col>
        </Row>

        <Row>
          <Col sm={16} lg={7}>
            <Select
              mode="tags"
              size={size}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              style={{ width: '100%' }}
            >
              {children}
            </Select>
          </Col>
        </Row>
      </section>
    );
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
}
 
export default Sizes;