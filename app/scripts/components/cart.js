import React from 'react';
import store from '../store';
import CartItem from './cartitem';

export default React.createClass({
  getInitialState() {
    return {
      cart: store.cart.toJSON()
    };
  },
  componentDidMount() {
    store.cart.on('change update', () =>{
      // console.log('noticed a change');
      this.setState({
        cart: store.cart.toJSON()
      });
    });
  },
  render() {
    let cartItems = this.state.cart.items.map((item, i, arr) => {
        return <CartItem key={i} data={item} location={i}/>
      });
    let total = this.state.cart.total;
    console.log(total);
    // const allCartItems = this.state.cart.items.map((item, i, arr) => {
    //   return <CartItem key={item} data={item}/>
    // });
    return (
      <ul id="cart">
        <h2>Your Cart</h2>
        {cartItems}
        <h3>Total: ${total}</h3>
      </ul>
    )
  }
});
