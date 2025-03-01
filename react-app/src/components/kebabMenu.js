import React, { useState, useRef, useEffect } from "react";
import { EllipsisVertical } from "lucide-react";
import ToggleSwitch from "./toggleSwitch";
import "../css/kebabMenu.css";

function KebabMenu() {
  const [kebabMenuOpen, setIsKebabMenuOpen] = useState(false);

  const kebabMenuRef = useRef(null);

  const handleClick = (e) => {
    setIsKebabMenuOpen(!kebabMenuOpen);
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (!kebabMenuRef.current.contains(e.target)) {
        setIsKebabMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, []);
  return (
    <div>
      <EllipsisVertical
        className="kebab-menu-icon"
        onClick={handleClick}
        ref={kebabMenuRef}
      />
      <div className={`kebab-menu-container ${kebabMenuOpen ? "open" : ""}`}>
        <ToggleSwitch />
      </div>
    </div>
  );
}

export default KebabMenu;
