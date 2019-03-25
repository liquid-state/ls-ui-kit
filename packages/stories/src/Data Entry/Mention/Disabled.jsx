import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';
import Example from '../../utils/Example';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class Disabled extends Component {
  render() { 
    return (
      <Example title="Disabled or ReadOnly">

        <Row>
          <Col sm={16} lg={7}>
            <div className="mb20">
              <Mention
                style={{ width: '100%' }}
                placeholder="this is disabled Mention"
                suggestions={users}
                notFoundContent="Results not found"
                disabled
              />
            </div>
            <Mention
              style={{ width: '100%' }}
              placeholder="this is readOnly Mention"
              suggestions={users}
              notFoundContent="Results not found"
              readOnly
            />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Disabled;
