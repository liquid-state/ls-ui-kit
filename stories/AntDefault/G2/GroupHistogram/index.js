import React, { Component } from 'react';
import DataSet from '@antv/data-set';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';

const data = [
  { name:'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.' :39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
  { name:'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.' :34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4}
];

const ds = new DataSet();

const dv = ds.createView().source(data);

dv.transform({
  type: 'fold',
  fields: [ 'Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.' ], // 展开字段集
  key: '月份', // key字段
  value: '月均降雨量', // value字段
});

class GroupHistogram extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Group histogram</h3>

        <Chart height={500} data={dv} forceFit>
          <Axis name="月份" />
          <Axis name="月均降雨量" />
          <Legend />
          <Tooltip crosshairs={{type : "y"}}/>
          <Geom type='interval' position="月份*月均降雨量" color={'name'} adjust={[{type: 'dodge',marginRatio: 1/32}]} />
        </Chart>
      </section>
    );
  }
}
 
export default GroupHistogram;