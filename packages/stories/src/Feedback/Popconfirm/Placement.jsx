import React, { Component } from 'react';
import { Popconfirm, message, Button } from 'antd';
import Example from '../../utils/Example';

const text = 'Are you sure delete this task?';

function confirm() {
  message.info('Click on Yes.');
}

class Placement extends Component {
  render() {
    return (
      <Example title="Placement">
        <div className="demo">
          <div style={{ marginLeft: 80, whiteSpace: 'nowrap' }}>
            <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>TL</Button>
            </Popconfirm>
            <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button className="tooltip" >Top</Button>
            </Popconfirm>
            <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>TR</Button>
            </Popconfirm>
          </div>
          <div style={{ width: 70, float: 'left' }}>
            <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}} className="tooltip" >LT</Button>
            </Popconfirm>
            <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}} className="tooltip" >Left</Button>
            </Popconfirm>
            <Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}} className="tooltip" >LB</Button>
            </Popconfirm>
          </div>
          <div style={{ width: 70, marginLeft: 250 }}>
            <Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}} className="tooltip" >RT</Button>
            </Popconfirm>
            <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}} className="tooltip" >Right</Button>
            </Popconfirm>
            <Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{width: '100%'}} className="tooltip" >RB</Button>
            </Popconfirm>
          </div>
          <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button className="tooltip" >BL</Button>
            </Popconfirm>
            <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>Bottom</Button>
            </Popconfirm>
            <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button className="tooltip" >BR</Button>
            </Popconfirm>
          </div>
        </div>
      </Example>
    );
  }
}

export default Placement;
