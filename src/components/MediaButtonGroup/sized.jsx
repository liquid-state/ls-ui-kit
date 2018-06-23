import React from 'react';
import PropTypes from 'prop-types';

const buildRows = (children, isTripples) => {
  const rows = [];
  const divisor = isTripples ? 3 : 2;
  let current = [];
  React.Children.map(children, (child, index) => {
    if (index % divisor === 0) {
      current = [child];
      rows.push(current);
    } else {
      current.push(child);
    }
  });
  return rows;
};

class SizedMediaButtonGroup extends React.Component {
  state = {
    isLarge: matchMedia('(min-width: 768px)').matches,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  resizeHandler = () => {
    const isLarge = matchMedia('(min-width: 768px)').matches;
    this.setState({ isLarge });
  };

  render() {
    const {
      children,
      className,
      isTripples,
      ...props
    } = this.props;

    const rows = buildRows(children, isTripples && this.state.isLarge);
    return (
      <div {...props} className={className}>
        {rows.map((row, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="media-button-group-row" key={index}>
            {row}
          </div>
        ))}
      </div>
    );
  }
}

SizedMediaButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  isTripples: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

SizedMediaButtonGroup.defaultProps = {
  className: undefined,
};

SizedMediaButtonGroup.displayName = 'SizedMediaButtonGroup';

export default SizedMediaButtonGroup;
