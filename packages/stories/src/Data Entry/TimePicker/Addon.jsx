import React, { Component } from 'react';
import { TimePicker, Button, Row, Col } from 'antd';
import moment from 'moment';
import Example from '../../utils/Example';

class Addon extends Component {
  state = { open: false };

  render() { 
    return (
      <Example title="Addon">

        <Row>
          <Col sm={16} lg={7}>
            <TimePicker
              style={{width: '100%'}}
              open={this.state.open}
              onOpenChange={this.handleOpenChange}
              addon={() => (
                <Button size="small" type="primary" onClick={this.handleClose}>
                  Ok
                </Button>
              )}
            />
          </Col>
        </Row>
        </Example>
    );
  }

  handleOpenChange = (open) => {
    this.setState({ open });
  }

  handleClose = () => this.setState({ open: false })
}
 
export default Addon;
