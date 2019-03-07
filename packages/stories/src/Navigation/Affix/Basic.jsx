import React, { Component } from 'react';
import { Affix, Button } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() {
    return (
      <Example title="Basic">
        <Affix className="mb20">
          <Button type="primary">Affix top</Button>
        </Affix>
        <Affix offsetBottom={0}>
          <Button type="primary">Affix bottom</Button>
        </Affix>
      </Example>
    );
  }
}

export default Basic;
