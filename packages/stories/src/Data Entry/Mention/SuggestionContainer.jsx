import React, { Component } from 'react';
import { Mention, Popover, Button, Row, Col } from 'antd';

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
      <section className="example">
        <h3 className="ex-title">Suggestion Container</h3>

        <Row>
          <Col sm={16} lg={7}>
          <Popover trigger="click" content={mention} title="Title" ref={popover => this.popover = popover}>
            <Button type="primary">Click Me</Button>
          </Popover>
          </Col>
        </Row>
      </section>
    );
  }

  getSuggestionContainer = () => {
    return this.popover.getPopupDomNode();
  }
}
 
export default SuggestionContainer;
