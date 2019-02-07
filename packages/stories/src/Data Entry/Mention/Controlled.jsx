import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';

const { toContentState } = Mention;

class Controlled extends Component {
  state = {
    value: toContentState('@afc163')
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Controlled</h3>
        <Row>
          <Col sm={16} lg={7}>
          <Mention
              ref={ele => this.mention = ele}
              notFoundContent="Results not found"
              suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai']}
              value={this.state.value}
              onChange={this.handleChange}
              style={{width: '100%'}}
            />
          </Col>
        </Row>
      </section>
    );
  }

  componentDidMount() {
    this.mention.focus();
  }

  handleChange = (editorState) => {
    this.setState({
      value: editorState,
    });
  }
}
 
export default Controlled;
