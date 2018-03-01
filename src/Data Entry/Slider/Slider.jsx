import React, { Component } from 'react';
import cn from 'classnames';
import { Slider } from 'antd';

import './style.less';


class SliderComponent extends Component {
    render() {
        const {
            className,
            ...otherProps
        } = this.props;

        const name = cn(className, 'mobile');

        return (
            <Slider className={name} {...otherProps} />
        );
    }
}
 
export default SliderComponent;
/* export default (props) => {
    const {
        className,
        ...otherProps
    } = props;

    const name = cn(className, 'mobile');

    return <Slider className={name} {...otherProps} />;
}; */