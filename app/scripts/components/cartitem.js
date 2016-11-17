import React from 'react';

import store from '../store';

export default React.createClass({
  render() {
    return (
        <li>
        <div>{this.props.data.name}</div>
        <div> ${this.props.data.price}</div>
        <button onClick={this.handleRemove}>Remove From Cart</button>
        </li>
    )
  },
  handleRemove(e) {
    // console.log(this.props.location);
    store.cart.removeItem(this.props.location);
  }
});
