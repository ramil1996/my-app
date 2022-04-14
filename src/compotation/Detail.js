import menucss from "../Menucss/detail.css";
import image from "../image/logo.svg";
import image1 from "../image/menu.svg";
import image2 from "../image/home.svg";
import image3 from "../image/store.svg";
import image4 from "../image/notebook.svg";
import image5 from "../image/r-img.svg";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function () {
  const [value, setValue] = useState(0);
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
            <div className="items">
              <div className="items-img">
                <img src={image4} />
              </div>
              <div className="items-detail">
                <h1>Dell XPS 13</h1>
                <p>White</p>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </h3>
                <img />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h6>1799.99  {value}</h6>
                  </div>
                  <div style={{ display: "flex" }}>
                    <h1 onClick={() => setValue(0)} style={{ color: "red" }}>
                      -
                    </h1>
                    <p style={{ margin: "10px 15px 0 15px" }}>{value}</p>
                    <h3
                      onClick={() => setValue(value + 1)}
                      style={{ color: "green" }}
                    >
                      +
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-menus">
              <div className="lines"></div>
              <div className="right-mains">
                <h1 className="main-bag">BAG</h1>
                <div className="sm-card"></div>
                <div className="total">
                  <h3>Bag Total: {value}</h3>
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
      </div>
    </div>
  );
}
