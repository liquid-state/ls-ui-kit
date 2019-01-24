import React, { Component } from 'react';
import { Calendar, Card } from 'antd';

class CardPage extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Card</h3>
        <Card className="calendar" size="small" style={{width: 320}}>
          <Calendar fullscreen={false} />
        </Card>
      </section>
    );
  }
}

export default CardPage;
