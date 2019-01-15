import React from 'react';
import { RoundedTable } from '@liquid-state/ui-kit';

const TableChecklist = () => (
  <RoundedTable>
    {Array(7).fill(0).map((r, i) => (
      <React.Fragment key={`${i + (Math.random() * 33)}`}>
      <tr
        key={`${i + (Math.random() * 50)}_key `}
      >
        {Array(5).fill(0).map((c, index) => (
          <td key={`${index + (Math.random() * 15)}_key `} />
        ))}
      </tr>
      </React.Fragment>
    ))
    }
  </RoundedTable>
);

export default TableChecklist;
