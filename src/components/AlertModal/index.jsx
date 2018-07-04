import React, { PureComponent } from 'react';
import { Modal, Icon as AntIcon } from 'antd';
import cn from 'classnames';
import PropTypes from 'prop-types';
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
      onClose,
      handleOk,
      children,
      buttonTitle,
    } = this.props;

    return (
      <div>
        <Modal
          visible={visible}
          footer={footer}
          onCancel={onClose}
          wrapClassName="modal-wrapper"
          iconClassName="anticon"
          className={this.getClass()}
        >
          <div>
            <h2 className="modal-header">
              <AntIcon type={icon} />
              {title}
            </h2>
            <div>{children}</div>
          </div>
          <div className="btn-margin-top">
            <Button type="primary" onClick={handleOk} stretched>
              {buttonTitle}
            </Button>
          </div>
        </Modal>
      </div>
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
  onClose: PropTypes.func,
  handleOk: PropTypes.func,
  className: PropTypes.string,
};

AlertModal.defaultProps = {
  visible: true,
  title: '',
  buttonTitle: '',
  icon: '',
  footer: null,
  onClose: () => {},
  handleOk: () => {},
  className: '',
};

export default AlertModal;
