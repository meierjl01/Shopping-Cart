import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react';

import CartItem from '../../app/scripts/components/cartitem';

describe('cart item component', () => {
  let cartItem;
  let spy;

  beforeEach(() => {
    spy = spyOnComponentMethod(CartItem, 'handleRemove');
    cartItem = shallow(<CartItem key={1} item={'item'} location={1} />);
  });

  afterEach(() => {
    spy.restore();
  });

  it('should be a li', () => {
    expect(cartItem.is('li')).to.equal(true);
  });

  it('should contain two divs as children', () => {
    expect(cartItem.children('div')).to.have.length(2);
  });

  it('should contain a button as a child', () => {
    expect(cartItem.children('button')).to.have.length(1);
  });

  it('should display the item\'s name', () => {
    cartItem.setProps({item:{name: 'sword'}});
    expect(cartItem.find('name').text()).to.equal('sword');
  });

  it('should display the item\'s price', () => {
    cartItem.setProps({item:{price: 100}});
    expect(cartItem.find('price').text()).to.equal('100');
  });

  it('should call the click handler when the button is clicked', () => {
    cartItem.find('button').simulate('click');
    expect(spy.callCount).to.equal(1);
  });
});
