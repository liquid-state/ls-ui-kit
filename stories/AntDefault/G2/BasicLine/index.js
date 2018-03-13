import React, { Component } from 'react';
import DataSet from '@antv/data-set';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';


const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 }
];

const cols = {
  'value': { min: 0 },
  'year': {range: [ 0 , 1] }
};

class BasicLine extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">The basic line chart</h3>

        <Chart height={500} data={data} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Tooltip crosshairs={{type : "y"}}/>
          <Geom type="line" position="year*value" size={2} />
          <Geom type='point' position="year*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
        </Chart>
      </section>
    );
  }
}
 
export default BasicLine;