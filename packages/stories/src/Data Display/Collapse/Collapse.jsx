import React, { Component } from 'react';
import { Collapse } from 'antd';
import Example from '../../utils/Example';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class CollapseBasic extends Component {
  render() { 
    return (
      <Example title="Collapse">

        <Collapse defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Example>
    );
  }
}
 
export default CollapseBasic;
