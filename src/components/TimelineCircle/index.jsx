import React, { PureComponent } from 'react';
import './style.less';

type Props = {
  text: string,
  type?: string,
  noline?: boolean,
  children: Node,
}

class TimelineCircle extends PureComponent <Props, *> {
  render() {
    const {
      text,
      type,
      noline,
      children,
    } = this.props;

    let typeCircle = null;

    switch (type) {
      case 'heading':
        typeCircle = 'heading';
        break;
      case 'completed':
        typeCircle = 'completed';
        break;
      case 'process':
        typeCircle = 'process';
        break;
      case 'waiting':
        typeCircle = 'waiting';
        break;
      default:
        break;
    }

    return (
      <div className="circle-list">
        <div className="circle-container">
          <div className={`circle circle-${typeCircle}`}>{children}</div>
          <div className="circle-title">{text}</div>
        </div>
        <div className="line-container">
          {noline ? null : <div className="line" />}
        </div>
      </div>
    );
  }
}

export default TimelineCircle;
