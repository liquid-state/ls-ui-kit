import React, { PureComponent } from 'react';
import { Modal, Icon as AntIcon } from 'antd';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import './style.less';


class TwoButModal extends PureComponent {
  render() {
    const {
      visible,
      title,
      icon,
      footer,
      onClose,
      handleOk,
      handleCancel,
      children,
      buttonTitle,
      buttonTitleDefault,
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
            <h2 className="el-center el-row modal-title">
              <AntIcon type={icon} />
              {title}
            </h2>
            <span className="el-text-center">{children}</span>
          </div>
          <div className="el-center">
            <Button className="button-default" onClick={handleCancel} stretched>
              {buttonTitleDefault}
            </Button>
            <Button type="primary" onClick={handleOk} stretched>
              {buttonTitle}
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

TwoButModal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
  icon: PropTypes.string,
  buttonTitleDefault: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  onClose: PropTypes.func,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
};

TwoButModal.defaultProps = {
  visible: true,
  title: '',
  buttonTitle: '',
  buttonTitleDefault: '',
  icon: '',
  footer: false,
  onClose: () => {},
  handleOk: () => {},
  handleCancel: () => {},
};

export default TwoButModal;

