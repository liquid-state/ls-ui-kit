import React from 'react';
import { Collapse, Icon } from 'antd';
import './style.less';

const { Panel } = Collapse;

const customPanelStyle = {
  background: 'transparent',
  borderRadius: 4,
  marginTop: 24,
  border: 0,
  overflow: 'hidden',
};

const ButtonCollapse = () => (
  <Collapse bordered={false}>
    <Panel
      className="ant-collapse-item-completed"
      header="This is panel header 1"
      key="1"
      style={customPanelStyle}
    >
      <div className="el-row">
        <Icon type="check-square-o" />
        <div className="el-fc">Parking reminder timer</div>
      </div>
      <div className="el-row">
        <Icon type="check-square-o" />
        <div>Your appointment time is 09:40</div>
      </div>
    </Panel>
    <Panel
      className="ant-collapse-item-progress"
      header="This is panel header 2"
      key="2"
      style={customPanelStyle}
    >
      <div className="el-row">
        <Icon type="check-square-o" />
        <div className="el-fc">Parking reminder timer</div>
      </div>
      <div className="el-row">
        <Icon type="check-square-o" />
        <div>Your appointment time is 09:40</div>
      </div>
    </Panel>
    <Panel
      className="ant-collapse-item-waiting"
      header="This is panel header 3"
      key="3"
      style={customPanelStyle}
    >
      <div className="el-row">
        <Icon type="check-square-o" />
        <div className="el-fc">Parking reminder timer</div>
      </div>
      <div className="el-row">
        <Icon type="check-square-o" />
        <div>Your appointment time is 09:40</div>
      </div>
    </Panel>
  </Collapse>
);

export default ButtonCollapse;
