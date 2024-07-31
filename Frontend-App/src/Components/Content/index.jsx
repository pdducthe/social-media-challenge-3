import React from "react";
import "./index.scss";
import BaseButton from "../Button";

export default function ContentCard({ content, tag, ... children }) {
  const firstBtnLabel = children?.buttons?.first || "Share";
  const secondBtnLabel = children?.buttons?.second || "Unsave";
  return (
    <div className="content-card" {...children}>
      <div className="card-content">
        <span className="content">{content}</span>
        <span className="tag">{tag}</span>
      </div>
      <div className="btn-container">
        <BaseButton className='share' label={firstBtnLabel} />
        <BaseButton className='unsave' label={secondBtnLabel} />
        {/* <button className="share">{firstBtnLabel}</button>
        <button className="unsave">{secondBtnLabel}</button> */}
      </div>
      {/* <div className="main-content">
        <span className="content">Introducing Skipli AI - the faster, smarter way to craft compelling content. Experiencing all the magic of AI-driven writing assistant and get great results with fewer headache.</span>
        <span className="tag">#AI #ContentMarketing #Content</span>
      </div>
      <div className="btn-container">
        <button className="share">Share</button>
        <button className="unsave">Unsave</button>
      </div> */}
    </div>
  );
}
