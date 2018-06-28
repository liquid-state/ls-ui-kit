import React from 'react';
import { Timeline, Icon } from 'antd';
import './style.less';


const BigButtonTimeline = () => (
      <Timeline className="ant-timeline-big-button">
        <Timeline.Item
          className="ant-timeline-item-heading"
          dot={
            <div className="circle circle-heading">
              <Icon type="verticle-right" />
            </div>
          }
        >
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item
          className="ant-timeline-item-completed"
          dot={
            <div className="circle circle-completed">2</div>
          }
        >
          Solve initial network problems 2015-09-01
        </Timeline.Item>
        <Timeline.Item
          className="ant-timeline-item-process"
          dot={
            <div className="circle circle-process">3</div>
          }
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item
          className="ant-timeline-item-waiting"
          dot={
            <div className="circle circle-waiting">4</div>
          }
        >
          Network problems being solved 2015-09-01
        </Timeline.Item>
      </Timeline>
);

export default BigButtonTimeline;
