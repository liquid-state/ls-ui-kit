import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';
import Example from '../../utils/Example';

const { toContentState } = Mention;

class Controlled extends Component {
  state = {
    value: toContentState('@afc163')
  };

  render() {
    return (
      <Example title="Controlled">
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
      </Example>
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
