import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import cn from 'classnames';

const { Group } = Radio;

const RadioGroup = (props) => {
  const {
    mobile,
    className,
    children,
    ...other
  } = props;

  return (
    <Group className={cn('ls-ui-kit', className, { mobile })} {...other}>
      {
        children
      }
    </Group>
  );
};

RadioGroup.propTypes = {
  mobile: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

RadioGroup.defaultProps = {
  mobile: false,
  children: null,
  className: '',
};

export default RadioGroup;
