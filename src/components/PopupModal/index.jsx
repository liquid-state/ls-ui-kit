import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../../src/components/Button';

class PopupModal extends PureComponent {
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
      onClose,
      handleOk,
      children,
      buttonTitle,
    } = this.props;

    return (
      <Modal
        visible={visible}
        footer={footer}
        onCancel={onClose}
        className={this.getClass('popup-modal')}
      >
        <h2 className="modal-header">
          {title}
        </h2>
        <div className="modal-body">{children}</div>
        <div className="modal-controls">
          <Button type="primary" onClick={handleOk} stretched>
            {buttonTitle}
          </Button>
        </div>
      </Modal>
    );
  }
}

PopupModal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  onClose: PropTypes.func,
  handleOk: PropTypes.func,
  className: PropTypes.string,
};

PopupModal.defaultProps = {
  visible: true,
  title: '',
  buttonTitle: '',
  footer: null,
  onClose: () => {},
  handleOk: () => {},
  className: '',
};

export default PopupModal;
