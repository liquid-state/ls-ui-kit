import React from 'react';
import { storiesOf } from '@storybook/react';

import CurveLineChart from './CurveLineChart';
import StackHistogram from './StackHistogram';
import GroupHistogram from './GroupHistogram';
import ScatterPlot from './ScatterPlot';
import MultipleLineCharts from './MultipleLineCharts';
import BasicLine from './BasicLine';

storiesOf('G2', module)
  .add('Curve line chart', () => <CurveLineChart />)
  .add('Stack histogram', () => <StackHistogram />)
  .add('Group histogram', () => <GroupHistogram />)
  .add('Scatter plot', () => <ScatterPlot />)
  .add('Multiple line charts', () => <MultipleLineCharts />)
  .add('The basic line chart', () => <BasicLine />);