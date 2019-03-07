import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import Example from '../../utils/Example';

const text = <span>Title</span>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 60;

class Placement extends Component {
  render() {
    return (
      <Example title="Placement">

        <div className="demo">
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Popover placement="topLeft" title={text} content={content} trigger="click">
              <Button>TL</Button>
            </Popover>
            <Popover placement="top" title={text} content={content} trigger="click">
              <Button className="ml20">Top</Button>
            </Popover>
            <Popover placement="topRight" title={text} content={content} trigger="click">
              <Button className="ml20">TR</Button>
            </Popover>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Popover placement="leftTop" title={text} content={content} trigger="click">
              <Button className="mb20 fw">LT</Button>
            </Popover>
            <Popover placement="left" title={text} content={content} trigger="click">
              <Button className="mb20 fw">Left</Button>
            </Popover>
            <Popover placement="leftBottom" title={text} content={content} trigger="click">
              <Button className="fw">LB</Button>
            </Popover>
          </div>
          <div style={{ width: buttonWidth, marginLeft: 260 }}>
            <Popover placement="rightTop" title={text} content={content} trigger="click">
              <Button className="fw mb20">RT</Button>
            </Popover>
            <Popover placement="right" title={text} content={content} trigger="click">
              <Button className="fw mb20">Right</Button>
            </Popover>
            <Popover placement="rightBottom" title={text} content={content} trigger="click">
              <Button className="fw">RB</Button>
            </Popover>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popover placement="bottomLeft" title={text} content={content} trigger="click">
              <Button className="mr20">BL</Button>
            </Popover>
            <Popover placement="bottom" title={text} content={content} trigger="click">
              <Button className="mr20">Bottom</Button>
            </Popover>
            <Popover placement="bottomRight" title={text} content={content} trigger="click">
              <Button>BR</Button>
            </Popover>
          </div>
        </div>
      </Example>
    );
  }
}
 
export default Placement;
