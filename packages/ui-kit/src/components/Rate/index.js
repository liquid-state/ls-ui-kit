import React from 'react';
import PropTypes from 'prop-types';
import { Rate as AntRate } from 'antd';
import cn from 'classnames';

import './style.less';

const Rate = (props) => {
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
    <AntRate className={classNames} {...other} />
  );
};

Rate.propTypes = {
  className: PropTypes.string,
  mobile: PropTypes.bool,
};

Rate.defaultProps = {
  className: '',
  mobile: false,
};

export default Rate;
