import React, { useEffect, useState } from "react";
import image from "../image/logo.svg";
import image1 from "../image/menu.svg";
import image2 from "../image/home.svg";
import image3 from "../image/store.svg";
import image4 from "../image/arrow.svg";
import image5 from "../image/picture-info.svg";
import image6 from "../image/stars.svg";
import image7 from "../image/bag.svg";
import menucss from "../Menucss/details.css";
import { Link, useParams } from "react-router-dom";
import ProductServices from "../services/productServices";
export default function () {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    const productService = new ProductServices();
    productService.getProduct(id).then((result) => setProduct(result.data));
  }, [id]);
  return (
    <div>
      {product && (
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
              <img src={image3} />
            </div>
          </div>

          <div className="menu ">
            <div>
              <Link to="/">
                <div className="menu-main">
                  <div className="arrow">
                    <img src={image4} />
                  </div>
                  <div>
                    <h1 className="main-menu">Back</h1>
                  </div>
                </div>
              </Link>
              <div>
                <div className="menu-info">
                  <div className="picture-info">
                    <img src={product.image} />
                  </div>
                  <div className="products-info">
                    <h1>{product.title}</h1>
                    <p>{product.category}</p>
                    <h4>{product.rating.rate}</h4>
                    <h3>{product.price}</h3>
                    <h6>{product.description}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
