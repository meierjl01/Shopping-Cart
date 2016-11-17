import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react';

import Cart from '../../app/scripts/components/cart';
import CartItem from '../../app/scripts/components/cartitem';

describe ('cart component', () => {

  let cart;

  beforeEach( () => {
    cart = shallow(<Cart />);
  });

  it('should be a ul', () => {
    expect(cart.is('ul')).equal(true);
  });

  it('should contain an h2 and h3 as children', () => {
    expect(cart.children('h2')).to.have.length(1);
    expect(cart.children('h3')).to.have.length(1);
  });

  it('should have an object as it\'s state', () => {
    expect(cart.state().cart).to.be.an('object');
  });

});
