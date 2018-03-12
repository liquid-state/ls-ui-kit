import React from 'react';
import cx from 'classnames';

export default ({ circle, shadow, style, children }) => (
    <div className={cx('uikit-media-wrapper', {circle, shadow})} style={style}>
        {children}
    </div>
);
