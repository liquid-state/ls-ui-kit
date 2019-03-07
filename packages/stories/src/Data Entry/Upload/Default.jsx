import React, { Component } from 'react';
import { Upload, Button, Icon, Row, Col } from 'antd';
import Example from '../../utils/Example';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
};

class Default extends Component {
  render() { 
    return (
      <Example title="Default Files">
        <Row>
          <Col sm={16} lg={7}>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Upload
              </Button>
            </Upload>
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Default;
