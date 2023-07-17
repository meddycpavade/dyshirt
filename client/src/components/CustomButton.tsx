import React, { ReactElement } from "react";
import state from "../store/index";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers.js";

interface IFormProps {
  type: string;
  title: string;
  customStyles: string;
  handleClick: React.FC;
}
const CustomButton: React.FC<IFormProps> = ({
  customStyles,
  handleClick,
  title,
  type,
}): ReactElement => {
  const snap = useSnapshot(state) as object;

  const generateStyle = (type: string) => {
    if (type === "filled") {
      return { backgroundColor: String(snap.color), color: String(getContrastingColor(snap.color)) };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
