import React from 'react';
import PropTypes from 'prop-types';

const Text = props => <p {...props} className="uikit-text" />;

Text.displayName = 'MediaButton.Text';

Text.propTypes = {
  children: PropTypes.node,
};

Text.defaultProps = {
  children: null,
};

export default Text;
