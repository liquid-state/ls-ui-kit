import React from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Group from './Group';
import './style.less';

const RadioComponent = (props) => {
  const {
    children,
    className,
    mobile,
    ...other
  } = props;

  return (
    <Radio {...other} className={cn('ls-ui-kit', className, { mobile })}>
      {children}
    </Radio>
  );
};

RadioComponent.Group = Group;

RadioComponent.propTypes = {
  mobile: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

RadioComponent.defaultProps = {
  mobile: false,
  className: '',
  children: null,
};

export default RadioComponent;
