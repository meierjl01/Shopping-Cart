import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem(item) {
    let newItems = this.get('items').concat(item);
    this.set('items', newItems);
    this.total();
  },
  removeItem(index) {
    let itemRemove = this.get('items').filter((item, i, arr) =>{
      if (index !== i) {
        return true
      }
    });
    // console.log(itemRemove)
    this.set('items', itemRemove);
    this.total();
  },
  total() {
    let total = 0;
    this.get('items').forEach((item) => {
      console.log(item);
      total += item.price;
    });
    this.set({total});
  }
});
