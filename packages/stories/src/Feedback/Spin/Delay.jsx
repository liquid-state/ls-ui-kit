import React, { Component } from 'react';
import { Spin, Alert, Switch } from 'antd';
import Example from '../../utils/Example';

class Delay extends Component {
  state = { loading: false };

  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );

    return (
      <Example title="Delay">
        <Spin spinning={this.state.loading} delay={500} >{container}</Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </Example>
    );
  }


  toggle = (value) => {
    this.setState({ loading: value });
  }
}

export default Delay;
