import React, { Component } from 'react';
import { Radio } from 'antd';

import './style.less';

const RadioGroup = Radio.Group;

class RadioComponent extends Component {
  state = {
    value: 1,
  };

  render() {
    console.log(this.props.data)
    const { type } = this.props;
    return (
      <div className={`ls-ui-kit-radio-${type}`}>
        <RadioGroup className="ls-ui-kit" onChange={this.onChange} value={this.state.value}>
          {
            this.props.data.map(
              item =>
                <Radio key={item.value} value={item.value} disabled={item.disabled}>{item.text}</Radio>
            )
          }
        </RadioGroup>
      </div>
    );
  }

  onChange = e => this.setState({ value: e.target.value });
}

RadioComponent.defaultProps = {
  type: 'desktop'
};

export default RadioComponent;