import React, { Component } from 'react';
import { Cascader, Col, Row } from 'antd';
import Example from '../../utils/Example';

const options = [
  {
    value: 'nsw',
    label: 'New South Wales',
    isLeaf: false,
  },
  {
    value: 'wa',
    label: 'Western Australia',
    isLeaf: false,
  }
];

class Load extends Component {
  state = {
    options
  };

  render() { 
    return (
      <Example title="Load Options Lazily">
        <Row>
          <Col sm={16} lg={7} >
            <Cascader
              style={{width: '100%'}}
              options={this.state.options}
              loadData={this.loadData}
              placeholder="Please select"
              changeOnSelect
            />
          </Col>
        </Row>
      </Example>
    );
  }

  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} Dynamic 1`,
        value: 'dynamic1',
      }, {
        label: `${targetOption.label} Dynamic 2`,
        value: 'dynamic2',
      }];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  }
}
 
export default Load;
