import React from "react";
import { Link } from "react-router-dom";
import menucss from "../Menucss/users.css";
export default function () {
  return (
    <div>
      <div className="container">
        <div className="bg-card">
          <div className="input-text">
            <h1>Shipping Name</h1> <br />
            <input type="text" id="fname" name="fname" />
            <h1>Street Name</h1> <br />
            <input type="text" id="fname" name="fname" />
            <h1>City</h1> <br />
            <input type="text" id="fname" name="fname" />
            <h1>State/Province</h1> <br />
            <input type="text" id="fname" name="fname" />
            <h1>Country</h1> <br />
            <input type="text" id="fname" name="fname" />
            <input
              style={{
                width: "12px",
                height: "12px",
                margin: "25px 5px 25px 40px ",
              }}
              type="checkbox"
            />
            <label for="vehicle1"> Save this as your default address</label>
            <br />
            <input
              style={{
                color: "white",
                width: "596px",
                height: "40px",
                background: "#1A1F16",
                borderRadius: "10px",
              }}
              type="submit"
              value="Add Adress"
            ></input>
            <Link to="/">
              <h3 className="back">Back</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
