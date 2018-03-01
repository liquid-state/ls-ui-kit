import React, { Component } from 'react';
import { Card, Icon } from 'antd';

import './style.less';

const { Meta } = Card;

class CardComponent extends Component {
  state = {
    animation: false
  };

  render() {
    const { className } = this.props;
    return (
      <Card
        onClick={() => this.startAnimation()}
        hoverable
        className={`mobile ${ className ? className : '' }`}
        cover={
          this.props.image ? 

            <img
              className={
                this.state.animation ?
                  'animation' : ''
              }
              alt="example" src={this.props.image}
            />

            :

            this.props.icon ?
              <div className="icon-card-wrapper">
                <div className={this.state.animation ? 'icon-card animation' : 'icon-card'}>
                  <Icon type={this.props.icon} />
                </div>
              </div> : null
        }
      >
        {
          this.props.text ?
            <Meta
              title={this.props.text}
            /> : null
        }
      </Card>
    );
  }

  startAnimation = () => {
    if(this.state.animation) return;
    this.setState(
      { animation: true },
      () => setTimeout( () => this.setState({ animation: false }), 1000 )
    );
  }
}

export default CardComponent;