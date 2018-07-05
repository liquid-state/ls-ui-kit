import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import cn from 'classnames';

import './style.less';


export default class ButCheckList extends Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClicked: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    type: 'default',
    className: null,
  };
  getClass() {
    const {
      className,
    } = this.props;
    return cn('ls-ui-kit', 'but-checked', className);
  }

  render() {
    const {
      type,
      className,
      checked,
      onClicked,
      ...props
    } = this.props;
    return (
        <Button
          type={checked ? 'primary' : 'default'}
          icon={checked ? 'check' : ''}
          shape="circle"
          className={this.getClass()}
          {...props}
          onClick={onClicked}
        />
    );
  }
}
