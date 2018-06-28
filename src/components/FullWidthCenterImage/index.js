import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import './style.less';

const FullWidthCenterImage = ({ image, className, alt }) => (
  <div className={cn('ls-ui-kit full-width-center-image', className)}>
    <img src={image} alt={alt} />
  </div>
);

FullWidthCenterImage.propTypes = {
  image: string.isRequired,
  alt: string,
  className: string,
};

FullWidthCenterImage.defaultProps = {
  className: null,
  alt: '',
};

FullWidthCenterImage.displayName = 'FullWidthCenterImage';

export default FullWidthCenterImage;
