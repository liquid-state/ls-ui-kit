import React, { Component } from 'react';
import { Calendar, Card } from 'antd';
import Example from '../../utils/Example';

class CardPage extends Component {
  render() {
    return (
      <Example title="Card">
        <Card className="calendar" size="small" style={{width: 320}}>
          <Calendar fullscreen={false} />
        </Card>
      </Example>
    );
  }
}

export default CardPage;
