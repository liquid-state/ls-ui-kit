import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';
import Example from '../../utils/Example';

const Nav = Mention.Nav;

const webFrameworks = [
  { name: 'React', type: 'JavaScript' },
  { name: 'Angular', type: 'JavaScript' },
  { name: 'Laravel', type: 'PHP', disabled: true },
  { name: 'Flask', type: 'Python' },
  { name: 'Django', type: 'Python' },
];

class CustomizeSuggestion extends Component {
  state = {
    suggestions: []
  }

  render() {
    const { suggestions } = this.state;

    return (
      <Example title="Customize Suggestion">

        <Row>
          <Col sm={16} lg={7}>
            <Mention
              placeholder="@someone"
              style={{ width: '100%' }}
              suggestions={suggestions}
              onSearchChange={this.onSearchChange}
              notFoundContent="Results not found"
            />
          </Col>
        </Row>
      </Example>
    );
  }

  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item =>
      item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
      >
        <span>{suggestion.name} - {suggestion.type}</span>
      </Nav>
    ));
    this.setState({ suggestions });
  }
}
 
export default CustomizeSuggestion;
