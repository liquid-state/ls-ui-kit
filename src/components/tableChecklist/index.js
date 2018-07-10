import React from 'react';
import PropTypes from 'prop-types';
import './style.less';


const Table = ({ children }) => (
      <table className="ls-ui-kit rounded-table">
        {children}
      </table>
);

Table.propTypes = {
  children: PropTypes.node,
};
Table.defaultProps = {
  children: null,
};

export default Table;

