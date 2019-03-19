import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: '#',
    title: `Ui Kit part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum libero',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum libero at ipsum eleifend, ac porta quam dapibus. Praesent vel nisl elementum, dignissim est quis, rutrum odio. Suspendisse potenti. ',
  });
}

const pagination = {
  pageSize: 10,
  current: 1,
  total: listData.length,
  onChange: (() => {}),
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Vertical extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Vertical</h3>

        <List
          itemLayout="vertical"
          size="large"
          pagination={pagination}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </section>
    );
  }
}
 
export default Vertical;
