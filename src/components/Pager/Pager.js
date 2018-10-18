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
    textLeftArrow: PropTypes.oneOf([PropTypes.string, false]),
    textRightArrow: PropTypes.oneOf([PropTypes.string, false]),
    onChange: PropTypes.func,
    unlockChange: PropTypes.bool,
  }

  static defaultProps = {
    hideLeftArrow: false,
    hideRightArrow: false,
    textLeftArrow: false,
    textRightArrow: false,
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
      textRightArrow,
      textLeftArrow,
    } = this.props;

    return (
      <div className="ls-ui-kit pager">
        { textLeftArrow === false
          ? <Icon type="left" className={hideLeftArrow && 'hidden'} onClick={this.onPrevious} />
          // eslint-disable-next-line
          : <a role="link" onClick={this.onNext}>{textLeftArrow}</a> }
        <Steps progressDot current={current}>
          {this.steps()}
        </Steps>
        { textRightArrow === false
          ? <Icon type="right" className={hideRightArrow && 'hidden'} onClick={this.onNext} />
          // eslint-disable-next-line
          : <a role="link" onClick={this.onNext}>{textRightArrow}</a> }
      </div>
    );
  }
}
