import React, { Component } from 'react';
import { Card, Icon } from 'antd';

import './style.less';

const { Meta } = Card;

class CardComponent extends Component {

  // Reexport Meta from this component, so that users who want to use 
  // Meta do not have to import the base component from antd.
  static Meta = Meta;

  state = {
    animation: false
  };

  renderImage = (image, alt) => {
    return <img
      className={this.state.animation ? 'animation' : ''}
      alt={alt}
      src={image}
    />
  }

  renderIcon = (icon) => {
    return <div className="icon-card-wrapper">
      <div className={this.state.animation ? 'icon-card animation' : 'icon-card'}>
        <Icon type={icon} />
      </div>
    </div>
  }

  startAnimation = () => {
    if (this.state.animation) return;
    this.setState(
      { animation: true },
      () => setTimeout(() => this.setState({ animation: false }), 1000)
    );
  }

  render() {
    const { className, icon, image, alt, text, children, ...props } = this.props;
    return (
      <Card
        onClick={() => this.startAnimation()}
        hoverable
        className={`ls-ui-kit ${className ? className : ''}`}
        cover={
          image ?
            this.renderImage(image, alt)
            : icon ? this.renderIcon(icon) : null
        }
        {...props}
      >
        {
          children
            ? children
            : <Meta title={text} />
        }
      </Card>
    );
  }
}

export default CardComponent;