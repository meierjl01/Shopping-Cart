**Day 36 at The Iron Yard:**

This assignment was to build a simple shopping cart application, making up our own data to use to make sure our functions worked. The idea behind this was that making it generic would allow it to be re-used on another application. I generated three items to use so I could make sure everything worked properly.

**Day 37 and 38 at The Iron Yard:**

I used Mocha, Chai, Sinon and Enzyme to test the code I made for this shopping cart app.

- Model Testing on Cart Model:
  - should be a function
  - should create a Backbone model
  - should have a default "total" of 0
  - should have a default "items" of []
  - should have an addItem method
    - it's a function
    - adds an item to the items array
    - should fire a change event when this function runs
  - should have a removeItem method
    - it's a function
    - removes item from the items array
    - should fire a change event when this function runs
  - should have a total method
    - should be a function
  - should run the total function when removeItem and/or addItem functions are run


- Things I think I need to test for but haven't:
    - if a 0 or negative price is passed in to total
    - shouldn't remove item if it's not in the cart
    - tests for inside items array?
    - updating total tests
    - all items in the cart should have an object that includes price and name


- Component Testing on Cart Component:
  - should be a ul
  - should contain a h3 and h2


- Things I think I need to test for but haven't:
  - test for it including the specific cart items and the actual total in the second header, instead of just seeing if the header is in the ul
  - state?


- Component Testing on CartItem Component:
  - it should be a li
  - it should contain two divs as children
  - it should also contain a button as a children
    - it should call a click handler when the button is clicked
  - it should display the item's name and price


- Things I think I need to test for but haven't:
  -
