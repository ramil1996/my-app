import menucss from "../Menucss/detail.css";
import image from "../image/logo.svg";
import image1 from "../image/menu.svg";
import image2 from "../image/home.svg";
import image3 from "../image/store.svg";
import image4 from "../image/notebook.svg";
import image5 from "../image/r-img.svg";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { ProductContext } from "../App";

export default function () {
  const context = useContext(ProductContext);
  const totalCountAmount = context.state.cart
    .reduce(
      (total, product) => (total = total + product.price * product.count),
      0
    )
    .toFixed(2);
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
            <Link to="/">
              <img src={image2} />
            </Link>
          </div>
          <div className="store">
            <img src={image3} />
          </div>
        </div>
        <div>
          <h1 className="main">Check your Bag Items</h1>

          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "1000px",
                minHeight: "150px",
              }}
            >
              <div>
                {context.state.cart.map((product) => (
                  <div>
                    <div className="items">
                      <div className="items-img">
                        <img src={product.image} />
                      </div>
                      <div className="items-detail">
                        <h1>{product.title}</h1>
                        <p>{product.category}</p>
                        <h3>{product.description}</h3>
                        <img />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <h6>
                              {(product.price * product.count).toFixed(2)}
                            </h6>
                          </div>
                          <div>
                            <div
                              style={{ display: "flex", marginRight: "15px" }}
                            >
                              <h1
                                onClick={() => context.decrease(product.id)}
                                style={{ color: "red" }}
                              >
                                -
                              </h1>
                              <p style={{ margin: "10px 15px 0 15px" }}>
                                {product.count}
                              </p>
                              <h3
                                onClick={() => context.increase(product.id)}
                                style={{ color: "green" }}
                              >
                                +
                              </h3>

                              <button
                                className="remove-button"
                                onClick={() =>
                                  context.removeFromCart(product.id)
                                }
                              >
                                Remove Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                width: "500px",
                height: "390px",
              }}
            >
              <div className="right-menus">
                <div className="lines"></div>
                <div className="right-mains">
                  <h1 className="main-bag">BAG</h1>
                  <div className="sm-card"></div>
                  <div className="total">
                    <h3>Bag Total:{totalCountAmount} </h3>
                  </div>
                  <Link to="user">
                    <div className="button-check">
                      <div>
                        <img src={image5} />
                      </div>
                      <div>
                        <h5>Checkout</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
