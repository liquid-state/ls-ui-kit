import React from 'react';
import cn from 'classnames';
import { Slider } from 'antd';

import './style.less';

export default (props) => {
    const {
        className,
        ...otherProps
    } = props;

    const name = cn(className, 'mobile');

    return <Slider className={name} {...otherProps} />;
};