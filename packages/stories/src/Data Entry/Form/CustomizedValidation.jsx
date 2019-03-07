import React, { Component } from 'react';
import { Form, Input, DatePicker, Row, Col, TimePicker, Select, Cascader, InputNumber } from 'antd';
import Example from '../../utils/Example';

const FormItem = Form.Item;

const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 19 },
  },
};

class CustomizedValidation extends Component {
  state = {}
  render() { 
    return (
      <Example title="Customized Validation">

        <Form>
          <Row>
            <FormItem
              {...formItemLayout}
              label="Fail"
              validateStatus="error"
              help="Should be combination of numbers & alphabets"
              >
              <Input placeholder="unavailable choice" id="error" />
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="Warning"
              validateStatus="warning"
              >
              <Input placeholder="Warning" id="warning" />
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="Validating"
              hasFeedback
              validateStatus="validating"
              help="The information is being validated..."
              >
              <Input placeholder="I'm the content is being validated" id="validating" />
            </FormItem>
          </Row>

          <Row>
            <FormItem
              {...formItemLayout}
              label="Success"
              hasFeedback
              validateStatus="success"
              >
              <Input placeholder="I'm the content" id="success" />
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="Warning"
              hasFeedback
              validateStatus="warning"
              >
              <Input placeholder="Warning" id="warning" />
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="Fail"
              hasFeedback
              validateStatus="error"
              help="Should be combination of numbers & alphabets"
              >
              <Input placeholder="unavailable choice" id="error" />
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="Success"
              hasFeedback
              validateStatus="success"
              >
              <DatePicker style={{ width: '100%' }} />
            </FormItem>
          </Row>

          <Row>
            <FormItem
              {...formItemLayout}
              label="Warning"
              hasFeedback
              validateStatus="warning"
              >
              <TimePicker style={{ width: '100%' }} />
            </FormItem>
          </Row>

          <Row>
            <FormItem
              {...formItemLayout}
              label="Error"
              hasFeedback
              validateStatus="error"
              >
              <Select defaultValue="1">
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
              </Select>
            </FormItem>
          </Row>

          <Row>
            <FormItem
              {...formItemLayout}
              label="Validating"
              hasFeedback
              validateStatus="validating"
              help="The information is being validated..."
              >
              <Cascader defaultValue={['1']} options={[]} />
            </FormItem>
          </Row>

          <Row>
            <FormItem
              label="inline"
              {...formItemLayout}
              >
              <Col span={11}>
                <FormItem validateStatus="error" help="Please select the correct date">
                  <DatePicker />
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                  -
                </span>
              </Col>
              <Col span={11}>
                <FormItem>
                  <DatePicker />
                </FormItem>
              </Col>
            </FormItem>
          </Row>

          <Row>
            <FormItem
              {...formItemLayout}
              label="Success"
              hasFeedback
              validateStatus="success"
              >
              <InputNumber style={{ width: '100%' }} />
            </FormItem>
          </Row>
        </Form>
      </Example>
    );
  }
}
 
export default CustomizedValidation;
