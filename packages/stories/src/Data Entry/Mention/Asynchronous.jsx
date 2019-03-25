import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';
import Example from '../../utils/Example';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class Asynchronous extends Component {
  state = {
    suggestions: [],
    loading: false
  };

  render() {
    const { suggestions, loading } = this.state;

    return (
      <Example title="Asynchronous Loading">

        <Row>
          <Col sm={16} lg={7}>
            <Mention
              style={{ width: '100%' }}
              loading={loading}
              suggestions={suggestions}
              onSearchChange={this.onSearchChange}
              notFoundContent="Results not found"
            />
          </Col>
        </Row>
      </Example>
    );
  }

  fetchSuggestions = (value, callback) => {
    setTimeout(() => {
      callback(users.filter(item => item.indexOf(value) !== -1));
    }, 500);
  }

  onSearchChange = (value) => {
    this.fetchSuggestions(value, (suggestions) => {
      this.setState({
        suggestions,
        loading: false,
      });
    });
    this.setState({
      loading: true,
    });
  }
}
 
export default Asynchronous;
