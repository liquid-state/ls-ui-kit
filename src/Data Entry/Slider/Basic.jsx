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

    return (
        <section className="example">
            <h3 className="ex-title">Slider</h3>
            <div style={{marginTop: 20}}>
                <Slider className={name} {...otherProps} />
            </div>
        </section>
    );
}