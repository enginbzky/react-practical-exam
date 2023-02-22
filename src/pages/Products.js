import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import { UserContext } from "../UserContext.js";
import { Cart4 } from "react-bootstrap-icons";

function Products() {
  const { productList, handleAddProduct } = useContext(UserContext);

  const showProducts = () => {
    const template = productList.map((product) => (
      <div className="">
        <div className="card" key={product.id}>
          <img src={product.images[0]} className="card-img-top" alt="..." />
          <br></br>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Category: {product.category}</li>
            <li className="list-group-item">Rating: {product.rating}</li>
            <li className="list-group-item">Stock: {product.stock}</li>
            <li className="list-group-item">Price: {product.price}</li>
          </ul>
          <div className="card-body">
            <button
              className="product-add-button"
              onClick={() => handleAddProduct(product)}
            >
              <Cart4 />
            </button>
          </div>
        </div>
      </div>
    ));
    return template;
  };

  return (
    <div>
      <Navbar className="navbar" />
      <h2>Product List</h2>
      <hr />
      <div className="card-container d-flex justify-content-around ms-1">
        {showProducts()}
      </div>
    </div>
  );
}

export default Products;
