import React, { PureComponent } from 'react';
import { Modal, Icon as AntIcon } from 'antd';
import PropTypes from 'prop-types';
import Button from '../../../src/components/Button';
import './style.less';

class AlertModal extends PureComponent {
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
          iconType="question-circle-o"
        >
          <div className="el-center el-col">
            <h2 className="el-center el-row modal-title-alert-mobile">
              <AntIcon type={icon} />
              {title}
            </h2>
            <span className="el-text-center">{children}</span>
          </div>
          <div className="el-center">
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
};

AlertModal.defaultProps = {
  visible: true,
  title: '',
  buttonTitle: '',
  icon: '',
  footer: null,
  onClose: () => {},
  handleOk: () => {},
};

export default AlertModal;
