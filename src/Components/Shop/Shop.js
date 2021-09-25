import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
      const [products, setProduct] = useState([]);

      // state for cart product 
      const [cart, setCart] = useState([]);

      //declare event handler where state is  

      const handleAddProduct =(product) => {
            //set products one by one in the cart
            const newCart = [...cart , product]
            setCart(newCart);

            // console.log(product);

      }

      useEffect(() => {
            fetch("/productsData.json")
                  .then(res => res.json())
                  .then(data => setProduct(data))
      }, [])

      return (
            <div>
                  <div className="row">
                        <div className="col-md-9">
                              {/* product load component */}

                              <div className="row">
                                    {
                                          products.map(product => <Product product={product}
                                          handleAddProduct={handleAddProduct}

                                          >
                                          </Product>)
                                    }

                              </div>

                        </div>
                        <div className="col-md-3">
                              {/* cart calculation  */}
                              <Cart
                              cart={cart}
                              >

                              </Cart>

                        </div>
                  </div>
            </div>

      );
};

export default Shop;