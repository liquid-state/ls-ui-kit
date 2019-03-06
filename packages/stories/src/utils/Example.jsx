import React from 'react';
import PropTypes from 'prop-types';

const toId = title => 'example-' + title.toLowerCase().replace(' ', '-');

const Example = ({ children, title }) => (
  <div id={toId(title)} className="example-wrap">
    <h3 className="title">{title}</h3>
    <section className="example">
      { children }
    </section>
  </div>
)

Example.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Example
