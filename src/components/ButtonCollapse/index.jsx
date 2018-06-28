import React from 'react';
import { Collapse, Icon } from 'antd';
import './style.less';

const { Panel } = Collapse;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const ButtonCollapse = () => (
  <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
      <div className="el-row">
        <Icon type="check-square-o" />
        <div>Prefksopv</div>
      </div>
    </Panel>
    <Panel header="This is panel header 2" key="2" style={customPanelStyle} />
    <Panel header="This is panel header 3" key="3" style={customPanelStyle} />
  </Collapse>
);

export default ButtonCollapse;
