import React, { Component } from 'react';
import { Form, Input, Icon, Button, Row, Col } from 'antd';

const FormItem = Form.Item;
let uuid = 0;

class DynamicFormItem extends Component {
  state = {}
  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };

    getFieldDecorator('keys', { initialValue: [] });

    const keys = getFieldValue('keys');

    const formItems = keys.map((k, index) => {
      return (
        <Row>
          <Col md={12} lg={6}>
            <FormItem
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
              label={index === 0 ? 'Passengers' : ''}
              required={false}
              key={k}
            >
              {getFieldDecorator(`names[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "Please input passenger's name or delete this field.",
                }],
              })(
                <Input placeholder="passenger name" style={{ width: '90%', marginRight: 8 }} />
              )}
              {keys.length > 1 ? (
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  disabled={keys.length === 1}
                  onClick={() => this.remove(k)}
                />
              ) : null}
            </FormItem>
          </Col>
        </Row>
      );
    });

    return (
      <section className="example">
        <h3 className="ex-title">Dynamic Form Item</h3>
        <Form onSubmit={this.handleSubmit}>
          {formItems}
          <FormItem {...formItemLayoutWithOutLabel} className="fw">
            <Button type="dashed" onClick={this.add} className="fw">
              <Icon type="plus" /> Add field
            </Button>
          </FormItem>

          <FormItem {...formItemLayoutWithOutLabel}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </section>
    );
  }

  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
}

DynamicFormItem = Form.create()(DynamicFormItem);
 
export default DynamicFormItem;