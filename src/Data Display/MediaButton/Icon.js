import React from 'react';
import PropTypes from 'prop-types';
import { Icon as AntIcon } from 'antd';
import MediaWrapper from './MediaWrapper';

const Icon = ({ circle, shadow, style, iconStyle, ...props }) => (
    <div className="uikit-icon">
        <MediaWrapper circle={circle} shadow={shadow} style={style}>
            <div className="inner-icon-wrapper">
                <AntIcon style={iconStyle} {...props} />
            </div>
        </MediaWrapper>
    </div>
);

Icon.displayName = 'MediaButton.Icon';
Icon.propTypes = {
    circle: PropTypes.bool,
    shadow: PropTypes.bool,
    style: PropTypes.object,
    iconStyle: PropTypes.object
};

export default Icon;
