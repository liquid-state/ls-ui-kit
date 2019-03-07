import React, { Component } from 'react';
import { Pagination } from 'antd';
import Example from '../../utils/Example';

class TotalNumber extends Component {
  render() { 
    return (
      <Example title="Total Number">

        <div className="mb20">
          <Pagination
            total={85}
            showTotal={total => `Total ${total} items`}
            pageSize={20}
            defaultCurrent={1}
          />
        </div>

        <Pagination
          total={85}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          pageSize={20}
          defaultCurrent={1}
        />
      </Example>
    );
  }
}
 
export default TotalNumber;
