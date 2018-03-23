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
    onChange: PropTypes.func,
  }

  static defaultProps = {
    defaultValue: 1,
    hideLeftArrow: false,
    hideRightArrow: false,
    onChange: () => { },
  }

  onPrevious = () => {
    if (this.props.current === 0) {
      return;
    }
    this.props.onChange(this.props.current - 1);
  }

  onNext = () => {
    if (this.props.current === this.props.steps - 1) {
      return;
    }
    this.props.onChange(this.props.current + 1);
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
    } = this.props;

    return (
      <div className="ls-ui-kit pager">
        <Icon type="left" className={hideLeftArrow && 'hidden'} onClick={this.onPrevious} />
        <Steps progressDot current={current || defaultValue}>
          {this.steps()}
        </Steps>
        <Icon type="right" className={hideRightArrow && 'hidden'} onClick={this.onNext} />
      </div>
    );
  }
}
