import React from 'react';
import { Timeline, Icon, Collapse } from 'antd';
import './style.less';

const { Panel } = Collapse;

const customPanelStyle = {
  background: 'transparent',
  border: 0,
  overflow: 'hidden',
};

const BigTimelineCollapse = () => (
      <Timeline className="ant-timeline-big-button">
        <Timeline.Item
          className="ant-timeline-item-heading"
          dot={
            <div className="circle circle-heading">
              <Icon type="verticle-right" />
            </div>
          }
        >
          <div className="head-title">Last refreshed: 12:40</div>
        </Timeline.Item>
        <Timeline.Item
          className="ant-timeline-item-completed"
          dot={
            <div className="circle circle-completed">2</div>
          }
        >
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
          </Collapse>
        </Timeline.Item>
        <Timeline.Item
          className="ant-timeline-item-process"
          dot={
            <div className="circle circle-process">3</div>
          }
        >
          <Collapse bordered={false}>
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
          </Collapse>
        </Timeline.Item>
        <Timeline.Item
          className="ant-timeline-item-waiting"
          dot={
            <div className="circle circle-waiting">4</div>
          }
        >
          <Collapse bordered={false}>
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
        </Timeline.Item>
      </Timeline>
);

export default BigTimelineCollapse;
