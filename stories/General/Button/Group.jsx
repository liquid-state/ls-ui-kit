import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Icon } from 'antd';

class Group extends Component {

  render() {
    const Group = Button.Group; 
    return (
      <Fragment>
        <h3 className="ex-title">Button Group</h3>

        <div>
          <span>
            <Group className="mb20 mr20">
              <Button onClick={action('Cancel')}>Cancel</Button>
              <Button onClick={action('OK')}>OK</Button>
            </Group>
          </span>
          <span>
            <Group className="mb20 mr20">
              <Button disabled>L</Button>
              <Button disabled>M</Button>
              <Button disabled>R</Button>
            </Group>
          </span>
          <span>
            <Group className="mb20">
              <Button onClick={action('L')}>L</Button>
              <Button onClick={action('M')}>M</Button>
              <Button onClick={action('R')}>R</Button>
            </Group>
          </span>

          <span>
            <Group className="mr20 mb20">
              <Button type="primary" onClick={action('Go Back')}>
                <Icon type="left" />Go back
              </Button>
              <Button type="primary" onClick={action('Go forward')}>
                Go forward<Icon type="right" />
              </Button>
            </Group>
          </span>
          <span>
            <Group>
              <Button type="primary" icon="cloud" onClick={action('Cloud')} />
              <Button type="primary" icon="cloud-download" onClick={action('Cloud-download')} />
            </Group>
          </span>
        </div>
      </Fragment>
    );
  }
}
 
export default Group;