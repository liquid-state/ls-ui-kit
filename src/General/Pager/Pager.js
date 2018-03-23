import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Steps } from 'antd';

export default class Pager extends React.Component {
  static displayName = 'Pager';

  static propTypes = {
    steps: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    defaultValue: PropTypes.number,
    hideLeftArrow: PropTypes.bool,
    hideRightArrow: PropTypes.bool,
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
  }

  static defaultProps = {
    defaultValue: 1,
    hideLeftArrow: false,
    hideRightArrow: false,
    onPrevious: () => { },
    onNext: () => { },
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
      defaultValue,
      hideLeftArrow,
      hideRightArrow,
      onPrevious,
      onNext,
    } = this.props;

    return (
      <div className="ls-ui-kit pager">
        <Icon type="left" className={hideLeftArrow && 'hidden'} onClick={onPrevious} />
        <Steps progressDot current={current || defaultValue}>
          {this.steps()}
        </Steps>
        <Icon type="right" className={hideRightArrow && 'hidden'} onClick={onNext} />
      </div>
    );
  }
}
