import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Sized from './sized';
import Scaling from './scaling';

import './style.less';

const MediaButtonGroup = ({
  children, className, size, ...props
}) => {
  const childCount = React.Children.count(children);
  // (1, 2, 4 are doubles, all others are tripples);
  const isTripples = childCount === 3 || childCount > 4;

  const cname = cn('ls-ui-kit media-button-group', className, size, { tripples: isTripples });
  return size
    ? <Sized {...props} className={cname} isTripples={isTripples}>{children}</Sized>
    : <Scaling {...props} className={cname} isTripples={isTripples}>{children}</Scaling>;
};

MediaButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
};

MediaButtonGroup.defaultProps = {
  className: undefined,
  size: undefined,
};

MediaButtonGroup.displayName = 'MediaButtonGroup';

export default MediaButtonGroup;
