import React from "react";
import Card from "../../Components/Card";
import "./index.scss";
import { Link } from "react-router-dom";

export default function ServicePage() {
  return (
    <div className="service-page">
      <h2>Generate post ideas and captions in seconds</h2>
      <div className="card-container">
        <Link to={'/service/scratch'}>
          <Card
            title="Start from scratch"
            subtitle="Generate new captions to engage, delight or sell"
            image=""
          />
        </Link>
        <Link to={'/service/inspire'}>
          <Card
            title="Get inspired"
            subtitle="Generate post ideas and captions for a topic"
            image=""
          />
        </Link>
      </div>
    </div>
  );
}
