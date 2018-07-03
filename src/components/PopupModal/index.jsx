import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import Button from '../../../src/components/Button';
import './style.less';

class PopupModal extends PureComponent {
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

PopupModal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  onClose: PropTypes.func,
  handleOk: PropTypes.func,
};

PopupModal.defaultProps = {
  visible: true,
  title: '',
  buttonTitle: '',
  footer: false,
  onClose: () => {},
  handleOk: () => {},
};

export default PopupModal;
