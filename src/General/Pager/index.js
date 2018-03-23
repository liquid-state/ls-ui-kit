import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Steps } from 'antd';

import './styles.less';

export default class Pager extends React.Component {
  static Step = Steps.Step;

  static propTypes = {
    steps: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
  }

  steps() {
    return new Array(this.props.steps)
      .fill(null)
      // eslint-disable-next-line react/no-array-index-key
      .map((v, index) => <Steps.Step key={index} />);
  }

  render() {
    return (
      <div className="ls-ui-kit pager">
        <Icon type="left" />
        <Steps progressDot current={this.props.current}>
          {this.steps()}
        </Steps>
        <Icon type="right" />
      </div>
    );
  }
}
