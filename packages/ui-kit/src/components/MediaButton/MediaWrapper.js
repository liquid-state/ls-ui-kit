import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const MediaWrapper = (props) => {
  const {
    circle, shadow, style, children,
  } = props;
  return (
    <div className={cx('uikit-media-wrapper', { circle, shadow })} style={style}>
      {children}
    </div>
  );
};

MediaWrapper.displayName = 'MediaWrapper';

MediaWrapper.propTypes = {
  circle: PropTypes.bool,
  shadow: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

MediaWrapper.defaultProps = {
  circle: false,
  shadow: false,
  style: {},
};

export default MediaWrapper;

