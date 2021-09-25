import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {

      const { cart } = props || {}

      // using reduce to do calculation on the cart 
      const totalReducer = (previousValue, currentValue) => previousValue + currentValue.price;
      const total = cart.reduce(totalReducer, 0).toFixed(2);

      const tax = (0.1 * total).toFixed(2);

      const grandTotal = total + tax;

      // console.log(cart);
      return (
            <div>
                  <h3>Item Added: {cart.length}
                  </h3>
                  <ul>
                        {
                              cart.map(product => <li>{product.name}</li>)
                        }
                  </ul>
                  <h2>Tax:{tax}</h2>
                  <h2>Total: {total}</h2>
                  <h2>Grand Total: {grandTotal}</h2>
            </div>
      );
};

export default Cart;