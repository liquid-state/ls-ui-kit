import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;
import Example from '../../utils/Example';

class Config extends Component {
  render() { 
    return (
      <Example title="Support more content configuration">

        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Example>
    );
  }
}
 
export default Config;
