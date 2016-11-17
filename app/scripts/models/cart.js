import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem(item) {
    let newItems = this.get('items').concat(item);
    this.set({'items': newItems, 'total': this.total(newItems)});
  },
  removeItem(index) {
    let itemRemove = this.get('items').filter((item, i, arr) =>{
      if (index !== i) {
        return true
      }
    });
    // console.log(itemRemove)
    this.set({'items': itemRemove, 'total': this.total(itemRemove)});
  },
  total(items) {
    let total = 0;
    items.forEach((item) => {
      console.log(item);
      total += item.price;
    });
    return total;
  }
});
