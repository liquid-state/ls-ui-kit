import React, { PureComponent } from 'react';
import { Modal, Button, Icon as AntIcon } from 'antd';
import './style.less';

type Props = {
  visible: boolean,
  title?: string,
  buttonTitle?: string,
  buttonTitleDefault?: string,
  icon?: string,
  children?: Node,
  footer?: boolean,
  onClose: () => {},
  handleOk?: () => {},
  handleCancel?: () => {},
}

class TwoButModal extends PureComponent <Props, *> {
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
            <Button className="modal-button button-default" onClick={handleCancel}>
              {buttonTitleDefault}
            </Button>
            <Button className="modal-button" type="primary" onClick={handleOk}>
              {buttonTitle}
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default TwoButModal;

