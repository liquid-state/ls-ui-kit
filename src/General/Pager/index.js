import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Steps } from 'antd';

import './styles.less';

export default class Pager extends React.Component {
  static Step = Steps.Step;

  static propTypes = {
    steps: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    hideLeftArrow: PropTypes.bool,
    hideRightArrow: PropTypes.bool,
  }

  static defaultProps = {
    hideLeftArrow: false,
    hideRightArrow: false,
  }

  steps() {
    return new Array(this.props.steps)
      .fill(null)
      // eslint-disable-next-line react/no-array-index-key
      .map((v, index) => <Steps.Step key={index} />);
  }

  render() {
    const {
      current,
      hideLeftArrow,
      hideRightArrow,
    } = this.props;

    return (
      <div className="ls-ui-kit pager">
        <Icon type="left" className={hideLeftArrow && 'hidden'} />
        <Steps progressDot current={current}>
          {this.steps()}
        </Steps>
        <Icon type="right" className={hideRightArrow && 'hidden'} />
      </div>
    );
  }
}
