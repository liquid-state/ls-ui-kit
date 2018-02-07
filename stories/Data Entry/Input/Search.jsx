import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

class SearchBox extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Search</h3>
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
      </section>
    );
  }
}
 
export default SearchBox;