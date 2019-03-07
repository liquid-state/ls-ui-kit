import React, { Component } from 'react';
import { InputNumber } from 'antd';
import Example from '../../utils/Example';

class Formatter extends Component {
  render() { 
    return (
      <Example title="Formatter">

        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
        />
        <InputNumber
          style={{marginLeft: '20px'}}
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
        />
      </Example>
    );
  }
}
 
export default Formatter;
