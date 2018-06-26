import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

class Types extends Component {

  render() {
    return (
      <Fragment>
        <h3 className="ex-title">Type</h3>
        <Button className="mr20 mb20" type="primary" onClick={action('Primary Button Clicked')}>Primary</Button>
        <Button className="mr20 mb20" onClick={action('Default Button Clicked')}>Default</Button>
        <Button className="mr20 mb20" type="dashed" onClick={action('Dashed Button Clicked')}>Dashed</Button>
        <Button className="m20" type="danger" onClick={action('Danger Button Clicked')}>Danger</Button>
      </Fragment>
    );
  }
} 
 
export default Types;