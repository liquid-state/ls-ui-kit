import React, { Component } from 'react';
import { Input } from 'antd';
import Example from '../../utils/Example';

const { TextArea } = Input;

class Autosize extends Component {
  render() { 
    return (
      <Example title="Autosizing the height to fit the content">

        <TextArea style={{maxWidth: 300}} className="mb20" placeholder="Autosize height based on content lines" autosize />
        <br /><br />
        <TextArea style={{maxWidth: 300}} placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />

      </Example>
    );
  }
}
 
export default Autosize;
