import React from 'react';
import PropTypes from 'prop-types';
import MediaWrapper from './MediaWrapper';

const Image = (props) => {
    const { circle, shadow, style, ...otherProps } = props;
    return (
        <MediaWrapper circle={circle} shadow={shadow} >
            <img {...otherProps} style={style} />
        </MediaWrapper>
    );
};

Image.displayName = 'MediaButton.Image';
Image.propTypes = {
    circle: PropTypes.bool,
    shadow: PropTypes.bool,
    style: PropTypes.object
};

export default Image;
