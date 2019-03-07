import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  state = {
    dataSource: []
  };

  render() { 
    return (
      <Example title="Basic Usage">
        <Row>
          <Col md={12} lg={6}>
            <AutoComplete
              dataSource={this.state.dataSource}
              style={{ width: '100%' }}
              onSearch={this.handleSearch}
              placeholder="input here"
            />
          </Col>
        </Row>
      </Example>
    );
  }

  handleSearch = value => this.setState({ dataSource: !value ?
      [] :
      [
        value,
        value + value,
        value + value + value,
      ],
    });
}
 
export default Basic;
