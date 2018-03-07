import React, { Component } from 'react';
import { Button, Icon } from 'antd';

import './style.less';

/* Default */
export function ButtonDefault(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-default ${className}`}
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
};

/* Box */
export function ButtonBox(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-box ${className}`}
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
};

/* Rounded */
export function ButtonRounded(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-rounded ${className}`}
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
};

/* Radius */
export function ButtonRadius(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-radius ${className}`}
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
};

/* Shadow */
export function ButtonShadow(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-shadow ${className}`}
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
};

/* Ghost */
export function ButtonGhost(props) {
  const {children, type, className, ...otherProps} = props;
  return (
    <Button
      className={`ls-ghost ${className}`}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
ButtonGhost.defaultProps = {
  type: 'default',
  className: ''
};