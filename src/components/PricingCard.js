import { Link } from "react-router-dom";
import "./Styles/PricingCardStyles.css";
import React from "react";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Features -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>- Professional -</h3>
          <span className="bar"></span>
          <p className="btc">$500</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Features -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>- Bussiness -</h3>
          <span className="bar"></span>
          <p className="btc">$1000</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Features -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
