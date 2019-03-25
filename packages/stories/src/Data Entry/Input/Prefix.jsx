import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import Example from '../../utils/Example';

class Prefix extends Component {
  state = {
    userName: '',
  };

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    
    return (
      <Example title="Prefix and Suffix">

        <Input
          style={{maxWidth: 300}}
          className="fw"
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={suffix}
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => this.userNameInput = node}
        />
      </Example>
    );
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
}
 
export default Prefix;
