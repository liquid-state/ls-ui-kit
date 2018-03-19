import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './style.less';

export default props => {
  const {children, ...other} = props;
  return <Checkbox {...other}>{children}</Checkbox>;
};

