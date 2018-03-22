import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Checkbox } from 'antd';
import './style.less';

const CheckboxMobile = (props) => {
  const {
    children,
    className,
    mobile,
    ...other
  } = props;

  return <Checkbox className={cn('ls-ui-kit', className, { mobile })} {...other}>{children}</Checkbox>;
};

CheckboxMobile.propTypes = {
  children: PropTypes.string,
  mobile: PropTypes.bool,
  className: PropTypes.string,
};

CheckboxMobile.defaultProps = {
  children: '',
  mobile: false,
  className: '',
};

export default CheckboxMobile;
