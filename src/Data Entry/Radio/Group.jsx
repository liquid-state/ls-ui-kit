import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import cn from 'classnames';

const { Group } = Radio;

class RadioGroup extends Component {
  static propTypes = {
    mobile: PropTypes.bool,
    value: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.element),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    mobile: false,
    value: null,
    children: [],
    onChange: null,
  };

  getClass() {
    let { mobile } = this.props;
    mobile = mobile ? 'mobile' : null;
    return cn('ls-ui-kit', mobile);
  }
  render() {
    return (
      <Group value={this.props.value} onChange={this.props.onChange} className={this.getClass()}>
        {
          this.props.children
        }
      </Group>
    );
  }
}

export default RadioGroup;
