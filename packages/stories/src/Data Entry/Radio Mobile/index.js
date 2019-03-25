import React, { Component, Fragment } from 'react';
import { Radio } from '@liquid-state/ui-kit';
import Example from '../../utils/Example';

const { Group } = Radio;

class RadioPage extends Component {
  state = {
    value: 1,
  };

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    return (
      <Fragment>
        <h1 className="title">Radio</h1>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>Used to select a single state in multiple options.</li>
          <li>
            The difference between Select is that Radio is visible to user
            and can facilitate the comparison of choice. So, when you want
            to use Radio, option should not be too much.
          </li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Example title="Desktop">
          <Radio>Desktop</Radio>
        </Example>

        <Example title="Mobile">
          <Radio mobile>Mobile</Radio>
        </Example>

        <Example title="Group">
          <Group value={this.state.value} onChange={this.handleChange}>
            <Radio value={1} mobile>A</Radio>
            <Radio value={2} mobile>B</Radio>
            <Radio value={3} mobile>C</Radio>
            <Radio value={4} mobile>D</Radio>
          </Group>
        </Example>

      </Fragment>
    );
  }
}

export default RadioPage;
