import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import cn from 'classnames';

import './style.less';

const getSpans = isTripples => (isTripples ? { xs: 12, md: 8 } : { xs: 12 });

const MediaButtonGroup = ({ children, className, ...props }) => {
  const childCount = React.Children.count(children);
  // (1, 2, 4 are doubles, all others are tripples);
  const isTripples = childCount === 3 || childCount > 4;
  const spans = getSpans(isTripples);

  const cname = cn('ls-ui-kit media-button-group', className, { tripples: isTripples });
  return (
    <div {...props} className={cname}>
      <Row>
        {React.Children.map(children, (child, index) => (
          <Col {...spans} key={index}>{child}</Col>
        ))}
      </Row>
    </div>
  );
};

MediaButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MediaButtonGroup.defaultProps = {
  className: undefined,
};

MediaButtonGroup.displayName = 'MediaButtonGroup';

export default MediaButtonGroup;
