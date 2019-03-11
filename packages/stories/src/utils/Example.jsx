import React from 'react';
import PropTypes from 'prop-types';

const toId = title => 'example-' + title.toLowerCase().replace(' ', '-');

const Example = ({ children, title, className }) => (
  <div id={toId(title)} className={`example-wrap ${className}`}>
    <h3 className="title">{title}</h3>
    <section className="example">
      { children }
    </section>
  </div>
)

Example.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Example.defaultProps = {
  className: '',
}

export default Example
