import React, { Component } from 'react';
import { Tooltip, Button } from 'antd';
import Example from '../../utils/Example';

const text = <span>prompt text</span>;

const buttonWidth = 70;

class Placement extends Component {
  render() { 
    return (
      <Example title="Placement">

        <div className="demo">
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Tooltip placement="topLeft" title={text}>
              <Button className="tooltip" >TL</Button>
            </Tooltip>
            <Tooltip placement="top" title={text}>
              <Button className="tooltip" >Top</Button>
            </Tooltip>
            <Tooltip placement="topRight" title={text}>
              <Button className="tooltip" >TR</Button>
            </Tooltip>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Tooltip placement="leftTop" title={text}>
              <Button className="tooltip" >LT</Button>
            </Tooltip>
            <Tooltip placement="left" title={text}>
              <Button className="tooltip" >Left</Button>
            </Tooltip>
            <Tooltip placement="leftBottom" title={text}>
              <Button className="tooltip" >LB</Button>
            </Tooltip>
          </div>
          <div style={{ width: buttonWidth, marginLeft: 260 }}>
            <Tooltip placement="rightTop" title={text}>
              <Button className="tooltip" >RT</Button>
            </Tooltip>
            <Tooltip placement="right" title={text}>
              <Button className="tooltip" >Right</Button>
            </Tooltip>
            <Tooltip placement="rightBottom" title={text}>
              <Button className="tooltip" >RB</Button>
            </Tooltip>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Tooltip placement="bottomLeft" title={text}>
              <Button>BL</Button>
            </Tooltip>
            <Tooltip placement="bottom" title={text}>
              <Button className="tooltip" >Bottom</Button>
            </Tooltip>
            <Tooltip placement="bottomRight" title={text}>
              <Button className="tooltip" >BR</Button>
            </Tooltip>
          </div>
        </div>
      </Example>
    );
  }
}
 
export default Placement;
