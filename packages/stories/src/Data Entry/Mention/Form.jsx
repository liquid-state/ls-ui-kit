import React, { Component } from 'react';
import { Mention, Row, Col, Form, Button } from 'antd';
import Example from '../../utils/Example';

const { toContentState, getMentions } = Mention;

const FormItem = Form.Item;

class WithForm extends Component {
  state = {
    initValue: toContentState('@afc163'),
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    return (
      <Example title="With Form">

        <Row>
          <Col sm={16} lg={7}>
            <Form layout="horizontal">
              <FormItem
                id="control-mention"
                label="Top coders"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
              >
                {getFieldDecorator('mention', {
                  rules: [
                    { validator: this.checkMention },
                  ],
                  initialValue: this.state.initValue,
                })(
                  <Mention
                    suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai']}
                    notFoundContent="Results not found"
                  />
                )}
              </FormItem>
              <FormItem wrapperCol={{ span: 14, offset: 6 }}>
                <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
                &nbsp;&nbsp;&nbsp;
                <Button onClick={this.handleReset}>Reset</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </Example>
    );
  }


  handleReset = (e) => {
    e.preventDefault();
    this.props.form.resetFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!', errors);
        return;
      }
    });
  }

  checkMention = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    const mentions = getMentions(getFieldValue('mention'));
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'));
    } else {
      callback();
    }
  }
}

WithForm = Form.create()(WithForm);

export default WithForm;
