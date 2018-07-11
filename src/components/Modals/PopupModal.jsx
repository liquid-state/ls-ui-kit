import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.less';
import Button from '../Button';

export class PopupModal extends PureComponent {
  getClass(extra) {
    const {
      className,
    } = this.props;
    return cn('ls-ui-kit', 'modal', className, extra);
  }

  render() {
    const {
      visible,
      title,
      footer,
      onCancel,
      onOk,
      children,
      okText,
    } = this.props;

    return (
      <Modal
        visible={visible}
        footer={footer}
        onCancel={onCancel}
        className={this.getClass('popup-modal')}
      >
        <h2 className="modal-header">
          {title}
        </h2>
        <div className="modal-body">{children}</div>
        <div className="modal-controls">
          <Button type="primary" onClick={onOk} stretched>
            {okText}
          </Button>
        </div>
      </Modal>
    );
  }
}

PopupModal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  okText: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  className: PropTypes.string,
};

PopupModal.defaultProps = {
  visible: true,
  title: '',
  okText: '',
  footer: null,
  onCancel: () => {},
  onOk: () => {},
  className: '',
};

export default PopupModal;
