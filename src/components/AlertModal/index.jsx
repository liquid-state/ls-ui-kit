import React, { PureComponent } from 'react';
import { Modal, Icon as AntIcon } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../../src/components/Button';

class AlertModal extends PureComponent {
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
      icon,
      footer,
      onCancel,
      onOk,
      children,
      buttonTitle,
    } = this.props;

    return (
      <Modal
        visible={visible}
        footer={footer}
        onCancel={onCancel}
        className={this.getClass()}
      >
        <h2 className="modal-header">
          <AntIcon type={icon} />
          {title}
        </h2>
        <div className="modal-body">{children}</div>
        <div className="modal-controls">
          <Button type="primary" onClick={onOk} stretched>
            {buttonTitle}
          </Button>
        </div>
      </Modal>
    );
  }
}

AlertModal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  className: PropTypes.string,
};

AlertModal.defaultProps = {
  visible: true,
  title: '',
  buttonTitle: '',
  icon: '',
  footer: null,
  onCancel: () => {},
  onOk: () => {},
  className: '',
};

export default AlertModal;
