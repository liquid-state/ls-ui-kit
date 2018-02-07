import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';

const { RangePicker } = DatePicker;


class ControlledDatePicker extends Component {
  state = { mode: 'time' };

  handleOpenChange = (open) => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  }

  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  }

  render() {
    return (
      <DatePicker
        style={this.props.style}
        mode={this.state.mode}
        showTime
        onOpenChange={this.handleOpenChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

class ControlledRangePicker extends React.Component {
  state = {
    mode: ['month', 'month'],
    value: [],
  };

  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [
        mode[0] === 'date' ? 'month' : mode[0],
        mode[1] === 'date' ? 'month' : mode[1],
      ],
    });
  }

  render() {
    const { value, mode } = this.state;
    return (
      <RangePicker
        style={this.props.style}
        placeholder={['Start month', 'End month']}
        format="YYYY-MM"
        value={value}
        mode={mode}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

class Panel extends Component {

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Controlled Panels</h3>

        <Row className="mb20">
          <Col md={12} lg={6}>
            <ControlledDatePicker style={{width: '100%'}} />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <ControlledRangePicker style={{width: '100%'}} />
          </Col>
        </Row>
        
      </section>
    );
  }
}
 
export default Panel;