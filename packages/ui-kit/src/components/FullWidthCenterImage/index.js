import React from 'react';
import { string, bool } from 'prop-types';
import cn from 'classnames';

import './style.less';

const FullWidthCenterImage = ({
  image, className, alt, borderless,
}) => (
  <div className={cn('ls-ui-kit full-width-center-image', className, { borderless })}>
    <img src={image} alt={alt} />
  </div>
);

FullWidthCenterImage.propTypes = {
  image: string.isRequired,
  alt: string,
  className: string,
  borderless: bool,
};

FullWidthCenterImage.defaultProps = {
  className: null,
  alt: '',
  borderless: false,
};

FullWidthCenterImage.displayName = 'FullWidthCenterImage';

export default FullWidthCenterImage;
