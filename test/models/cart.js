import { expect } from 'chai';
import Backbone from 'backbone';
import sinon from 'sinon';
import Cart from '../../app/scripts/models/cart';

describe ('cart model', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

it('should be a function (because it is a constructor)', () => {
  expect(Cart).to.be.a('function');
});

it('should create a backbone model', () => {
  expect(cart).to.be.an.instanceof(Backbone.Model);
});

it('should have a default total of 0', () => {
  expect(cart.get('total')).to.be.a('number');
  expect(cart.get('total')).to.equal(0);
});

it('should have a default items of []', () => {
  expect(cart.get('items')).to.be.an('array');
  expect(cart.get('items')).to.deep.equal([]);
});


//addItem function testing:
it('should have a addItem method', () => {
  expect(cart).to.have.property('addItem');
  expect(cart.addItem).to.be.a('function');
});

it('should add item to the items array', () => {
  cart.addItem({name: 'Jennifer', age: 29});
  expect(cart.get('items')).to.deep.equal([{name: 'Jennifer', age:29}]);
});

it('should fire the change event when addItem is called', () => {
  let spy = sinon.spy();
  cart.on('change', spy);
  cart.addItem('Jennifer');
  expect(spy.callCount).to.equal(2);
});


//removeItem function testing:
it('should have a removeItem method', () => {
  expect(cart).to.have.property('removeItem');
  expect(cart.removeItem).to.be.a('function');
});

it('should fire the change event when removeItem is called', () => {
  let spy = sinon.spy();
  cart.addItem('Jennifer');
  cart.on('change', spy);
  cart.removeItem(0);
  expect(spy.callCount).to.equal(2);
});



//total function testing:
it('should have a total method', () => {
  expect(cart).to.have.property('total');
  expect(cart.total).to.be.a('function');
});




//look at how to spy on existing items

});
