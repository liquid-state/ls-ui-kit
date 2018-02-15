import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class Autosize extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Autosizing the height to fit the content</h3>

        <TextArea style={{maxWidth: 300}} className="mb20" placeholder="Autosize height based on content lines" autosize />
        <br /><br />
        <TextArea style={{maxWidth: 300}} placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />

      </section>
    );
  }
}
 
export default Autosize;