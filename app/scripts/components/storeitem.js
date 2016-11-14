import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return (
      <li>
        <span id="item-name">{this.props.data.name}</span>
        <span id="item-price">{this.props.data.price}</span>
        <button onClick={this.handleClick}>Add To Cart</button>
      </li>
    )
  },
  handleClick(e) {
    e.preventDefault();
    store.cart.addItem(this.props.data);
  }
});
