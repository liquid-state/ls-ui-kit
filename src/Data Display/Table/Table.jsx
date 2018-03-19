import React, { Component } from 'react';
import { Table } from 'antd';

class TableComponent extends Component {
  render() {
    const { data, columns } = this.props;
    return (
        <Table className="ls-ui-kit rows header table" dataSource={data} columns={columns} />
    );
  }

  componentDidMount() {
    const elements = document.querySelectorAll('.ant-table-wrapper.ls-ui-kit.table .ant-table-row-level-0');

    this.props.data.forEach((element, i) => {
      if(element.styleType !== 'warning') return;
      elements[i].classList.add('warning');
    });
  }
}
 
export default TableComponent;
