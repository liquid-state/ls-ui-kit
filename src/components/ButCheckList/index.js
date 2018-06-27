import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import cn from 'classnames';

import './style.less';


export default class ButCheckList extends Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    type: 'default',
    className: null,
  };
  state = {
    Checked: false,
  }
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
      ...props
    } = this.props;
    const { Checked } = this.state;
    return (
        <Button
          type={Checked ? 'primary' : 'default'}
          icon={Checked ? 'check' : ''}
          shape="circle"
          className={this.getClass()}
          {...props}
          onClick={() => this.setState({ Checked: !this.state.Checked })}
        />
    );
  }
}
