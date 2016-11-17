import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react';

import Cart from '../../app/scripts/components/cart';

describe ('cart component', () => {

  let cart;

  beforeEach( () => {
    cart = shallow(<Cart />);
  });

  it('should be a ul', () => {
    expect(cart.is('ul')).equal(true);
  });

//can I just say headers and have length of two or should I be specific like this since they're different header numbers:
  it('should contain an h2 and h3 as children', () => {
    expect(cart.children('h2')).to.have.length(1);
    expect(cart.children('h3')).to.have.length(1);
  });

//do I add something to say it should include all of the specific cart items constructor and the actual total in the second header?

});
