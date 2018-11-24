import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class Asynchronous extends Component {
  state = {
    suggestions: [],
    loading: false
  };

  render() {
    const { suggestions, loading } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Asynchronous Loading</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Mention
              style={{ width: '100%' }}
              loading={loading}
              suggestions={suggestions}
              onSearchChange={this.onSearchChange}
            />
          </Col>
        </Row>
      </section>
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