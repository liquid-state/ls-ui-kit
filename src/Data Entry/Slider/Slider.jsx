import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Slider as AntSlider } from 'antd';

import './style.less';

const Slider = (props) => {
  const {
    className,
    mobile,
    ...otherProps
  } = props;
  const name = cn('ls-ui-kit', className, { mobile });
  return <AntSlider className={name} {...otherProps} />;
};

Slider.propTypes = {
  className: PropTypes.string,
  mobile: PropTypes.bool,
};

Slider.defaultProps = {
  className: '',
  mobile: false,
}

export default Slider;
