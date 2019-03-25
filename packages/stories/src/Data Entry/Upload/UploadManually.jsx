import React, { Component } from 'react';
import { Upload, Button, Icon, message, Row, Col } from 'antd';
import Example from '../../utils/Example';

class UploadManually extends Component {
  state = {
    fileList: [],
    uploading: false
  };

  render() {
    const { uploading } = this.state;

    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },

      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },

      fileList: this.state.fileList,
    };


    return (
      <Example title="Upload manually">
        <Row>
          <Col sm={16} lg={7}>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Select File
              </Button>
            </Upload>
            <Button
              className="upload-demo-start"
              style={{marginTop: 20}}
              type="primary"
              onClick={this.handleUpload}
              disabled={this.state.fileList.length === 0}
              loading={uploading}
            >
              {uploading ? 'Uploading' : 'Start Upload' }
            </Button>
          </Col>
        </Row>
      </Example>
    );
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    setTimeout(() => this.setState({ uploading: false, fileList: [] }, () => message.success('upload successfully.')), 1000);
  }
}
 
export default UploadManually;
