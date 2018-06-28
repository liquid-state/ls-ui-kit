import React, { Component } from 'react';
import { Collapse, Icon } from 'antd';

import './style.css';
import RoundedCollapse from '../../../../src/components/RoundedCollapse/Collapse';

const { Panel } = Collapse;

const Drop = () => (
  <React.Fragment>
    <div className="droprow">
      <Icon className="dropicon" type="up-square-o" />
      <div className="droptext"><a href="#">Parking reminder timer</a></div>
    </div>
    <div className="droprow">
      <Icon className="dropicon" type="up-square-o" />
      <div className="droptext">You appoinment time is 09:40 am tommorrow, 11/10/18</div>
    </div>
  </React.Fragment>
);

class RoundedCollapseStory extends Component {
  headerRender = () => (
    <React.Fragment>
      <Icon className="iconstart" type="up-square-o" />
      <Icon className="health" type="question" />
      <span className="wrapheader">
        <span>Week</span>
        <Icon className="iconend" type="up-square-o" />
      </span>
    </React.Fragment>
  )
  render() {
    return (
      <section className="example">
      <h3 className="ex-title">Rounded</h3>
      <RoundedCollapse bordered={false} defaultActiveKey={['1']}>
        <Panel showArrow={false} className="panelbtn" header={this.headerRender()} key="1">
          {Drop()}
        </Panel>
        <Panel showArrow={false} className="panelbtn" header={this.headerRender()} key="2">
          {Drop()}
        </Panel>
        <Panel showArrow={false} className="panelbtn" header={this.headerRender()} key="3">
          {Drop()}
        </Panel>
      </RoundedCollapse>
      </section>
    );
  }
}

export default RoundedCollapseStory;
