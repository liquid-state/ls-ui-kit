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

/* Default */
/* export function ButtonDefault(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-ui-kit default ${className}`}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
ButtonDefault.defaultProps = {
  type: 'default',
  className: ''
}; */

/* Box */
/* export function ButtonBox(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-ui-kit box ${className}`}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
ButtonBox.defaultProps = {
  type: 'default',
  className: ''
}; */

/* Rounded */
/* export function ButtonRounded(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-ui-kit rounded ${className}`}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
ButtonRounded.defaultProps = {
  type: 'default',
  className: ''
}; */

/* Radius */
/* export function ButtonRadius(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-ui-kit radius ${className}`}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
ButtonRadius.defaultProps = {
  type: 'default',
  className: ''
}; */

/* Shadow */
/* export function ButtonShadow(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-ui-kit shadow ${className}`}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
ButtonShadow.defaultProps = {
  type: 'default',
  className: ''
}; */

/* Ghost */
/* export function ButtonGhost(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-ui-kit ghost ${className}`}
      type={type}
      {...otherProps}
      ghost
    >
      {children}
    </Button>
  );
}
ButtonGhost.defaultProps = {
  type: 'default',
  className: ''
}; */