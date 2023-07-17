import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

interface IFormProps {
  tab: object;
  isFilterTab: boolean;
  isActiveTab: boolean;
  handleClick: React.FC;
}

const Tab: React.FC<IFormProps> = ({
  tab,
  isFilterTab,
  isActiveTab,
  handleClick,
}) => {
  const snap: any = useSnapshot(state) as object;

  const activeStyles: object =
    isFilterTab && isActiveTab
      ? { backgroundColor: String(snap?.color), opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12"}`}
      />
    </div>
  );
};

export default Tab;
