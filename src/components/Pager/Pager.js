import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Steps } from 'antd';

export default class Pager extends React.Component {
  static displayName = 'Pager';

  static propTypes = {
    steps: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    hideLeftArrow: PropTypes.bool,
    hideRightArrow: PropTypes.bool,
    TextLeft: PropTypes.oneOf([PropTypes.node, false]),
    TextRight: PropTypes.oneOf([PropTypes.node, false]),
    onChange: PropTypes.func,
    unlockChange: PropTypes.bool,
  }

  static defaultProps = {
    hideLeftArrow: false,
    hideRightArrow: false,
    TextLeft: false,
    TextRight: false,
    onChange: () => { },
    unlockChange: false,
  }

  onPrevious = () => {
    const { current, onChange, unlockChange } = this.props;
    if (!unlockChange && current === 0) { return; }
    onChange(current - 1);
  }

  onNext = () => {
    const {
      current,
      steps,
      onChange,
      unlockChange,
    } = this.props;
    if (!unlockChange && current === steps - 1) { return; }
    onChange(current + 1);
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
      TextRight,
      TextLeft,
    } = this.props;

    return (
      <div className="ls-ui-kit pager">
        { TextLeft === false
          ? <Icon type="left" className={hideLeftArrow && 'hidden'} onClick={this.onPrevious} />
          // eslint-disable-next-line
          : <TextLeft onClick={this.onPrevious} /> }
        <Steps progressDot current={current}>
          {this.steps()}
        </Steps>
        { TextRight === false
          ? <Icon type="right" className={hideRightArrow && 'hidden'} onClick={this.onNext} />
          // eslint-disable-next-line
        : <TextRight onClick={this.onNext} /> }
      </div>
    );
  }
}
