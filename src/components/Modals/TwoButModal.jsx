import React, { PureComponent } from 'react';
import { Modal, Icon as AntIcon, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.less';
import Button from '../../components/Button';

export class TwoButModal extends PureComponent {
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
      okText,
      cancelText,
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
        <Row gutter={16} className="modal-controls">
          <Col span={12}>
            <Button onClick={onCancel} stretched>
              {cancelText}
            </Button>
          </Col>
          <Col span={12}>
            <Button type="primary" onClick={onOk} stretched>
              {okText}
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
  okText: PropTypes.string,
  icon: PropTypes.string,
  cancelText: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  className: PropTypes.string,
};

TwoButModal.defaultProps = {
  visible: true,
  title: '',
  okText: '',
  cancelText: '',
  icon: '',
  footer: null,
  onCancel: () => {},
  onOk: () => {},
  className: '',
};

export default TwoButModal;
