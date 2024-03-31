import React from "react";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
const Gotop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 10, right: 0, behavior: "smooth" });
  };
  return (
    <div className="Gotop">
      <MdOutlineVerticalAlignTop size={40} className="scroll"  onClick={goToBtn} />
    </div>
  );
};

export default Gotop;