import React, { Component } from 'react';
import { Cascader, Col, Row } from 'antd';

const options = [{
  value: 'nsw',
  label: 'NSW',
  children: [{
    value: 'sydney',
    label: 'Sydney',
    children: [{
      value: 'north-sydney',
      label: 'North Sydney',
    }],
  }],
}, {
  value: 'wa',
  label: 'WA',
  children: [{
    value: 'perth',
    label: 'Perth',
    children: [{
      value: 'freemantle',
      label: 'Freemantle',
    }],
  }],
}];

class CustomTrigger extends Component {
  state = {
    text: 'Unselect'
  };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Custom Trigger</h3>
        <Row>
          <Col sm={16} lg={6}>{this.state.text}</Col>
          <Col sm={16} lg={7}>
            <Cascader style={{width: '100%  '}} options={options} onChange={this.onChange}>
              <a href="#">Change city</a>
            </Cascader>
          </Col>
        </Row>
      </section>
    );
  }



  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  }
}
 
export default CustomTrigger;
