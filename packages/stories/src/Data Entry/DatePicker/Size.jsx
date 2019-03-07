import React, { Component } from 'react';
import { DatePicker, Radio } from 'antd';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

class Size extends Component {

  state = {
    size: 'default',
  };

  render() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    const { size } = this.state;

    return (
      <Example title="Three Sizes">
        <Row className="mb20">
          <Col md={12} lg={6}>
            <Radio.Group value={size} onChange={this.handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>

        <Row className="mb20">
          <Col md={12} lg={6}>
            <DatePicker style={{width: '100%'}} size={size} />
          </Col>
        </Row>

        <Row className="mb20">
          <Col md={12} lg={6}>
            <MonthPicker style={{width: '100%'}} size={size} placeholder="Select Month" />
          </Col>
        </Row>

        <Row className="mb20">
          <Col md={12} lg={6}>
            <RangePicker style={{width: '100%'}} size={size} />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <WeekPicker className="fw" size={size} placeholder="Select Week" />
          </Col>
        </Row>
      </Example>
    );
  }

  handleSizeChange = e => this.setState({ size: e.target.value });
}
 
export default Size;
