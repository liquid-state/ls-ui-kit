import React, { Component } from 'react';
import { Button, Icon } from 'antd';

import './style.less';

class LS_Button extends Component {
  static defaultProps = {
    type: 'default',
    className: ''
  };

  render() {
    const {type, className, children, box, rounded, radius, shadow, ...other} = this.props;

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
    const {box, rounded, radius, shadow, className} = this.props;
    let _className = 'ls-ui-kit';
    _className = box ? _className + ' box' : _className;
    _className = rounded ? _className + ' rounded' : _className;
    _className = radius ? _className + ' radius' : _className;
    _className = shadow ? _className + ' shadow' : _className;
    _className = className ? _className + ` ${className}` : _className;
    return _className;
  }
}
 
export default LS_Button;