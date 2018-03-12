import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => <p {...props} className="uikit-text"/>

Text.displayName = 'MediaButton.Text';
Text.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
}

export default Text;