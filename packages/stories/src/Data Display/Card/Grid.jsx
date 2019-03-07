import React, { Component } from 'react';
import { Card } from 'antd';
import Example from '../../utils/Example';

class Grid extends Component {
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };

    return (
      <Example title="Grid card">

        <Card title="Card Title">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </Example>
    );
  }
}
 
export default Grid;
