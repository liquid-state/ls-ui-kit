import React from 'react';
import { Icon } from 'antd';
import TimelineCircle from '../../../../src/components/TimelineCircle';

const BigButTimeline = () => (
      <section className="example">
        <h3 className="ex-title">Big But Timeline</h3>
        <TimelineCircle type="heading" text="Create a services site 2015-09-01">
          <Icon type="clock-circle-o" style={{ fontSize: '16px' }} />
        </TimelineCircle>
        <TimelineCircle type="completed" text="Solve initial network problems 2015-09-01">
          1
        </TimelineCircle>
        <TimelineCircle type="process" text="Technical testing 2015-09-01">
          2
        </TimelineCircle>
        <TimelineCircle noline type="waiting" text="Network problems being solved 2015-09-01">
          3
        </TimelineCircle>
      </section>
);

export default BigButTimeline;
