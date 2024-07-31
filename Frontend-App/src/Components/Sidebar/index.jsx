import React, { useState } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import ProfileIcon from "../../assets/profile.svg";
// @ts-ignore
import ServiceIcon from "../../assets/service.svg";
import "./index.scss";

export default function LeftSidebar() {
  const [activeTab, setActiveTab] = useState("");

  const handleClick = (event) => {
    setActiveTab(event.target.id);
  };
  const tabList = [
    {
      id: "tab-0",
      name: "service",
      img: ServiceIcon,
      label: "Services",
      active: true,
    },
    {
      id: "tab-1",
      name: "profile",
      img: ProfileIcon,
      label: "Profile",
      active: false,
    },
  ];
  return (
    <div className="left-sidebar">
      <div className="tab-btn">
        {tabList.map((item, idx) => (
          <button
            key={idx}
            className={item.id === activeTab ? "active" : "inactive"}
            onClick={handleClick}
          >
            <img src={item.img} alt={item.name} className="icon" />
            <Link id={item.id} to={`${item.name}`}>
              {item.label}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
}
