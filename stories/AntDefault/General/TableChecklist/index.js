import React from 'react';
import Table from '../../../../src/components/tableChecklist';

const TableChecklist = () => (
  <Table>
    {Array(7).fill(0).map((r, i) => (
      <React.Fragment key={`${i + (Math.random() * 33)}`}>
      <tr
        key={`${i + (Math.random() * 50)}_key `}
      >
        {Array(5).fill(0).map((c, index) => (
          <td key={`${index + (Math.random() * 15)}_key `}>
            <div />
          </td>
        ))}
      </tr>
      </React.Fragment>
    ))
    }
  </Table>
);

export default TableChecklist;
