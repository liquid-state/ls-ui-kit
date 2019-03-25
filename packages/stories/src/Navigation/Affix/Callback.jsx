import React, { Component } from 'react';
import { Affix, Button } from 'antd';
import Example from '../../utils/Example';

class Callback extends Component {
  render() {
    return (
      <Example title="Callback">
        <Affix offsetTop={120}>
          <Button>120px to affix top</Button>
        </Affix>
      </Example>
    );
  }
}

export default Callback;
