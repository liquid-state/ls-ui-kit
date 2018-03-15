import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import cn from 'classnames';

import './style.less';

class StretchButton extends Component {
  static defaultProps = {
    type: 'default',
    className: '',
    block: '',
    round: '',
    raised: ''
  };

  render() {
    const {type, className, children, block, round, raised, ...other} = this.props;

    return (
      <Button
        type={type}
        className={this.getClass()}
        {...other}
      >
        { children }
      </Button>
    );
  }

  getClass() {
    const {block, round, raised, className} = this.props;
    return cn('ls-ui-kit stretch-button', className, {block, round, raised});
  }
}
 
export default StretchButton;