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
      <React.Fragment key={i + Math.random()* 33 }>
      <tr key={i} className="space-row">
        {Array(cells).fill(0).map((c, index) => <td key={index} />)}
      </tr>
      <tr key={i + Math.random() * 50 } className="content-row">{Array(cells).fill(0).map((c, index) => <td key={index}><div className="bg-content" /></td>)}</tr>
      </React.Fragment>
    ));
  }
  render() {
    return (
      <table className="checklist-table">
       <tbody>
         {this.renderRow()}
         {/* <tr className="space-row">
          <td />
          <td />
          <td />
          <td />
          <td />
         </tr>
         <tr className="content-row">
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
         </tr>
         <tr className="space-row">
          <td />
          <td />
          <td />
          <td />
          <td />
         </tr>
         <tr className="content-row">
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
         </tr>
         <tr className="space-row">
          <td />
          <td />
          <td />
          <td />
          <td />
         </tr>
         <tr className="content-row">
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
         </tr>
         <tr className="space-row">
          <td />
          <td />
          <td />
          <td />
          <td />
         </tr>
         <tr className="content-row">
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
         </tr>
         <tr className="space-row">
          <td />
          <td />
          <td />
          <td />
          <td />
         </tr>
         <tr className="content-row">
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
         </tr>
         <tr className="space-row">
          <td />
          <td />
          <td />
          <td />
          <td />
         </tr>
         <tr className="content-row">
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
         </tr>
         <tr className="space-row">
          <td />
          <td />
          <td />
          <td />
          <td />
         </tr>
         <tr className="content-row">
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
          <td><div className="bg-content" /></td>
         </tr> */}
       </tbody>
      </table>
    );
  }
}
