import React, { PureComponent } from 'react';
import { Modal, Icon as AntIcon, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../components/Button';

class TwoButModal extends PureComponent {
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
      handleCancel,
      children,
      buttonTitle,
      buttonTitleDefault,
    } = this.props;

    return (
      <Modal
        visible={visible}
        footer={footer}
        onCancel={onClose}
        className={this.getClass()}
      >
        <h2 className="modal-header">
          <AntIcon type={icon} />
          {title}
        </h2>
        <div className="modal-body">{children}</div>
        <Row gutter={16} className="modal-controls">
          <Col span={12}>
            <Button onClick={handleCancel} stretched>
              {buttonTitleDefault}
            </Button>
          </Col>
          <Col span={12}>
            <Button type="primary" onClick={handleOk} stretched>
              {buttonTitle}
            </Button>
          </Col>
        </Row>
      </Modal>
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
  className: PropTypes.string,
};

TwoButModal.defaultProps = {
  visible: true,
  title: '',
  buttonTitle: '',
  buttonTitleDefault: '',
  icon: '',
  footer: null,
  onClose: () => {},
  handleOk: () => {},
  handleCancel: () => {},
  className: '',
};

export default TwoButModal;
