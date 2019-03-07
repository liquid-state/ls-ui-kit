import React, { Component } from 'react';
import { Checkbox } from 'antd';
import Example from '../../utils/Example';

class Group extends Component {
  render() {
    const CheckboxGroup = Checkbox.Group;

    const plainOptions = ['Apple', 'Pear', 'Orange'];

    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];

    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];

    return (
      <Example title="Checkbox Group">

        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
        <br /><br />
        <CheckboxGroup options={options} defaultValue={['Pear']} />
        <br /><br />
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} />
      </Example>
    );
  }
}
 
export default Group;
