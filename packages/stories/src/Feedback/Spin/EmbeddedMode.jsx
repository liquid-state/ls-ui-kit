import React, { Component } from 'react';
import { Spin, Switch, Alert } from 'antd';
import Example from '../../utils/Example';

class EmbeddedMode extends Component {
  state = { loading: false };

  render() {
    return (
      <Example title="Embedded mode">
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </Example>
    );
  }

  toggle = value => this.setState({ loading: value });
}

export default EmbeddedMode;
