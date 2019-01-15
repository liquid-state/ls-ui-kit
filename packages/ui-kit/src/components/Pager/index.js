import React from 'react';
import PropTypes from 'prop-types';

import Pager from './Pager';
import StatefulPager from './StatefulPager';
import './styles.less';

const PagerSwitch = ({ current, ...props }) => {
  if (current === null) {
    return <StatefulPager {...props} />;
  }
  return <Pager current={current} {...props} />;
};

PagerSwitch.displayName = 'PagerSwitch';

PagerSwitch.propTypes = {
  steps: PropTypes.number.isRequired,
  current: PropTypes.number,
  defaultValue: PropTypes.number,
  hideLeftArrow: PropTypes.bool,
  hideRightArrow: PropTypes.bool,
  onChange: PropTypes.func,
};

PagerSwitch.defaultProps = {
  current: null,
  defaultValue: 0,
  hideLeftArrow: false,
  hideRightArrow: false,
  onChange: e => e,
};

export default PagerSwitch;
