import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

class Custom extends Component {

  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <Example title="Customized Range Picker">

        <Row gutter={24}>
          <Col md={12} lg={6}>
            <DatePicker
              className="fw mb20"
              disabledDate={this.disabledStartDate}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              value={startValue}
              placeholder="Start"
              onChange={this.onStartChange}
              onOpenChange={this.handleStartOpenChange}
            />
          </Col>

          <Col md={12} lg={6}>
            <DatePicker
              className="fw"
              disabledDate={this.disabledEndDate}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              value={endValue}
              placeholder="End"
              onChange={this.onEndChange}
              open={endOpen}
              onOpenChange={this.handleEndOpenChange}
            />
          </Col>
        </Row>
      </Example>
    );
  }

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }
}
 
export default Custom;
