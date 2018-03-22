import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import cn from 'classnames';

import './style.less';

const CalledRate = (props) => {
  const {
    className,
    mobile,
    ...other
  } = props;

  const classNames = cn(
    'ls-ui-kit',
    { mobile },
    className,
  );

  return (
    <Rate className={classNames} {...other} />
  );
};

CalledRate.propTypes = {
  className: PropTypes.string,
  mobile: PropTypes.bool,
};

CalledRate.defaultProps = {
  className: '',
  mobile: false,
};

export default CalledRate;
