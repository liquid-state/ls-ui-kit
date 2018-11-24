import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

class ButtonDisabled extends Component {

  render() { 
    return (
      <Fragment>
        <h3 className="ex-title">Disabled</h3>

        <div>
          <Button className="mr20 mb20" type="primary" onClick={action('Primary Button Clicked')}>Primary</Button>
          <Button className="mr20 mb20" type="primary" disabled>Primary(disabled)</Button>
          <Button className="mr20 mb20" onClick={action('Default Button Clicked')}>Default</Button>
          <Button className="mr20 mb20" disabled>Default(disabled)</Button>
          <Button className="mr20 mb20" type="dashed" onClick={action('Dashed Button Clicked')}>Dashed</Button>
          <Button className="mr20 mb20" type="dashed" disabled>Dashed(disabled)</Button>
          <Button className="mr20 mb20" type="danger" onClick={action('Danger Button Clicked')}>Danger</Button>
          <Button className="mb20" type="danger" disabled>Danger(disabled)</Button>
        </div>
      </Fragment>
    );
  }
}
 
export default ButtonDisabled;