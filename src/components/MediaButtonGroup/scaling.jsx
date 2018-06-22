import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import cn from 'classnames';

const ScalingMediaButtonGroup = ({
  children, className, isTripples, ...props
}) => {
  const spans = isTripples ? { xs: 12, md: 8 } : { xs: 12 };
  return (
    <div {...props} className={cn(className, 'scaling')}>
      <Row>
        {React.Children.map(children, (child, index) => (
          <Col {...spans} key={index}>{child}</Col>
        ))}
      </Row>
    </div>
  );
};

ScalingMediaButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  isTripples: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

ScalingMediaButtonGroup.defaultProps = {
  className: undefined,
};

ScalingMediaButtonGroup.displayName = 'ScalingMediaButtonGroup';

export default ScalingMediaButtonGroup;
