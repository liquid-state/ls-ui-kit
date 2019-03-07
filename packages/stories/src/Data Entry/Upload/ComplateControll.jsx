import React, { Component } from 'react';
import { Upload, Button, Icon, Row, Col } from 'antd';
import Example from '../../utils/Example';

class CompleteControl extends Component {
  state = {
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    }],
  };

  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
    };

    return (
      <Example title="Complete control over file list">
        <Row>
          <Col sm={16} lg={7}>
            <Upload {...props} fileList={this.state.fileList}>
              <Button>
                <Icon type="upload" /> upload
              </Button>
            </Upload>
          </Col>
        </Row>
      </Example>
    );
  }

  handleChange = (info) => {
    let fileList = info.fileList;

    // 1. Limit the number of uploaded files
    //    Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return true;
    });

    this.setState({ fileList });
  }
}
 
export default CompleteControl;
