import React, { Component } from 'react';
import { List, Avatar } from 'antd';
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

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic List">

        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="#">{item.title}</a>}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum libero at ipsum eleifend"
              />
            </List.Item>
          )}
        />
      </Example>
    );
  }
}
 
export default Basic;
