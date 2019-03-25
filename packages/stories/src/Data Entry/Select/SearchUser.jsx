import React, { Component } from 'react';
import { Select, Spin, Row, Col } from 'antd';
import Example from '../../utils/Example';
import debounce from 'lodash.debounce';


const Option = Select.Option;

class SearchUsers extends Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
    this.state = {
      data: [],
      value: [],
      fetching: false
    };
  }
  render() {
    const { fetching, data, value } = this.state;

    return (
      <Example title="Search and Select Users">

        <Row>
          <Col sm={16} lg={7}>
            <Select
              mode="multiple"
              labelInValue
              value={value}
              placeholder="Select users"
              notFoundContent={fetching ? <Spin size="small" /> : null}
              filterOption={false}
              onSearch={this.fetchUser}
              onChange={this.handleChange}
              style={{ width: '100%' }}
            >
              {data.map(d => <Option key={d.value}>{d.text}</Option>)}
            </Select>
          </Col>
        </Row>
      </Example>
    );
  }

  fetchUser = (value) => {
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) {
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
        console.log(data);
      });
  }

  handleChange = (value) => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  }
}
 
export default SearchUsers;

/* 
[
{text: "محمد نجاتی", value: "crazylion198"},
{text: "nelli kari", value: "greenladybug203"},
{text: "sofia olsen", value: "smallpeacock116"},
{text: "séléna gaillard", value: "beautifulduck515"},
{text: "villads andersen", value: "heavylion262"}

*/
