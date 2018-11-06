import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Steps } from 'antd';

const onEnter = cb => e => (e.key === 'Enter' ? cb(e) : false);

export default class Pager extends React.Component {
  static displayName = 'Pager';

  static propTypes = {
    steps: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    hideLeftArrow: PropTypes.bool,
    hideRightArrow: PropTypes.bool,
    previous: PropTypes.node,
    next: PropTypes.node,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    hideLeftArrow: false,
    hideRightArrow: false,
    previous: false,
    next: false,
    onChange: () => { },
    onClick: e => e,
  }

  onPrevious = () => {
    const { current, onChange, onClick } = this.props;
    onClick(current - 1);
    if (current === 0) { return; }
    onChange(current - 1);
  }

  onNext = () => {
    const {
      current,
      steps,
      onChange,
      onClick,
    } = this.props;
    onClick(current + 1);
    if (current === steps - 1) { return; }
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
      previous,
      next,
    } = this.props;

    return (
      <div className="ls-ui-kit pager">
        <div tabIndex={0} role="button" onClick={this.onPrevious} onKeyPress={onEnter(this.onPrevious)}>
          { previous || <Icon type="left" className={hideLeftArrow && 'hidden'} /> }
        </div>
        <Steps progressDot current={current}>
          {this.steps()}
        </Steps>
        <div tabIndex={0} role="button" onClick={this.onNext} onKeyPress={onEnter(this.onNext)}>
          { next || <Icon type="right" className={hideRightArrow && 'hidden'} /> }
        </div>
      </div>
    );
  }
}
