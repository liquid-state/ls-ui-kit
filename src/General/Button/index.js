import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import cn from 'classnames';

import './style.less';

class StretchButton extends Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    block: PropTypes.bool,
    round: PropTypes.bool,
    raised: PropTypes.bool,
    stretched: PropTypes.bool,
  }

  static defaultProps = {
    type: 'default',
    className: null,
    block: false,
    round: false,
    raised: false,
    stretched: false,
    children: null,
  };

  getClass(extra) {
    const {
      block,
      round,
      raised,
      stretched,
      className,
    } = this.props;
    return cn('ls-ui-kit', className, extra, {
      block, round, raised, stretched,
    });
  }

  render() {
    const {
      type,
      className,
      children,
      block,
      round,
      raised,
      stretched,
      ...other
    } = this.props;

    return (
      <Button
        type={type}
        className={this.getClass()}
        {...other}
      >
        {children}
      </Button>
    );
  }
}

export default StretchButton;
