import React from 'react';
import { string } from 'prop-types';

import './style.less';

const FullCentralImage = ({ image }) => (
  <div className="image-wrapper">
    {image && <img src={image} alt="poster" />}
  </div>
);

FullCentralImage.propTypes = {
  image: string,
};

FullCentralImage.defaultProps = {
  image: null,
};

export default FullCentralImage;
