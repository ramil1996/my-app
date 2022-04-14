import React, { useState, useEffect } from "react";
import menucss from "../Menucss/menu.css";
import image from "../image/logo.svg";
import image1 from "../image/menu.svg";
import image2 from "../image/home.svg";
import image3 from "../image/store.svg";
import image4 from "../image/right-store.svg";
import { Link } from "react-router-dom";

import ProductServices from "../services/productServices";

export default function () {
  const [products, setProducts] = useState([]);
  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredNames = products.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    setProducts(filteredNames);
  };

  useEffect(() => {
    let productService = new ProductServices();
    productService.getProducts().then((result) => setProducts(result.data));
  }, [setProducts]);

  return (
    <div>
      <div className="container">
        <div className="left-menu">
          <div className="logo">
            <img src={image} />
          </div>

          <div className="menu">
            <img src={image1} />
          </div>
          <div className="home">
            <img src={image2} />
          </div>
          <div className="store">
            <Link to="detail">
              <img src={image3} />
            </Link>
          </div>
        </div>
        <div className="menu">
          <div className="centre-menu">
            <div className="input-menu">
              <input
                onChange={(e) => filterNames(e)}
                type="search"
                className="input"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
              />
            </div>
            <div className="cards">
              {products.map((product) => (
                <div className="cardss" key={product.id}>
                  <div className="card">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} />
                    </Link>
                  </div>
                  <div>
                    <h6>{product.title}</h6>
                    <p>{product.category}</p>

                    <div className="card-info">
                      <h3>{product.price} $</h3>
                      <img src={image4} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-menu">
          <div className="line"></div>
          <div className="right-main">
            <h1 className="main">BAG</h1>
            <div className="sm-card"></div>
            <Link to="/detail">
              <div className="view-bag">
                <div>
                  <img style={{ marginTop: "5px" }} src={image4} />
                </div>
                <div>
                  <h3 style={{ color: "white", marginLeft: "15px" }}>
                    View Bag
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
