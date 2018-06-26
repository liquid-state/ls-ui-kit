import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse as RoundedCollapse } from 'antd';
import cn from 'classnames';

import './style.less';

export default class Collapse extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }
  static defaultProps = {
    children: null,
    className: null,
  }
  getClass(extra) {
    const {
      className,
    } = this.props;
    return cn('ls-ui-kit', 'rounded-collapse', className, extra);
  }

  render() {
    const {
      children,
      className,
      ...props
    } = this.props;
    return (
      <RoundedCollapse
        className={this.getClass()}
        {...props}
      >
        {children}
      </RoundedCollapse>
    );
  }
}
