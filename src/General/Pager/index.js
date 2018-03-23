import React from 'react';
import PropTypes from 'prop-types';

import Pager from './Pager';
import UncontrolledPager from './UncontrolledPager';
import './styles.less';

const PagerSwitch = ({ current, ...props }) => {
  if (current === null) {
    return <UncontrolledPager {...props} />;
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
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
};

PagerSwitch.defaultProps = {
  current: null,
  defaultValue: 0,
  hideLeftArrow: false,
  hideRightArrow: false,
  onPrevious: () => { },
  onNext: () => { },
};

export default PagerSwitch;
