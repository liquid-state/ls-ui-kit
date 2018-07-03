import React, { PureComponent } from 'react';
import { Modal, Button, Icon as AntIcon } from 'antd';
import './style.less';

type Props = {
  visible: boolean,
  title?: string,
  buttonTitle?: string,
  icon?: string,
  children?: Node,
  footer?: boolean,
  onClose: () => {},
  handleOk?: () => {},
}

class AlertModal extends PureComponent <Props, *> {
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
            <Button className="modal-button-alert-mobile" type="primary" onClick={handleOk}>
              {buttonTitle}
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AlertModal;
