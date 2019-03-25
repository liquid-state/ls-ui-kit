import React, { Component } from 'react';
import { List, Card } from 'antd';
import Example from '../../utils/Example';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

class Grid extends Component {
  render() { 
    return (
      <Example title="Grid">

        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card content</Card>
            </List.Item>
          )}
        />
        
      </Example>
    );
  }
}
 
export default Grid;
