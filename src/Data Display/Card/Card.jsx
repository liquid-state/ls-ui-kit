import React, { Component } from 'react';
import { Card, Icon } from 'antd';

import './style.less';

const { Meta } = Card;

class CardComponent extends Component {

  state = {
    Meta: this.props.children,
    animation: false
  };  

  render() {
    const { className, ...props } = this.props;
    return (
      <Card
        onClick={() => this.startAnimation()}
        hoverable
        className={`ls-ui-kit ${ className ? className : '' }`}
        cover={
          this.props.image ? 
            <img
              className={
                this.state.animation ?
                  'animation' : ''
              }
              alt="example"
              src={this.props.image}
            />
            :
            this.props.icon ?
              <div className="icon-card-wrapper">
                <div className={this.state.animation ? 'icon-card animation' : 'icon-card'}>
                  <Icon type={this.props.icon} />
                </div>
              </div> : null
        }
        {...props}
      >
        {
          this.props.children
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