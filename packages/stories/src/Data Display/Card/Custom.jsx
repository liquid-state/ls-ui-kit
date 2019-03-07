import React, { Component } from 'react';
import { Card } from 'antd';
import Example from '../../utils/Example';

class Custom extends Component {
  render() {
    const { Meta } = Card;

    return (
      <Example title="Customized content">

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
      </Example>
    );
  }
}
 
export default Custom;
