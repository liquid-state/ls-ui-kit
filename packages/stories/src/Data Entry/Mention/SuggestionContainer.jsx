import React, { Component } from 'react';
import { Mention, Popover, Button, Row, Col } from 'antd';
import Example from '../../utils/Example';

const { toString, toContentState } = Mention;

class SuggestionContainer extends Component {
  render() {
    const mention = (
      <Mention
        style={{ width: '100%' }}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai']}
        getSuggestionContainer={this.getSuggestionContainer}
        notFoundContent="Results not found"
      />
    );

    return (
      <Example title="Suggestion Container">

        <Row>
          <Col sm={16} lg={7}>
          <Popover trigger="click" content={mention} title="Title" ref={popover => this.popover = popover}>
            <Button type="primary">Click Me</Button>
          </Popover>
          </Col>
        </Row>
      </Example>
    );
  }

  getSuggestionContainer = () => {
    return this.popover.getPopupDomNode();
  }
}
 
export default SuggestionContainer;
