import React, { Component } from 'react';
import DataSet from '@antv/data-set';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import data from './data';

class ScatterPlot extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Scatter plot</h3>

        <Chart height={600} data={data} forceFit>
          <Tooltip showTitle={false} crosshairs={{type:'cross'}} itemTpl='<li data-index={index} style="margin-bottom:4px;"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}<br/>{value}</li>'/>
          <Axis name='height' />
          <Axis name='weight' />
          <Geom type='point' position="height*weight" opacity={0.65} shape="circle" size={4} tooltip={['gender*height*weight', (gender, height, weight) => {
          return {
            name: gender,
            value: height + '(cm), ' + weight + '(kg)'
          };
          }]} />
        </Chart>
      </section>
    );
  }
}
 
export default ScatterPlot;