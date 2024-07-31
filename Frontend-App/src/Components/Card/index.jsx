import React from "react";
import './index.scss';

export default function Card({ title, subtitle, image}) {
  return (
    <div className="card">
      <div className="left-container">
        {image && (
          <div className="image-container">
            <img src={image} alt=""/>
          </div>
        )}
      </div>
      <div className="right-container">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
