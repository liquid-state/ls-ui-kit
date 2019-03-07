import React, { Component } from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import Example from '../../utils/Example';

class Select extends Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };

  render() {
    const { value, selectedValue } = this.state;

    return (
      <Example title="Selectable Calendar">
        
        <div>
          <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
          <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
        </div>
      </Example>
    );
  }

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  }

  onPanelChange = (value) => {
    this.setState({ value });
  }
}
 
export default Select;
