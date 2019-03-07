import React, { Component } from 'react';
import { Input } from 'antd';
import Example from '../../utils/Example';

const Search = Input.Search;

class SearchBox extends Component {
  render() { 
    return (
      <Example title="Search">
        <div>
          <Search
            className="mb20"
            style={{maxWidth: 300}}
            placeholder="input search text"
          />

          <br/><br/>
          
          <Search
            className="mb20"
            style={{maxWidth: 300}}
            placeholder="input search text"
            enterButton
          />

          <br /><br />
          
          <Search style={{maxWidth: 300}} className="fw" placeholder="input search text" enterButton="Search" size="large" />
        </div>
      </Example>
    );
  }
}
 
export default SearchBox;
