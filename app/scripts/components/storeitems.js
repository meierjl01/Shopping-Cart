import React from 'react';
import store from '../store';
import StoreItem from './storeitem';
import Cart from './cart';


export default React.createClass ({
  render() {
    const allItems = store.storeItems.map((item, i, arr) => {
      return (
          <StoreItem key={item.name} data={item}/>
      );
    });
    return (
      <div>
        <ul>{allItems}</ul>
        <Cart />
      </div>
    );
  }
});
