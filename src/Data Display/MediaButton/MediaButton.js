import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Image from './Image';
import Text from './Text';
import Icon from './Icon';

import './style.less';

export default class extends React.Component {
    static Image = Image;
    static Text = Text;
    static Icon = Icon;

    static displayName = 'MediaButton';
    static propTypes = {
        type: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
    }

    render() {
        const {
            children,
            type,
            className,
            ...props
        } = this.props;

        const cname = cx('ls-ui-kit', 'media-button', className);

        if (type) {
            // Make this an actual button.
            return <button type={type} className={cname} {...props}>{children}</button>;
        }
        return <div className={cname} {...props}>{children}</div>;
    }
}