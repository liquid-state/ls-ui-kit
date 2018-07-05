import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default class Table extends Component {
  static propTypes = {
    rows: PropTypes.number,
    cells: PropTypes.number,
  }
  static defaultProps = {
    rows: null,
    cells: null,
  }
  renderRow = () => {
    const { rows, cells } = this.props;
    return Array(rows).fill(0).map((r, i) => (
      <React.Fragment key={i}>
        <tr className="space-row">
          {Array(cells).fill(0).map((c, index) => <td key={index} />)}
        </tr>
        <tr className="content-row">{Array(cells).fill(0).map((c, index) => <td key={index}><div className="bg-content" /></td>)}</tr>
      </React.Fragment>
    ));
  }
  render() {
    return (
      <table className="checklist-table">
       <tbody>
         {this.renderRow()}
       </tbody>
      </table>
    );
  }
}
