import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

class Icon extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="ex-title">Icon</h3>
        
        <div>
          <Button className="mb20 mr20" type="primary" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="mb20 mr20" type="primary" icon="search" onClick={action('Search')}>Search</Button>
          <Button className="mb20 mr20" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="mb20 mr20" icon="search" onClick={action('Search')}>Search</Button>
          <Button className="mb20 mr20" type="dashed" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="mb20" type="dashed" icon="search" onClick={action('Search')}>Search</Button>
        </div>
      </Fragment>
    );
  }
}
 
export default Icon;