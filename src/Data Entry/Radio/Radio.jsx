import React, { Component } from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Group from './Group';
import './style.less';

class RadioComponent extends Component {
  static propTypes = {
    mobile: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.number,
    children: PropTypes.any,
  };

  static defaultProps = {
    mobile: false,
    className: '',
    value: 0,
    children: [],
  };

  static Group = Group;

  getClass() {
    let { mobile } = this.props;
    mobile = mobile ? 'mobile' : null;
    return cn('ls-ui-kit', this.props.className, mobile);
  }

  render() {
    const { value } = this.props;

    return (
      <Radio value={value} className={this.getClass()}>
        {this.props.children}
      </Radio>
    );
  }
}

export default RadioComponent;
