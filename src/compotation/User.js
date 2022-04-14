import React from "react";
import { Link } from "react-router-dom";
import menu from "../Menucss/user.css";
export default function Salaaaaammmamamamaama() {
  return (
    <div style={{}}>
      <div className="container">
        <div className="card-page">
          <div className="card-user">
            <div>
              <h1>SHIPPING ADRESS</h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "750px",
              }}
            >
              <div>
                <p>Ramil Mammadov</p>
                <h2>Nariman Narimanov home:44</h2>
                <h3>Gabala</h3>
                <h4>Azerbaijan</h4>
              </div>
              <div className="card-button">
                <Link to="/adress">
                  <button>Change</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
