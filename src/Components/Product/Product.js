/* eslint-disable react/style-prop-object */
import React from 'react';

const Product = (props) => {
      // distructing product data 
      const { name, img, star, starCount, category, price, stock, seller} = props.product||{}

      console.log(props.product);
      
      return (
            <div className="col-md-6"> 
                  <div class="card mb-3" style={{ "max-width": "540px" }}>
                        <div class="row g-0">
                              <div class="col-md-5">
                                    <img src={img} class="img-fluid rounded-start" alt="..." />
                              </div>
                              <div class="col-md-7">
                                    <div class="card-body">
                                          <h5 class="card-title fs-6 text-primary">{name}</h5>
                                          <h5 class="card-title fs-6 text-dark mt-3">Seller info: {seller}</h5>
                                          <h5 class="card-title fs-6 text-dark mt-3">Catagory: {category}</h5>
                                          <h5 class="card-title fs-6 text-dark mt-3">Only {stock} product available.</h5>
                                          <p class="card-text fw-bold mt-3">Price: $<span className="text-danger">{price}</span></p>
                                          <button className="btn btn-danger">Add to cart</button>
                                         
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Product;