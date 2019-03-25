import React, { Component } from 'react';
import { Rate, Icon } from 'antd';
import Example from '../../utils/Example';

class Other extends Component {
  render() { 
    return (
      <Example title="Other Character">

        <Rate character={<Icon type="heart" />} allowHalf />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <Rate character="好" allowHalf />
      </Example>
    );
  }
}
 
export default Other;
