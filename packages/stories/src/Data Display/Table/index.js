import React, { Component, Fragment } from 'react';
import './style.css';

import Basic from './Basic';
import Select from './Select';
import JSX from './JSX';
import Selection from './Selection';
import CustomSelection from './CustomSelection';
import Reset from './Reset';
import FilterAndSorter from './FilterAndSorter';
import CustomizedFilter from './CustomizedFilter';
import Ajax from './Ajax';
import Size from './Size';
import Elements from './Elements';
import ExpandableRow from './ExpandableRow';
import Span from './Span';
import TreeData from './TreeData';
import FixedHeader from './FixedHeader';
import FixedColumns from './FixedColumns';
import FixedColumnsAndHeader from './FixedColumnsAndHeader';
import GroupingTable from './GroupingTable';
import EditableRows from './EditableRows';
import NestedTables from './NestedTables';
import DynamicSettings from './DynamicSettings';
import RoundedTabel from './Rounded';

class TablePage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Table</h1>

        <p className="text">
          A table displays rows of data.
        </p>

        <h2 className="title">When to use</h2>

        <ul>
          <li>To display a collection of structured data.</li>
          <li>To sort, search, paginate, filter data.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Select />
        <JSX />
        <Selection />
        <CustomSelection />
        <Reset />
        <FilterAndSorter />
        <CustomizedFilter />
        <Ajax />
        <Size />
        <Elements />
        <ExpandableRow />
        <Span />
        <TreeData />
        <FixedHeader />
        <FixedColumns />
        <FixedColumnsAndHeader />
        <GroupingTable />
        <EditableRows />
        <NestedTables />
        <DynamicSettings />
        <RoundedTabel />


      </Fragment>
    );
  }
}

export default TablePage;
