import React, { Component } from 'react';
import DataSet from '@antv/data-set';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
import data from './data';

const ds = new DataSet();

const dv = ds.createView().source(data);

dv.transform({
    type: 'bin.histogram',
    field: 'depth',
    binWidth: 1,
    // offset: -0.3,
    groupBy: [ 'cut' ],
    as: [ 'depth', 'count' ]
});

class StackHistogram extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Stack histogram</h3>
        <Chart height={500} data={dv}  forceFit>
          <Legend />
          <Axis name="depth" grid={{
            lineStyle: {
              stroke: '#d9d9d9',
              lineWidth: 1,
              lineDash: [ 2, 2 ]
            }
          }}/>
          <Axis name="count" />
          <Tooltip inPlot={false} crosshairs={false} position={'top'} />
          <Geom type='intervalStack' position="depth*count" color='cut' />
        </Chart>
      </section>
    );
  }
}
 
export default StackHistogram;