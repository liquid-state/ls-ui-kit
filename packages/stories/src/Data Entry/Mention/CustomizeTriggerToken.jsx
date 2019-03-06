import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';

const { toString } = Mention;

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
const tags = ['1.0', '2.0', '3.0'];

class CustomizeTriggerToken extends Component {
  state = {
    suggestions: []
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customize Trigger Token</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Mention
              style={{ width: '100%' }}
              placeholder="input @ to mention people, # to mention tag"
              prefix={['@', '#']}
              onSearchChange={this.onSearchChange}
              suggestions={this.state.suggestions}
              notFoundContent="Results not found"
            />
          </Col>
        </Row>
      </section>
    );
  }

  onSearchChange = (value, trigger) => {
    const dataSource = trigger === '@' ? users : tags;
    this.setState({
      suggestions: dataSource.filter(item => item.indexOf(value) !== -1),
    });
  }
}
 
export default CustomizeTriggerToken;
