import React, { Component } from 'react';
import { Table } from 'antd';
import Example from '../../utils/Example';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  }, {
    title: 'Email',
    dataIndex: 'email',
  }
];

const data = [
  {gender: "male", name: {title: "mr", first: "michael", last: "andrews"}, email: "michael.andrews@example.com", registered: "2003-02-11 07:25:13"},
  {gender: "female", name: {title: "mrs", first: "leah", last: "graves"}, email: "leah.graves@example.com", registered: "2003-12-11 07:25:13"},
  {gender: "male", name: {title: "mr", first: "robert", last: "schütz"}, email: "robert.schütz@example.com", registered: "2004-02-11 07:25:13"},
  {gender: "male", name: {title: "mr", first: "hauke", last: "hoffmann"}, email: "hauke.hoffmann@example.com", registered: "2003-02-21 07:25:13"},
  {gender: "female", name: {title: "mrs", first: "hannah", last: "cox"}, email: "hannah.cox@example.com", registered: "2003-02-11 17:25:13"},
  {gender: "male", name: {title: "mr", first: "freddie", last: "hunt"}, email: "freddie.hunt@example.com", registered: "2003-02-11 02:25:13"},
  {gender: "female", name: {title: "mrs", first: "silje", last: "pedersen"}, email: "silje.pedersen@example.com", registered: "2003-02-11 07:23:13"},
  {gender: "male", name: {title: "mr", first: "ali", last: "tokatlıoğlu"}, email: "ali.tokatlıoğlu@example.com", registered: "2003-02-11 07:15:13"},
  {gender: "male", name: {title: "mr", first: "oliver", last: "kowalski"}, email: "oliver.kowalski@example.com", registered: "2003-02-11 07:25:53"},
  {gender: "male", name: {title: "mr", first: "rémy", last: "bonnet"}, email: "rémy.bonnet@example.com", registered: "2013-02-11 07:25:13"}
];

class Ajax extends Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  render() { 
    return (
      <Example title="Ajax">

        <Table columns={columns}
          rowKey={record => record.registered}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </Example>
    );
  }

  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch = (params = {}) => {
    this.setState({ loading: true }, () => setTimeout(() => this.addData(), 1000));
  }

  addData() {
    this.state.data.push(...data);
    this.setState({
      loading: false,
      data: [...this.state.data]
    });
  }
}
 
export default Ajax;
