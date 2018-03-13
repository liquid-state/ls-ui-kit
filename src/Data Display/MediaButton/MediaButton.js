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
    };

    state = {
        animating: false,
    };

    onClick = () => {
        if (this.state.animating) {
            return;
        }
        this.setState({ animating: true });
        setTimeout(() => this.setState({ animating: false }), 400);
    }

    render() {
        const {
            children,
            type,
            className,
            ...props
        } = this.props;

        const cname = cx('ls-ui-kit', 'media-button', className, { animating: this.state.animating });

        if (type) {
            // Make this an actual button.
            return (
                <button
                    type={type}
                    className={cname}
                    onClick={this.onClick}
                    {...props}>
                    {children}
                </button>
            );
        }
        return (
            <div
                className={cname}
                {...props}
                onClick={this.onClick}>
                {children}
            </div>
        );
    }
}